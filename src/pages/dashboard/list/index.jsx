import React, { useEffect, useState } from "react";

import { DashboardLayout } from "layouts";
import {
  Grid,
  Container,
  Box,
  Typography,
  Paper,
  makeStyles,
  Button,
  Avatar,
} from "@material-ui/core";

import Amplify, { PubSub, Auth as AuthToAmplify } from "aws-amplify";

import quiz_info from "../../../data/quiz-data.json";

import useLocalStorage from "../../../hooks/useLocalStorage";
import { apiObject } from "api";
import { getStatusText } from "common";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { timerState } from "state";

import { itemUrl } from "../../../common/coomon-variable";

import { Analytics, AWSKinesisFirehoseProvider } from "aws-amplify";
// hooks
import useLoadingFunction from "hooks/useLoadingFunction";
import sendErrorLog from "../../../js/sendErrorLog";

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: "80vh",
  },

  info: {
    "& > *": {
      fontWeight: 700,
    },
  },

  next_button: {
    width: "600px",
    background: "#ffd344",
    color: "#000",
    fontSize: 30,
    fontWeight: 700,

    marginTop: theme.spacing(8),
    padding: theme.spacing(2, 0),
  },
}));

// let fileUrl = "https://file.dkdic.com/item";

let quiz_status_list_begin = ["EVENT_DEFAULT", "EVENT_WAIT", "EVENT_START"];

let quiz_status_list_end = ["EVENT_STATISTICS", "EVENT_END", "EVENT_EXIT"];

let quiz_status_list = [];

let quiz_data_list_begin = [
  {
    msg: {
      ko: "이벤트를 엽니다.",
    },
  },
  {
    msg: {
      ko: "퀴즈를 대기합니다.",
    },
  },
  {
    msg: {
      ko: "퀴즈를 시작합니다.",
    },
  },
];

let quiz_data_list_statistics = [
  {
    quiz_no: 9999,
    msg: {
      ko: "퀴즈 결과",
    },
  },
];

let quiz_data_list_end = [
  {
    quiz_no: 9999,
    msg: {
      ko: "퀴즈 종료",
    },
  },
];

let quiz_data_list = [];

