/**
 *@file quiz_sample_kr.js
 *@date 20210526
 *@make 박경복
 *@brief 검은사막 이벤트 퀴즈 샘플
 *@details 
 // 각나라별 번역 필요

 // 변환시  
 /n        => 개행 
 __value__ => 차후 값 변경을 위해 특정 단어로 설정
 */

//------------------------------------------
// 공통
export const lang_code_list = ["ko", "en", "ru", "th", "tr", "pt", "zh", "ja"];

//------------------------------------------
// 퀴즈 정보
export const quiz_info = [
  {
    no: 1,
    question:
      "(퀴즈 1) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수",
    answers: [
      {
        no: 1,
        content: "정1답",
      },
      {
        no: 2,
        content: "정2답",
      },
      {
        no: 3,
        content: "정3답",
      },
      {
        no: 4,
        content: "정4답",
      },
    ],
    reward_condition: "정답률 50퍼센트 이상에게 지급",
    rewards: [
      {
        no: 1,
        img_url: "https://file.dkdic.com/item/quiz_1_1.png",
        desc: "Black Desert & Black desert Console : 발크스의 조언",
      },
      {
        no: 2,
        img_url: "https://file.dkdic.com/item/quiz_1_2.png",
        desc: "Black desert Mobile : 돌파복구권",
      },
    ],
  },
  {
    no: 2,
    question:
      "(퀴즈2) 제르베즈와 제노베바는 남매 관계이다.\n질문이 길어지는 경우의 수",
    answers: [
      {
        no: 1,
        content: "정1답",
      },
      {
        no: 2,
        content: "정2답",
      },
      {
        no: 3,
        content: "정3답",
      },
      {
        no: 4,
        content: "정4답",
      },
    ],
    reward_condition: "정답률 50퍼센트 이상에게 지급",
    rewards: [
      {
        no: 1,
        img_url: "https://file.dkdic.com/item/quiz_2_1.png",
        desc: "Black Desert & Black desert Console : 발크스의 조언",
      },
      {
        no: 2,
        img_url: "https://file.dkdic.com/item/quiz_2_1.png",
        desc: "Black desert Mobile : 돌파복구권",
      },
    ],
  },
  {
    no: 3,
    question:
      "(퀴즈3) 제르베즈와 제노베바는 남매 관계이다.\n질문이 길어지는 경우의 수",
    answers: [
      {
        no: 1,
        content: "정1답",
      },
      {
        no: 2,
        content: "정2답",
      },
      {
        no: 3,
        content: "정3답",
      },
    ],
    reward_condition: "정답률 50퍼센트 이상에게 지급",
    rewards: [
      {
        no: 1,
        img_url: "https://file.dkdic.com/item/quiz_2_1.png",
        desc: "Black Desert & Black desert Console : 발크스의 조언",
      },
    ],
  },
  {
    no: 4,
    question:
      "(퀴즈4) 제르베즈와 제노베바는 남매 관계이다.\n질문이 길어지는 경우의 수",
    answers: [
      {
        no: 1,
        content: "정1답",
      },
      {
        no: 2,
        content: "정2답",
      },
    ],
    reward_condition: "정답률 50퍼센트 이상에게 지급",
    rewards: [
      {
        no: 1,
        img_url: "https://file.dkdic.com/item/quiz_2_1.png",
        desc: "Black Desert & Black desert Console : 발크스의 조언",
      },
      {
        no: 2,
        img_url: "https://file.dkdic.com/item/quiz_2_1.png",
        desc: "Black desert Mobile : 돌파복구권",
      },
      {
        no: 3,
        img_url: "https://file.dkdic.com/item/quiz_2_1.png",
        desc: "Black desert Mobile : 돌파복구권",
      },
    ],
  },
  {
    no: 5,
    question:
      "(퀴즈5) 제르베즈와 제노베바는 남매 관계이다.\n질문이 길어지는 경우의 수",
    answers: [
      {
        no: 1,
        content: "정1답",
      },
      {
        no: 2,
        content: "정2답",
      },
      {
        no: 3,
        content: "정3답",
      },
      {
        no: 4,
        content: "정4답",
      },
    ],
    reward_condition: "정답률 50퍼센트 이상에게 지급",
    rewards: [
      {
        no: 1,
        img_url: "https://file.dkdic.com/item/quiz_2_1.png",
        desc: "Black Desert & Black desert Console : 발크스의 조언",
      },
      {
        no: 2,
        img_url: "https://file.dkdic.com/item/quiz_2_2.png",
        desc: "Black desert Mobile : 돌파복구권",
      },
      {
        no: 3,
        img_url: "https://file.dkdic.com/item/quiz_2_1.png",
        desc: "Black desert Mobile : 돌파복구권",
      },
      {
        no: 4,
        img_url: "https://file.dkdic.com/item/quiz_2_2.png",
        desc: "Black desert Mobile : 돌파복구권",
      },
    ],
  },
];

