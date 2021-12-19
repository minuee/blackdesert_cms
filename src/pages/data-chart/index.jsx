import React, { useEffect, useState } from "react";

import { DashboardLayout } from "layouts";
import {
  Grid,
  Container,
  Typography,
  Paper,
  makeStyles,
  Button,
  Divider,
  Box,
} from "@material-ui/core";

// redux
import { useSelector, useDispatch } from "react-redux";

import useLocalStorage from "../../hooks/useLocalStorage";

import BasicPieChart from "../../components/rechart-components/BasicPieChart";
import BasicBarChart from "../../components/rechart-components/BasicBarChart";
import HorizontalBarChart from "../../components/rechart-components/HorizontalBarChart";

import { useViewLogic } from "./viewLogic";

import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

import CustomizedTypography from "components/CustomizedTypography";

import { ColorButton } from "material-ui-color";
import NumberFormat from "react-number-format";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CustomizedDivider from "components/CustomizedDivder";

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: "80vh",
  },
  // pieChartLegendTitle: {
  //   "& *": {
  //     marginLeft: 4,
  //     marginRight: 4,
  //   },
  // },
}));

const Title = ({ currentQuizIndex }) => {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Typography variant="h4" display="inline">
          Dash Board
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" display="inline">
          {`index ${currentQuizIndex}`}
        </Typography>
      </Grid>
    </Grid>
  );
};