const List = (props) => {
  const { match } = props;
  const classes = useStyles();

  const questionArray = new Array(
    "EVENT_QUIZ_QUESTION",
    "EVENT_QUIZ_CHECK",
    "EVENT_QUIZ_ANSWER"
  );
  const [quizInfo, setQuizInfo] = useState(quiz_info);
  const [curStatus, setCurStatus] = useState("EVENT_DEFAULT");
  const setTimer = useSetRecoilState(timerState);

  const [currentQuizIndex, setCurrentQuizIndex] = useLocalStorage(
    "bde_current_quiz_index",
    -1
  );

  const [currentQuizTime, setCurrentQuizTime] = useLocalStorage(
    "bde_current_quiz_time",
    0
  );

  const loadingFunction = useLoadingFunction();

  const createNewEvent = async () => {
    try {
      const event = await apiObject.postEvent({}, loadingFunction);
      console.log("log -> ----------------------------------------");
      console.log("log -> ~ updateQuizStatus ~ event", event);
      console.log("log -> ----------------------------------------");

      alert(`새로운 이벤트가 생성되었습니다 : ${event.event_no}`);
      // throw new Error()
    } catch (error) {
      alert(`이벤트가 생성되지 않았습니다`);
      console.log({ error });
      sendErrorLog("dashboard list index.jsx", "createNewEvent", error, {});
    }
  };

  const updateQuizStatus = async () => {
    let _i = currentQuizIndex + 1;

    try {
      // if (quiz_status_list[_i] === "EVENT_WAIT") {
      //   const event = await apiObject.postEvent({});
      //   console.log("log -> ----------------------------------------");
      //   console.log("log -> ~ updateQuizStatus ~ event", event);
      //   console.log("log -> ----------------------------------------");
      // }

      const time = Date.now();

      quiz_data_list[_i] = {
        ...quiz_data_list[_i],
        time: time,
        time_interval: 90,
      };

      const quiz_info = {
        quiz_status: quiz_status_list[_i],
        quiz_data: quiz_data_list[_i],
      };

      if (quiz_status_list[_i] === "EVENT_WAIT") {
        await apiObject.openEvent({});
      }

      if (quiz_status_list[_i] !== "EVENT_EXIT") {
        const quizStatus = await apiObject.postQuizStatus(
          {
            quiz_status: quiz_info.quiz_status,
            quiz_data: quiz_info.quiz_data,
          },
          loadingFunction
        );

        await PubSub.publish("bde_quiz", quiz_info);
      }

      setCurrentQuizTime(time);
      setCurrentQuizIndex(_i);
      setTimer(0);
      // throw new Error();
    } catch (error) {
      alert("일시적인 장애입니다. 다시 시도해주세요.");
      sendErrorLog("dashboard list index.jsx", "updateQuizStatus", error, {});
    }
  };

  const initQuiz = (params) => {
    let quiz_status_list_dump = [];
    let quiz_data_list_dump = [];
    let quiz_data_correct_answer = [];

    for (let index = 0; index < quiz_info.length; index++) {
      const quiz = quiz_info[index];

      // REWARD
      quiz_status_list_dump.push(`EVENT_QUIZ_REWARD_${quiz.no}`);
      quiz_data_list_dump.push({
        quiz_no: quiz.no,
        msg: {
          ko: `${quiz.no}번 퀴즈 보상`,
        },
        reward: quiz.rewards.map((reward) => {
          reward.img_url = itemUrl + reward.img_url;

          return reward;
        }),
        reward_rate: ("" + quiz.reward_rate).replace("%", ""),
      });

      // QUESTION
      quiz_status_list_dump.push(`EVENT_QUIZ_QUESTION_${quiz.no}`);
      quiz_data_list_dump.push({
        quiz_no: quiz.no,

        msg: {
          ko: `${quiz.no}번 퀴즈 문제`,
        },
        question: quiz.question,
        answers: quiz.answers,
      });

      // CHECK
      quiz_status_list_dump.push(`EVENT_QUIZ_CHECK_${quiz.no}`);
      quiz_data_list_dump.push({
        quiz_no: quiz.no,
        msg: {
          ko: `${quiz.no}번 퀴즈 확인중`,
        },
        question: quiz.question,
        answers: quiz.answers,
      });

      // ANSWER

      quiz_status_list_dump.push(`EVENT_QUIZ_ANSWER_${quiz.no}`);
      quiz_data_list_dump.push({
        quiz_no: quiz.no,
        msg: {
          ko: `${quiz.no}번 퀴즈 정답`,
        },
        correct_answer: quiz.correct_answer,
        question: quiz.question,
        answers: quiz.answers,
      });

      quiz_data_correct_answer.push(quiz.correct_answer);
    }

    //  정답
    quiz_data_list_statistics[0]["correct_answers"] = quiz_data_correct_answer;
    quiz_data_list_end[0]["url"] = "https://www.google.com";

    quiz_status_list = quiz_status_list_begin
      .concat(quiz_status_list_dump)
      .concat(quiz_status_list_end);

    quiz_data_list = quiz_data_list_begin
      .concat(quiz_data_list_dump)
      .concat(quiz_data_list_statistics)
      .concat(quiz_data_list_end);
  };

  if (quiz_status_list.length === 0 || quiz_data_list.length === 0) {
    initQuiz();
  }

  // const getStatisticsAll = async () => {
  //   const data = await apiObject.getStatisticsAll({ locale: "ko" });
  //   console.log("log -> --------------------------------------");
  //   console.log("log -> ~ getStatisticsAll ~ data", data);
  //   console.log("log -> --------------------------------------");
  // };

  const resetEvent = async () => {
    console.log("log -> --------------------------------");

    try {
      const data = await apiObject.closeEvent({});
      console.log("log -> --------------------------------");
      console.log("log -> ~ resetEvent ~ data", data);
      console.log("log -> --------------------------------");

      const quizStatus = await apiObject.postQuizStatus(
        {
          quiz_status: "EVENT_WAIT",
          quiz_data: {},
        },
        loadingFunction
      );

      setCurrentQuizIndex(0);
      setTimer(0);
      setCurrentQuizTime(new Date().getTime());
      // throw new Error()
    } catch (error) {
      console.log({ error });
      sendErrorLog("dashboard list index.jsx", "resetEvent", error, {});
    }
  };

  const nextEvent = (params) => {
    setCurrentQuizIndex((index) => {
      if (index < quiz_status_list.length - 1) {
        setTimer(0);
        return index + 1;
      }
      alert("이후의 상태가 없습니다.");
      return index;
    });

    setCurrentQuizTime(new Date().getTime());
  };

  const backEvent = (params) => {
    setCurrentQuizIndex((index) => {
      if (index >= 1) {
        setTimer(0);
        return index - 1;
      }
      alert("이전의 상태가 없습니다.");
      return index;
    });

    setCurrentQuizTime(new Date().getTime());
  };

  const sendErrorLog = (params) => {
    console.log("send erro log");

    try {
      Analytics.record(
        {
          data: {
            error_msg: "mqtt_error",
            error: {},
          },
          streamName: "bde-dev-data",
        },
        "AWSKinesisFirehose"
      );
    } catch (error) {
      console.log("log -> ------------------------------------");
      console.log("log -> ~ sendErrorLog ~ error", error);
      console.log("log -> ------------------------------------");
    }
  };

  useEffect(() => {
    Analytics.addPluggable(new AWSKinesisFirehoseProvider());

    Analytics.configure({
      AWSKinesisFirehose: {
        // OPTIONAL -  Amazon Kinesis Firehose service region
        region: "ap-northeast-1",

        // OPTIONAL - The buffer size for events in number of items.
        bufferSize: 5000,

        // OPTIONAL - The number of events to be deleted from the buffer when flushed.
        flushSize: 100,

        // OPTIONAL - The interval in milliseconds to perform a buffer check and flush if necessary.
        flushInterval: 300, // 5s

        // OPTIONAL - The limit for failed recording retries.
        resendLimit: 5,
      },
    });
  }, []);

  // useEffect(() => {
  //   getStatisticsAll();
  // }, []);

  useEffect(() => {
    const statusText = getStatusText(quiz_status_list[currentQuizIndex]);

    if (statusText) {
      setCurStatus(statusText);
    }
  }, [currentQuizIndex]);

  return (
    <DashboardLayout>
      <Container maxWidth="xl">
        <Box py={2}>
          {currentQuizIndex === 0 ? (
            <Button
              style={{
                background: "#eeeeee",
                // width: "100%",
              }}
              onClick={createNewEvent}
            >
              {"create new event"}
            </Button>
          ) : (
            <Box height="36px" />
          )}

          <Grid container alignItems="flex-end">
            {/* <Grid item>
              <Typography variant="h4" display="inline">
                Dash Board&nbsp;
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                display="inline"
                style={{ fontWeight: 700 }}
              >
                {` index ${currentQuizIndex}`}
              </Typography>
            </Grid> */}

            <Grid item>
              <Button
                style={{
                  marginLeft: "20px",
                  background: "#eeeeee",
                  // width: "100%",
                }}
                onClick={resetEvent}
              >
                {"RESET"}
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{
                  background: "#eeeeee",
                  // width: "100%",
                }}
                onClick={backEvent}
              >
                {"BACK"}
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{
                  background: "#eeeeee",
                  // width: "100%",
                }}
                onClick={nextEvent}
              >
                {"NEXT"}
              </Button>
            </Grid>
          </Grid>

          <Box mt={3}>
            {currentQuizIndex >= 0 && (
              <Box
                p={8}
                boxShadow={5}
                borderRadius={40}
                position="relative"
                minHeight="80vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  position="absolute"
                  left={32}
                  top={32}
                  className={classes.info}
                >
                  <Box mb={4}>
                    <Typography variant="h6" style={{ fontWeight: 700 }}>
                      실시간 현장 컨트롤
                    </Typography>
                  </Box>

                  {quiz_data_list[currentQuizIndex]?.quiz_no &&
                    quiz_data_list[currentQuizIndex]?.quiz_no !== 9999 && (
                      <>
                        <Typography
                          variant="h4"
                          style={{ fontFamily: "Montserrat" }}
                        >
                          Quiz
                        </Typography>
                        <Typography
                          variant="h1"
                          style={{ fontFamily: "Montserrat" }}
                        >
                          {quiz_data_list[currentQuizIndex]?.quiz_no}
                        </Typography>
                      </>
                    )}
                </Box>
                <Box position="absolute" right={32} top={32} textAlign="right">
                  <Typography
                    variant="h6"
                    style={{ marginLeft: "60px" }}
                  >{`현재 단계: ${quiz_data_list[currentQuizIndex]?.msg?.ko}`}</Typography>
                  <TimerComponent currentQuizTime={currentQuizTime} />
                </Box>

                {curStatus === "EVENT_QUIZ_REWARD" && (
                  // {quiz_data_list[currentQuizIndex].reward &&
                  <Box>
                    <Typography
                      variant="h4"
                      style={{ fontWeight: 700, whiteSpace: "pre-line" }}
                    >
                      문제보상조건:{" "}
                      {quiz_data_list[currentQuizIndex].reward_condition?.ko}
                    </Typography>
                    <Box mt={3} px={4}>
                      {quiz_data_list[currentQuizIndex].reward?.map(
                        (item, index) => (
                          <Typography
                            variant="h6"
                            style={{ fontWeight: 700 }}
                            key={index}
                          >
                            {index + 1}. {item.desc?.ko}
                          </Typography>
                        )
                      )}
                    </Box>
                  </Box>
                )}
                {questionArray.includes(curStatus) && (
                  <Box>
                    <Typography
                      variant="h4"
                      style={{ fontWeight: 700, whiteSpace: "pre-line" }}
                    >
                      문제: {quiz_data_list[currentQuizIndex].question?.ko}
                    </Typography>
                    <Box mt={3} px={4} display="flex">
                      {quiz_data_list[currentQuizIndex].answers?.map(
                        (item, index) => (
                          <Typography
                            variant="h6"
                            style={{
                              fontWeight: 700,
                              marginLeft: "20px",
                              color:
                                curStatus === "EVENT_QUIZ_ANSWER" &&
                                index ===
                                  quiz_data_list[currentQuizIndex]
                                    .correct_answer -
                                    1
                                  ? "red"
                                  : "#000",
                            }}
                            key={index}
                          >
                            {index + 1}. {item.content?.ko}
                          </Typography>
                        )
                      )}
                    </Box>
                  </Box>
                )}

                {![...questionArray, "EVENT_QUIZ_REWARD"].includes(
                  curStatus
                ) && (
                  <img
                    src="/images/question.png"
                    alt="question icon"
                    width="150px"
                    height="200px"
                    style={{ objectFit: "contain" }}
                  />
                )}

                {curStatus === "EVENT_END" && (
                  <Box mt={4} fontSize="40px" fontWeight={700}>
                    퀴즈가 종료되었습니다.
                  </Box>
                )}

                {curStatus !== "EVENT_END" && (
                  <Button
                    onClick={updateQuizStatus}
                    className={classes.next_button}
                    variant="contained"
                  >
                    다음: {quiz_data_list[currentQuizIndex + 1]?.msg?.ko}
                  </Button>
                )}
              </Box>

              // <Paper elevation={2} className={classes.paper}>
              //   <Grid>
              //     <Typography>
              //       {`현재 단계 :${quiz_status_list[currentQuizIndex]}`}
              //     </Typography>

              //     {currentQuizIndex < quiz_status_list.length - 1 && (
              //       <Grid>
              //         <Button
              //           style={{
              //             background: "#eeeeee",
              //             width: "100%",
              //           }}
              //           onClick={updateQuizStatus}
              //         >
              //           {`다음단계 :${quiz_status_list[currentQuizIndex + 1]}`}
              //         </Button>
              //         <Typography>{`-- 보낼내용 --`}</Typography>
              //         <Typography>
              //           {JSON.stringify(
              //             quiz_data_list[currentQuizIndex + 1]?.msg || "",
              //             null,
              //             3
              //           )}
              //         </Typography>
              //         <Typography>
              //           {JSON.stringify(quiz_data_list[currentQuizIndex + 1])}
              //         </Typography>
              //       </Grid>
              //     )}
              //   </Grid>
              // </Paper>
            )}
          </Box>
        </Box>
      </Container>
    </DashboardLayout>
  );
};

const TimerComponent = (props) => {
  const timer = useRecoilValue(timerState);
  const setTimer = useSetRecoilState(timerState);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const diff = parseInt(
  //       new Date().getTime() / 1000 -
  //         (props.currentQuizTime ? props.currentQuizTime : 0) / 1000
  //     );

  //     const _timer = timer + diff;

  //     setTimer(_timer);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [props.currentQuizTime]);

  return (
    <Typography variant="h5" style={{ marginTop: "5px", fontWeight: 700 }}>
      {`${Math.floor(timer / 60)}:${timer % 60 < 10 ? "0" : ""}${timer % 60}`}
    </Typography>
  );
};

export default List;