export const lang_info = {
  // main
  L00001: "Language",
  L00002: "당신이 즐기고 있는 플랫폼은?",
  L00003: "검은사막 /nPC & Console",
  L00004: "검은사막 /nMobile",
  L00005: "입장하기",
  // 닉네임
  L00007: "닉네임을 입력해주세요.",
  L00008: "입력완료",
  L00009: "곧 퀴즈가 시작됩니다. 잠시만 대기해 주세요.",
  // 문제화면
  L00010: "문제 보상",
  L00011: "보상지급기준",
  L00012: "정답을 확인중입니다.",
  L00013: "정답입니다. (__value__)",
  L00014: "오답입니다. (__value__)",
  // 결과화면
  L00020: "__value__개 문제 중",
  L00021: "__value__문제 정답",
  L00022: "__value__문제 오답",
  L00030: "참여해줘서 고마워, 멋진 모험가야 흐흐\n계속해서 방송 볼 거지?",
};

export const lang_info_dic = {
  ko: {
    // main
    L00001: "Language",
    L00002: "당신이 즐기고 있는 플랫폼은?",
    L00003: "검은사막 /nPC & Console",
    L00004: "검은사막 /nMobile",
    L00005: "입장하기",
    // 닉네임
    L00017: "닉네임을 입력해주세요.",
    L00018: "입력완료",
    L00019: "곧 퀴즈가 시작됩니다. 잠시만 대기해 주세요.",
    // 문제화면
    L00030: "문제 보상",
    L00031: "보상지급기준",
    L00032: "정답을 확인중입니다.",
    L00033: "정답입니다. 정답 : (__value__)",
    L00034: "오답입니다. 정답 : (__value__)",
    // 결과화면
    L00049: "__value__님",
    L00050: "__value__개 문제 중,",
    L00051: "__value__문제 정답",
    L00052: "__value__문제 오답",
    L00103: "흐흐흐 수고했어! 모험가여\n그럼, 계속해서 방송을 시청하라고!",
    L00104: "퀴즈가 종료 되었습니다.",
    L00105: "계속해서 방송을 시청해 주세요.",
  },
  en: {
    // main
    L00001: "Language",
    L00002: "당신이 즐기고 있는 플랫폼은?",
    L00003: "검은사막 /nPC & Console",
    L00004: "검은사막 /nMobile",
    L00005: "입장하기",
    // 닉네임
    L00017: "닉네임을 입력해주세요.",
    L00018: "입력완료",
    L00019: "곧 퀴즈가 시작됩니다. 잠시만 대기해 주세요.",
    // 문제화면
    L00030: "문제 보상",
    L00031: "보상지급기준",
    L00032: "정답을 확인중입니다.",
    L00033: "정답입니다. 정답 : (__value__)",
    L00034: "오답입니다. 정답 : (__value__)",
    // 결과화면
    L00049: "__value__님",
    L00050: "__value__개 문제 중,",
    L00051: "__value__문제 정답",
    L00052: "__value__문제 오답",
    L00103: "흐흐흐 수고했어! 모험가여\n그럼, 계속해서 방송을 시청하라고!",
    L00104: "퀴즈가 종료 되었습니다.",
    L00105: "계속해서 방송을 시청해 주세요.",
  },
};