const DataChart = (props) => {
  const { match } = props;
  const classes = useStyles();
  const reducer = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const reducerKey = "statistics";
  const { getStatisticsAll } = useViewLogic();

  const [currentQuizIndex, setCurrentQuizIndex] = useLocalStorage("bde_current_quiz_index", -1);

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const [isLoading, setIsLoading] = useState(true);

  const COLORS = [
    "#fad336",
    "#f2637b",
    "#3aa0ff",
    "#3445cf",
    "#7843dd",
    "#36cbcb",
    "#3EB7CD",
    "#67D287",
  ];

  // const getData = async () => {
  //   setIsLoading(false);
  //   await getStatisticsAll();
  //   setIsLoading(true);
  // };

  useEffect(() => {
    getStatisticsAll();
    // setTmpData();

    return () => {
      dispatch({
        type: "GET_STATISTICS",
        payload: {
          data: {
            ...reducer.defaultStatistics,
          },
        },
      });
    };
  }, []);

  return (
    <DashboardLayout>
      <Container maxWidth="xl">
        {isLoading && (
          <Box pt={3}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12}>
                <Title currentQuizIndex={currentQuizIndex} />
              </Grid> */}
              {/* <Grid item xs={2}>
                <Button onClick={getData}>{"reset"}</Button>
              </Grid> */}

              <Grid item xs={12} lg={6}>
                <Paper elevation={2} style={{ minHeight: "100%" }}>
                  <Box p={2}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="h6">언어 별 참여 인원</Typography>
                      </Grid>

                      <Grid item xs={12} sm={8} container justify="center">
                        <BasicPieChart
                          apiData={reducer[reducerKey].each_language.list}
                          totalCount={reducer[reducerKey].each_platform.total_count}
                          COLORS={COLORS}
                        />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <Grid container>
                          <Grid
                            item
                            xs={12}
                            // className={classes.pieChartLegendTitle}
                          >
                            <Grid container justify="space-between" alignItems="center">
                              <Grid item>
                                <Grid container alignItems="center">
                                  <PeopleAltOutlinedIcon fontSize="large" />
                                  <Box ml={1}>
                                    <Typography display="inline" variant="body1">
                                      총 참여인원
                                    </Typography>
                                  </Box>
                                </Grid>
                              </Grid>
                              <Grid item>
                                <CustomizedTypography
                                  display="inline"
                                  variant="h4"
                                  fontWeight={600}
                                >
                                  <NumberFormat
                                    value={reducer[reducerKey].each_platform.total_count}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    // suffix={"원"}
                                  />
                                </CustomizedTypography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Box pt={2}>
                              {reducer[reducerKey].each_language.list.map((x, i) => (
                                <Grid container justify="space-between" spacing={2}>
                                  <Grid item>
                                    <ColorButton
                                      size={14}
                                      color={COLORS[i % COLORS.length]}
                                      style={{
                                        marginRight: 8,
                                        marginBottom: 4,
                                      }}
                                    />

                                    <Typography display="inline" variant="body2">
                                      {x.language_text}
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <CustomizedTypography
                                      display="inline"
                                      variant="body2"
                                      fontWeight={500}
                                    >
                                      <NumberFormat
                                        value={x.each_count}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        // suffix={"원"}
                                      />
                                    </CustomizedTypography>
                                  </Grid>
                                </Grid>
                              ))}
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} lg={6}>
                <Paper elevation={2} style={{ minHeight: "100%" }}>
                  <Box p={2}>
                    <Grid container>
                      <Typography variant="h6">게임플랫폼 별 참여인원</Typography>
                    </Grid>

                    <Box pt={5}>
                      <Grid container justify="space-around">
                        <Grid item xs={12} sm={3}>
                          <Grid container justify="center" alignItems="center" spacing={2}>
                            <Grid item xs={6} sm={12}>
                              <Grid container alignItems="center" justify="center">
                                <PeopleAltOutlinedIcon fontSize="large" />
                                <Box ml={1}>
                                  <Typography variant="body1" display="inline">
                                    총 참여인원
                                  </Typography>
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid item xs={6} sm={12}>
                              <Grid container justify="center">
                                <CustomizedTypography variant="h3" fontWeight={600} fontSize={44}>
                                  <NumberFormat
                                    value={reducer[reducerKey].each_platform.total_count}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    // suffix={"원"}
                                  />
                                </CustomizedTypography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        {/* <Box width="100%" clone>
                          <Divider />
                        </Box> */}

                        <Box width="100%" clone>
                          <CustomizedDivider
                            orientation={smUp ? "vertical" : "horizontal"}
                            flexItem={smUp}
                            my={!smUp && 3}
                          />
                        </Box>

                        <Grid item xs={12} sm={3}>
                          <Grid container justify="center" alignItems="center" spacing={2}>
                            <Grid item xs={6} sm={12}>
                              <Grid container alignItems="center" justify="center">
                                <DesktopWindowsIcon fontSize="large" />
                                <Box ml={1}>
                                  <Typography variant="body1" display="inline">
                                    {`PC & Console`}
                                  </Typography>
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid item xs={6} sm={12}>
                              <Grid container justify="center">
                                <CustomizedTypography variant="h3" fontWeight={600} fontSize={44}>
                                  <NumberFormat
                                    value={reducer[reducerKey].each_platform.pc_console_count}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    // suffix={"원"}
                                  />
                                </CustomizedTypography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Box width="100%" clone>
                          <CustomizedDivider
                            orientation={smUp ? "vertical" : "horizontal"}
                            flexItem={smUp}
                            my={!smUp && 3}
                          />
                        </Box>
                        <Grid item xs={12} sm={3}>
                          <Grid container justify="center" alignItems="center" spacing={2}>
                            <Grid item xs={6} sm={12}>
                              <Grid container alignItems="center" justify="center">
                                <PhoneIphoneIcon fontSize="large" />
                                <Box ml={1}>
                                  <Typography variant="body1" display="inline">
                                    Mobile
                                  </Typography>
                                </Box>
                              </Grid>
                            </Grid>
                            <Grid item xs={6} sm={12}>
                              <Grid container justify="center">
                                <CustomizedTypography variant="h3" fontWeight={600} fontSize={44}>
                                  <NumberFormat
                                    value={reducer[reducerKey].each_platform.mobile_count}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    // suffix={"원"}
                                  />
                                </CustomizedTypography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box pt={5}>
                      <HorizontalBarChart apiData={reducer[reducerKey].each_platform} />
                    </Box>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper elevation={2} style={{ minHeight: "100%" }}>
                  <Box p={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6" display="inline">
                        단계 별 정답/오답 인원
                      </Typography>
                      <Box ml={4} clone>
                        <ColorButton
                          size={14}
                          color="#FFD344"
                          style={{
                            marginRight: 4,
                            marginBottom: 4,
                          }}
                        />
                      </Box>
                      <Typography display="inline" variant="body2">
                        정답
                      </Typography>
                      <Box ml={2} clone>
                        <ColorButton
                          size={14}
                          color="#999999"
                          style={{
                            marginRight: 4,
                            marginBottom: 4,
                          }}
                        />
                      </Box>
                      <Typography display="inline" variant="body2">
                        오답
                      </Typography>
                      <Box ml={2} clone>
                        <ColorButton
                          size={14}
                          color="#540AA8"
                          style={{
                            marginRight: 4,
                            marginBottom: 4,
                          }}
                        />
                      </Box>
                      <Typography display="inline" variant="body2">
                        미참여(시간초과)
                      </Typography>
                    </Grid>
                    <Box pt={2}>
                      <BasicBarChart apiData={reducer[reducerKey].each_quiz_step.list} />
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </DashboardLayout>
  );
};

export default DataChart;
