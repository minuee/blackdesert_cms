import React, { useEffect, useLayoutEffect, useRef } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { apiObject } from "api";

import Accounts from "./pages/accounts";

//-------------------------------------------
// page

import Dashboard from "./pages/dashboard";
// import DevJuns from "./pages/devJuns";
import DataChart from "./pages/data-chart";
// import QuizControl from "./pages/quiz-control";

//-------------------------------------------
// redux
import { useDispatch, useSelector } from "react-redux";

import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { isWebState, quizState, isSubscribeState, timerState } from "state";

//--------------------------------------------------
// auth
import { Auth, UserState } from "@psyrenpark/auth";

import useLoadingFunction from "hooks/useLoadingFunction";

import Amplify, {
  PubSub,
  Auth as AuthToAmplify,
  Analytics,
  AWSKinesisFirehoseProvider,
} from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub";

import sendErrorLog from "./js/sendErrorLog";

Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: "ap-northeast-1",
    aws_pubsub_endpoint:
      "wss://a1k6gboano130t-ats.iot.ap-northeast-1.amazonaws.com/mqtt",
    // aws_pubsub_endpoint: "wss://a1k6gboano130t-ats.뷁.ap-northeast-1.amazonaws.com/mqtt",
  })
);

PubSub.configure({});

const Routes = () => {
  const reducer = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const loadingFunction = useLoadingFunction();

  const mySubscribeRef = useRef(null);

  const [isRunSubscribe, setIsRunSubscribe] = useRecoilState(isSubscribeState);
  const setTimer = useSetRecoilState(timerState);

  const checkAuth = async () => {
    try {
      var auth = await Auth.currentSession();
      // await Auth.signOut();

      var cognitoIdentityInfo = await AuthToAmplify.currentCredentials();

      const cognitoIdentityId = cognitoIdentityInfo.identityId;

      var data = await apiObject.putAdminInit(
        {
          uuid: cognitoIdentityId,
        },
        () => {}
      );
      console.log("log -> -------------------------------");
      console.log("log -> ~ checkAuth ~ data", data);
      console.log("log -> -------------------------------");

      dispatch({
        type: "SET_USER_STATE",
        payload: UserState.SIGNED,
      });

      // 그룹확인
      const isAdmin = await Auth.isIncludeGroup("root");

      console.log({ isAdmin });

      dispatch({
        type: "SET_MY_USER",
        payload: { isAdmin: isAdmin },
      });

      setTimeout(() => {
        setIsRunSubscribe(true);
      }, 1000);
    } catch (error) {
      console.log("checkToLogin -> error", error);

      await Auth.signOut();

      dispatch({
        type: "SET_USER_STATE",
        payload: UserState.NOT_SIGN,
      });
    }
  };

  const _mqttSubscribe = () => {
    console.log("log -> ----------------------------------------------");
    console.log("log -> ~ Main ~ _mqttSubscribe");
    console.log("log -> ----------------------------------------------");
    if (mySubscribeRef?.current) {
      return null;
    }

    mySubscribeRef.current = PubSub.subscribe("bde_quiz").subscribe({
      next: (data) => {
        console.log("data", data.value);
        console.log(
          "quiz_status",
          data.value.quiz_status.replace(/_[\d]+$/, "")
        );
      },
      error: (error) => {
        console.error(error);
        sendErrorLog("Routes.jsx", "PubSub subscribe", error, {});
      },
      complete: () => console.log("done"),
      close: () => console.log("close"),
    });
  };

  const _mqttRelease = () => {
    if (mySubscribeRef?.current) {
      mySubscribeRef.current.unsubscribe();
      mySubscribeRef.current = null;
    }
  };

  const rootMenu = (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />

        <Route exact path="/data-chart" component={DataChart} />

        <Redirect to="/dashboard" />
      </Switch>
    </BrowserRouter>
  );

  const subMenu = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/data-chart" component={DataChart} />

        <Redirect to="/data-chart" />
      </Switch>
    </BrowserRouter>
  );

  useEffect(() => {
    if (isRunSubscribe) {
      console.log("_mqttSubscribe");
      _mqttSubscribe();
    }
  }, [isRunSubscribe]);

  useEffect(() => {
    return () => {
      console.log("_mqttRelease");
      _mqttRelease();
    };
  }, []);

  useEffect(() => {
    checkAuth();
    // initCodeList();
  }, [reducer.userState]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

  return (
    <>
      {reducer.userState !== UserState.SIGNED ? (
        <BrowserRouter>
          <Switch>
            <Route path="/accounts" exact component={Accounts} />
            <Redirect to="/accounts" />
          </Switch>
        </BrowserRouter>
      ) : (
        Object.keys(reducer.myUser).find((x) => x === "isAdmin") &&
        (reducer.myUser.isAdmin ? rootMenu : subMenu)
      )}
    </>
  );
};

export default Routes;
