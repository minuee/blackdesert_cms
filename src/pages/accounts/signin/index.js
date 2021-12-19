import React, { useState, useEffect, useContext } from "react";

import { apiObject } from "api";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {
  Auth,
  CurrentAuthUiState,
  AuthType,
  UserState,
} from "@psyrenpark/auth";

// clsx
import clsx from "clsx";

// react-hook-form & @hookform
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// @material-ui/core
import {
  Grid,
  Container,
  Typography,
  Box,
  IconButton,
  Checkbox,
  MaterialUIInput,
  Button,
  FormControlLabel,
  CssBaseline,
} from "@material-ui/core";

// @material-ui/icons
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// styled-component
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import useLoadingFunction from "hooks/useLoadingFunction";

// // components/useFormComponents
import { TextFieldController } from "components/useFormComponents";
import { RatioContainer } from "components/ratio-container";

import { AccountsLayout } from "layouts";
import Logo from "images/layouts/accounts/logo_admin.jpg";

const useStyles = makeStyles((theme) => ({
  ["#555555"]: {
    color: theme.palette.grey[700],
  },
  ["#999999"]: {
    color: theme.palette.grey[500],
  },
  textEllipsis: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  formControlLabel: {
    marginTop: "-16px",
    marginRight: "32px",
    "& .MuiCheckbox-colorPrimary.Mui-checked": {
      color: "#A2B8D2",
    },
    "& .MuiFormControlLabel-label": {
      color: theme.palette.grey[700],
      paddingBottom: 2,
    },
    "& .MuiIconButton-root": {
      padding: 9,
    },
  },
}));

const SaveId = (props) => {
  const classes = useStyles();
  const { label } = props;
  return (
    <FormControlLabel
      control={<Checkbox color="primary" />}
      label={label}
      className={classes.formControlLabel}
    />
  );
};

const ChangePassword = (props) => {
  const classes = useStyles();
  const { label } = props;
  const dispatch = useDispatch();

  const changeCurrentAuthUiState = (stateToChange) => {
    dispatch({
      type: "SET_CURRENT_AUTH_UI_STATE",
      payload: stateToChange,
    });
  };
  return (
    <FormControlLabel
      control={
        // <Link to={`/accounts/?entryFlow=pwd`}>
        <IconButton
          color="primary"
          onClick={() => {
            changeCurrentAuthUiState(CurrentAuthUiState.FORGOT_PASSWORD);
          }}
        >
          <SearchIcon color="action" />
        </IconButton>
        // </Link>
      }
      label={label}
      className={classes.formControlLabel}
    />
  );
};

const Signin = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const reducer = useSelector((state) => state.reducer);
  const history = useHistory();
  const loadingFunction = useLoadingFunction();

  const [isReady, setIsReady] = useState(false);
  // const { register, handleSubmit, watch, errors } = useForm();
  const methods = useForm({
    defaultValues: {},
  });
  const {
    control,
    handleSubmit,
    watch,
    /* reset, */
    errors,
    setError,
    /* clearErrors  */
  } = methods;

  const signInFuntion = async (data) => {
    console.log("signInFuntion -> data", data);

    var userEmail = data.userEmail;
    var userPassword = data.userPassword;

    Auth.signInProcess(
      {
        authType: AuthType.EMAIL,
        email: userEmail,
        password: userPassword,
      },
      async (data) => {
        // 성공처리
        console.log("signInFuntion -> data", data);

        // 유저 정보 가져오기
        try {
          var responseGetAdminInfo = await apiObject.getAdminInfo({
            loadingFunction,
          });
          console.log({ responseGetAdminInfo });

          dispatch({
            type: "SIGN_IN",
            payload: responseGetAdminInfo,
          });
          // console.log(`reducer.userState : ${reducer.userState}`);
          // console.log(`UserState.SIGNED : ${UserState.SIGNED}`);

          history.push("/user");
        } catch (error) {
          alert(error);
        }
      },
      (data) => {
        console.log("signInFuntion -> error", data);

        dispatch({
          type: "SET_MY_AUTH",
          payload: {
            authType: AuthType.EMAIL,
            email: userEmail,
            password: userPassword,
          },
        });

        dispatch({
          type: "SET_CURRENT_AUTH_UI_STATE",
          payload: CurrentAuthUiState.CONFIRM_SIGN_UP,
        });
      },
      (error) => {
        // 실패처리,
        console.log("signInFuntion -> error", error);
        console.log(error.message);
        switch (error.code) {
          case "UserNotFoundException":
            setError("userEmail", {
              type: error.code,
              message: "*가입되지 않은 이메일입니다.",
            });
            break;

          case "NotAuthorizedException":
            setError("userPassword", {
              type: error.code,
              message: "*비밀번호가 맞지 않습니다.",
            });
            break;

          default:
            alert("로그인 오류발생. 관리자에게 문의해주세요.");
            break;
        }
      },
      loadingFunction
    );
  };

  const entries = [
    {
      key: "userEmail",
      component: (
        <TextFieldController
          name="userEmail"
          className="accountInput"
          label="E-MAIL"
          placeholder="E-MAIL을 입력해 주세요"
          icon={<PersonOutlineOutlinedIcon color="disabled" />}
          // errors={errors}
          errorMessage={{
            required: `*E-MAIL은 필수 입력 항목입니다`,
            pattern: `*E-MAIL 형식이 올바르지 않습니다.`,
          }}
          pattern={/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/}
          required
        />
      ),
      // invalidMessage: `이메일을 다시 확인해주세요.`,
    },
    {
      key: "userPassword",
      component: (
        <TextFieldController
          name="userPassword"
          className="accountInput"
          label="PASSWORD"
          // placeholder="PASSWORD"
          icon={<LockOutlinedIcon color="disabled" />}
          // errors={errors}
          errorMessage={{
            required: `*PASSWORD는 필수 입력 항목입니다`,
            pattern: `*PASSWORD 형식이 올바르지 않습니다.`,
          }}
          type="password"
          // pattern={`/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/,`}
          required
        />
      ),
      // invalidMessage: `비밀번호를 다시 확인해주세요.`,
    },
  ];

  useEffect(() => {
    // console.log(Object.keys(watch()).find((x) => Boolean(watch(x)) === false));
    Object.keys(watch()).find((x) => Boolean(watch(x)) === false)
      ? setIsReady(false)
      : setIsReady(true);
  }, [watch()]);

  return (
    <AccountsLayout>
      <CssBaseline />
      <Box pb={9}>
        <Grid container justify="center">
          <RatioContainer w={21} h={9}>
            <img
              src={Logo}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </RatioContainer>
        </Grid>
      </Box>
      <FormProvider {...methods}>
        {entries.map((x) => {
          return <Box pb={1}>{x.component}</Box>;
        })}
      </FormProvider>
      <Box pb={5}>
        <SaveId label="아이디 저장" />
        <ChangePassword label="비밀번호 찾기" />
        {/* <SignUp label="회원가입" /> */}
      </Box>
      <Button
        onClick={() => {
          handleSubmit(signInFuntion)();
        }}
        variant="contained"
        color={isReady ? "primary" : "default"}
        fullWidth
        size="large"
      >
        login
      </Button>

      <DevTool control={control} />
    </AccountsLayout>
  );
};

export default Signin;
