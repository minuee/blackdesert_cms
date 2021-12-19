import { CurrentAuthUiState, UserState } from "@psyrenpark/auth";
import { produce, setAutoFreeze } from "immer";

setAutoFreeze(false);

const defaultStatistics = {
  each_language: {
    list: [
      // { group: "language A", each_count: 14 },
      // { group: "language B", each_count: 9 },
    ],
  },
  each_platform: {},
  each_quiz_step: {
    list: [],
  },
};

const INITIAL_STATE = {
  isLoading: false, // 로딩 상태
  currentAuthUiState: CurrentAuthUiState.SIGN_IN, // 인증 화면 상태
  // currentAuthUiState: CurrentAuthUiState.CHANGE_PASSWORD, // 인증 화면 상태
  userState: UserState.SIGNED, // 인증 상태
  myAuth: {}, // 인증관련 정보
  myUser: {}, // 로그인후 유저 정보
  defaultStatistics: defaultStatistics,
  statistics: defaultStatistics,
};

// setAutoFreeze(false);

export default (state = INITIAL_STATE, { type, payload, routeName }) => {
  switch (type) {
    case "SET_IS_AUTO_LOGIN":
      return {
        ...state,
        isLogin: payload.isLogin,
        isExistLangFile: payload.isExistLangFile,
      };

    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: payload
          ? state.isLoading + 1
          : state.isLoading > 0
          ? state.isLoading - 1
          : state.isLoading,
      };

    case "SET_CURRENT_AUTH_UI_STATE":
      return { ...state, currentAuthUiState: payload };

    case "SET_MY_AUTH":
      return { ...state, myAuth: payload };

    case "SET_USER_STATE":
      return {
        ...state,
        currentAuthUiState: CurrentAuthUiState.SIGN_IN,
        userState: payload,
      };

    case "SIGN_IN":
      return {
        ...state,
        currentAuthUiState: CurrentAuthUiState.SIGN_IN,
        userState: UserState.SIGNED,
        myUser: payload,
      };

    case "SIGN_OUT":
      return {
        ...state,
        currentAuthUiState: CurrentAuthUiState.SIGN_IN,
        userState: UserState.NOT_SIGN,
      };

    case "SET_MY_USER":
      return {
        ...state,
        myUser: payload,
      };

    // =======================================================
    // STATISTICS
    case "GET_STATISTICS":
      return {
        ...state,
        statistics: payload.data,
      };

    default:
      return state;
  }
};
