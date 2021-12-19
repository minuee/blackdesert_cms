import { atom } from "recoil";

export const isWebState = atom({
  key: "isWeb",
  default: true,
});

export const quizState = atom({
  key: "quiz",
  default: {
    no: 1,
    stage: "000",
  },
});

export const isSubscribeState = atom({
  key: "isSubscribe",
  default: false,
});

export const timerState = atom({
  key: 'timer',
  default: 0
})