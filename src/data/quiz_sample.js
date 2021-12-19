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
    question: {
      ko: "(퀴즈 1) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - ko",
      en: "(퀴즈 1) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - en",
      ru: "(퀴즈 1) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - ru",
      th: "(퀴즈 1) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - th",
      tr: "(퀴즈 1) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - tr",
      pt: "(퀴즈 1) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - pt",
      zh: "(퀴즈 1) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - zh",
      ja: "(퀴즈 1) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - ja",
    },

    answers: [
      {
        no: 1,
        content: {
          ko: "정1답 - ko",
          en: "정1답 - en",
          ru: "정1답 - ru",
          th: "정1답 - th",
          tr: "정1답 - tr",
          pt: "정1답 - pt",
          zh: "정1답 - zh",
          ja: "정1답 - ja",
        },
      },
      {
        no: 2,
        content: {
          ko: "정2답 - ko",
          en: "정2답 - en",
          ru: "정2답 - ru",
          th: "정2답 - th",
          tr: "정2답 - tr",
          pt: "정2답 - pt",
          zh: "정2답 - zh",
          ja: "정2답 - ja",
        },
      },
    ],
    reward_condition: {
      ko: "정답률 50퍼센트 이상에게 지급 - ko",
      en: "정답률 50퍼센트 이상에게 지급 - en",
      ru: "정답률 50퍼센트 이상에게 지급 - ru",
      th: "정답률 50퍼센트 이상에게 지급 - th",
      tr: "정답률 50퍼센트 이상에게 지급 - tr",
      pt: "정답률 50퍼센트 이상에게 지급 - pt",
      zh: "정답률 50퍼센트 이상에게 지급 - zh",
      ja: "정답률 50퍼센트 이상에게 지급 - ja",
    },
    rewards: [
      {
        no: 1,
        img_url: "https://file.dkdic.com/item/quiz_1_1.png",
        desc: {
          ko: "Black Desert & Black desert Console : 발크스의 조언 - ko",
          en: "Black Desert & Black desert Console : 발크스의 조언 - en",
          ru: "Black Desert & Black desert Console : 발크스의 조언 - ru",
          th: "Black Desert & Black desert Console : 발크스의 조언 - th",
          tr: "Black Desert & Black desert Console : 발크스의 조언 - tr",
          pt: "Black Desert & Black desert Console : 발크스의 조언 - pt",
          zh: "Black Desert & Black desert Console : 발크스의 조언 - zh",
          ja: "Black Desert & Black desert Console : 발크스의 조언 - ja",
        },
      },
      {
        no: 2,
        img_url: "https://file.dkdic.com/item/quiz_1_2.png",
        desc: {
          ko: "Black desert Mobile : 돌파복구권 - ko",
          en: "Black desert Mobile : 돌파복구권 - en",
          ru: "Black desert Mobile : 돌파복구권 - ru",
          th: "Black desert Mobile : 돌파복구권 - th",
          tr: "Black desert Mobile : 돌파복구권 - tr",
          pt: "Black desert Mobile : 돌파복구권 - pt",
          zh: "Black desert Mobile : 돌파복구권 - zh",
          ja: "Black desert Mobile : 돌파복구권 - ja",
        },
      },
    ],
  },
  {
    no: 3,
    question: {
      ko: "(퀴즈 3) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - ko",
      en: "(퀴즈 3) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - en",
      ru: "(퀴즈 3) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - ru",
      th: "(퀴즈 3) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - th",
      tr: "(퀴즈 3) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - tr",
      pt: "(퀴즈 3) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - pt",
      zh: "(퀴즈 3) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - zh",
      ja: "(퀴즈 3) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - ja",
    },

    answers: [
      {
        no: 1,
        content: {
          ko: "정1답 - ko",
          en: "정1답 - en",
          ru: "정1답 - ru",
          th: "정1답 - th",
          tr: "정1답 - tr",
          pt: "정1답 - pt",
          zh: "정1답 - zh",
          ja: "정1답 - ja",
        },
      },
      {
        no: 2,
        content: {
          ko: "정2답 - ko",
          en: "정2답 - en",
          ru: "정2답 - ru",
          th: "정2답 - th",
          tr: "정2답 - tr",
          pt: "정2답 - pt",
          zh: "정2답 - zh",
          ja: "정2답 - ja",
        },
      },
      {
        no: 3,
        content: {
          ko: "정3답 - ko",
          en: "정3답 - en",
          ru: "정3답 - ru",
          th: "정3답 - th",
          tr: "정3답 - tr",
          pt: "정3답 - pt",
          zh: "정3답 - zh",
          ja: "정3답 - ja",
        },
      },
    ],
    reward_condition: {
      ko: "정답률 50퍼센트 이상에게 지급 - ko",
      en: "정답률 50퍼센트 이상에게 지급 - en",
      ru: "정답률 50퍼센트 이상에게 지급 - ru",
      th: "정답률 50퍼센트 이상에게 지급 - th",
      tr: "정답률 50퍼센트 이상에게 지급 - tr",
      pt: "정답률 50퍼센트 이상에게 지급 - pt",
      zh: "정답률 50퍼센트 이상에게 지급 - zh",
      ja: "정답률 50퍼센트 이상에게 지급 - ja",
    },
    rewards: [
      {
        no: 1,
        img_url: "https://file.dkdic.com/item/quiz_1_1.png",
        desc: {
          ko: "Black Desert & Black desert Console : 발크스의 조언 - ko",
          en: "Black Desert & Black desert Console : 발크스의 조언 - en",
          ru: "Black Desert & Black desert Console : 발크스의 조언 - ru",
          th: "Black Desert & Black desert Console : 발크스의 조언 - th",
          tr: "Black Desert & Black desert Console : 발크스의 조언 - tr",
          pt: "Black Desert & Black desert Console : 발크스의 조언 - pt",
          zh: "Black Desert & Black desert Console : 발크스의 조언 - zh",
          ja: "Black Desert & Black desert Console : 발크스의 조언 - ja",
        },
      },
      {
        no: 2,
        img_url: "https://file.dkdic.com/item/quiz_1_2.png",
        desc: {
          ko: "Black desert Mobile : 돌파복구권 - ko",
          en: "Black desert Mobile : 돌파복구권 - en",
          ru: "Black desert Mobile : 돌파복구권 - ru",
          th: "Black desert Mobile : 돌파복구권 - th",
          tr: "Black desert Mobile : 돌파복구권 - tr",
          pt: "Black desert Mobile : 돌파복구권 - pt",
          zh: "Black desert Mobile : 돌파복구권 - zh",
          ja: "Black desert Mobile : 돌파복구권 - ja",
        },
      },
      {
        no: 3,
        img_url: "https://file.dkdic.com/item/quiz_1_2.png",
        desc: {
          ko: "Black desert Mobile : 돌파복구권2 - ko",
          en: "Black desert Mobile : 돌파복구권2 - en",
          ru: "Black desert Mobile : 돌파복구권2 - ru",
          th: "Black desert Mobile : 돌파복구권2 - th",
          tr: "Black desert Mobile : 돌파복구권2 - tr",
          pt: "Black desert Mobile : 돌파복구권2 - pt",
          zh: "Black desert Mobile : 돌파복구권2 - zh",
          ja: "Black desert Mobile : 돌파복구권2 - ja",
        },
      },
    ],
  },
  {
    no: 4,
    question: {
      ko: "(퀴즈 4) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - ko",
      en: "(퀴즈 4) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - en",
      ru: "(퀴즈 4) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - ru",
      th: "(퀴즈 4) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - th",
      tr: "(퀴즈 4) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - tr",
      pt: "(퀴즈 4) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - pt",
      zh: "(퀴즈 4) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - zh",
      ja: "(퀴즈 4) 제르베즈와 제노베바는 남매 관계이다. \n질문이 길어지는 경우의 수 - ja",
    },

    answers: [
      {
        no: 1,
        content: {
          ko: "정1답 - ko",
          en: "정1답 - en",
          ru: "정1답 - ru",
          th: "정1답 - th",
          tr: "정1답 - tr",
          pt: "정1답 - pt",
          zh: "정1답 - zh",
          ja: "정1답 - ja",
        },
      },
      {
        no: 2,
        content: {
          ko: "정2답 - ko",
          en: "정2답 - en",
          ru: "정2답 - ru",
          th: "정2답 - th",
          tr: "정2답 - tr",
          pt: "정2답 - pt",
          zh: "정2답 - zh",
          ja: "정2답 - ja",
        },
      },
      {
        no: 3,
        content: {
          ko: "정3답 - ko",
          en: "정3답 - en",
          ru: "정3답 - ru",
          th: "정3답 - th",
          tr: "정3답 - tr",
          pt: "정3답 - pt",
          zh: "정3답 - zh",
          ja: "정3답 - ja",
        },
      },
      {
        no: 4,
        content: {
          ko: "정4답 - ko",
          en: "정4답 - en",
          ru: "정4답 - ru",
          th: "정4답 - th",
          tr: "정4답 - tr",
          pt: "정4답 - pt",
          zh: "정4답 - zh",
          ja: "정4답 - ja",
        },
      },
    ],
    reward_condition: {
      ko: "정답률 50퍼센트 이상에게 지급 - ko",
      en: "정답률 50퍼센트 이상에게 지급 - en",
      ru: "정답률 50퍼센트 이상에게 지급 - ru",
      th: "정답률 50퍼센트 이상에게 지급 - th",
      tr: "정답률 50퍼센트 이상에게 지급 - tr",
      pt: "정답률 50퍼센트 이상에게 지급 - pt",
      zh: "정답률 50퍼센트 이상에게 지급 - zh",
      ja: "정답률 50퍼센트 이상에게 지급 - ja",
    },
    rewards: [
      {
        no: 1,
        img_url: "https://file.dkdic.com/item/quiz_1_1.png",
        desc: {
          ko: "Black Desert & Black desert Console : 발크스의 조언 - ko",
          en: "Black Desert & Black desert Console : 발크스의 조언 - en",
          ru: "Black Desert & Black desert Console : 발크스의 조언 - ru",
          th: "Black Desert & Black desert Console : 발크스의 조언 - th",
          tr: "Black Desert & Black desert Console : 발크스의 조언 - tr",
          pt: "Black Desert & Black desert Console : 발크스의 조언 - pt",
          zh: "Black Desert & Black desert Console : 발크스의 조언 - zh",
          ja: "Black Desert & Black desert Console : 발크스의 조언 - ja",
        },
      },
    ],
  },
];

export const lang_info_dic = {
  ko: {
    // main
    L00001: "Language",
    L00002: "당신이 즐기고 있는 플랫폼은?",
    L00003: "검은사막 \nPC & Console",
    L00004: "검은사막 \nMobile",
    L00005: "입장하기",
    // 닉네임
    L00016: "Nick Name",
    L00017: "닉네임을 입력해주세요.",
    L00018: "입력완료",
    L00019: "곧 퀴즈가 시작됩니다. 잠시만 대기해 주세요.",
    L00030: "문제 보상",
    L00031: "보상지급기준",
    L00032: "정답을 확인중입니다.",
    L00033: "정답",
    L00034: "입니다. ",
    L00035: "정답 : (__value__)",
    L00036: "오답",
    L00037: "입니다. ",
    L00038: "정답 : (__value__)",
    L00048: "퀴즈 결과",
    L00049: "__value__님",
    L00050: "__value__개 문제 중,",
    L00051: "__value__문제",
    L00151: "정답",
    L00052: "__value__문제",
    L00152: "오답",
    L00103: "흐흐흐 수고했어! 모험가여\n그럼, 계속해서 방송을 시청하라고!",
    L00104: "퀴즈가 \n종료 되었습니다.",
    L00105: "계속해서 방송을 시청해 주세요.",
  },
  en: {
    L00001: "Language - en",
    L00002: "당신이 즐기고 있는 플랫폼은? - en",
    L00003: "검은사막 \nPC & Console - en",
    L00004: "검은사막 \nMobile - en",
    L00005: "입장하기 - en",
    L00016: "Nick Name - en",
    L00017: "닉네임을 입력해주세요. - en",
    L00018: "입력완료 - en",
    L00019: "곧 퀴즈가 시작됩니다. 잠시만 대기해 주세요. - en",
    L00030: "문제 보상 - en",
    L00031: "보상지급기준 - en",
    L00032: "정답을 확인중입니다. - en",
    L00033: "정답 - en",
    L00034: "입니다.  - en",
    L00035: "정답 : (__value__) - en",
    L00036: "오답 - en",
    L00037: "입니다.  - en",
    L00038: "정답 : (__value__) - en",
    L00048: "퀴즈 결과 - en",
    L00049: "__value__님 - en",
    L00050: "__value__개 문제 중, - en",
    L00051: "__value__문제 - en",
    L00151: "정답 - en",
    L00052: "__value__문제 - en",
    L00152: "오답 - en",
    L00103: "흐흐흐 수고했어! 모험가여\n그럼, 계속해서 방송을 시청하라고! - en",
    L00104: "퀴즈가 \n종료 되었습니다. - en",
    L00105: "계속해서 방송을 시청해 주세요. - en",
  },
  ru: {
    L00001: "Language - ru",
    L00002: "당신이 즐기고 있는 플랫폼은? - ru",
    L00003: "검은사막 \nPC & Console - ru",
    L00004: "검은사막 \nMobile - ru",
    L00005: "입장하기 - ru",
    L00016: "Nick Name - ru",
    L00017: "닉네임을 입력해주세요. - ru",
    L00018: "입력완료 - ru",
    L00019: "곧 퀴즈가 시작됩니다. 잠시만 대기해 주세요. - ru",
    L00030: "문제 보상 - ru",
    L00031: "보상지급기준 - ru",
    L00032: "정답을 확인중입니다. - ru",
    L00033: "정답 - ru",
    L00034: "입니다.  - ru",
    L00035: "정답 : (__value__) - ru",
    L00036: "오답 - ru",
    L00037: "입니다.  - ru",
    L00038: "정답 : (__value__) - ru",
    L00048: "퀴즈 결과 - ru",
    L00049: "__value__님 - ru",
    L00050: "__value__개 문제 중, - ru",
    L00051: "__value__문제 - ru",
    L00151: "정답 - ru",
    L00052: "__value__문제 - ru",
    L00152: "오답 - ru",
    L00103: "흐흐흐 수고했어! 모험가여\n그럼, 계속해서 방송을 시청하라고! - ru",
    L00104: "퀴즈가 \n종료 되었습니다. - ru",
    L00105: "계속해서 방송을 시청해 주세요. - ru",
  },
  th: {
    L00001: "Language - th",
    L00002: "당신이 즐기고 있는 플랫폼은? - th",
    L00003: "검은사막 \nPC & Console - th",
    L00004: "검은사막 \nMobile - th",
    L00005: "입장하기 - th",
    L00016: "Nick Name - th",
    L00017: "닉네임을 입력해주세요. - th",
    L00018: "입력완료 - th",
    L00019: "곧 퀴즈가 시작됩니다. 잠시만 대기해 주세요. - th",
    L00030: "문제 보상 - th",
    L00031: "보상지급기준 - th",
    L00032: "정답을 확인중입니다. - th",
    L00033: "정답 - th",
    L00034: "입니다.  - th",
    L00035: "정답 : (__value__) - th",
    L00036: "오답 - th",
    L00037: "입니다.  - th",
    L00038: "정답 : (__value__) - th",
    L00048: "퀴즈 결과 - th",
    L00049: "__value__님 - th",
    L00050: "__value__개 문제 중, - th",
    L00051: "__value__문제 - th",
    L00151: "정답 - th",
    L00052: "__value__문제 - th",
    L00152: "오답 - th",
    L00103: "흐흐흐 수고했어! 모험가여\n그럼, 계속해서 방송을 시청하라고! - th",
    L00104: "퀴즈가 \n종료 되었습니다. - th",
    L00105: "계속해서 방송을 시청해 주세요. - th",
  },
  tr: {
    L00001: "Language - tr",
    L00002: "당신이 즐기고 있는 플랫폼은? - tr",
    L00003: "검은사막 \nPC & Console - tr",
    L00004: "검은사막 \nMobile - tr",
    L00005: "입장하기 - tr",
    L00016: "Nick Name - tr",
    L00017: "닉네임을 입력해주세요. - tr",
    L00018: "입력완료 - tr",
    L00019: "곧 퀴즈가 시작됩니다. 잠시만 대기해 주세요. - tr",
    L00030: "문제 보상 - tr",
    L00031: "보상지급기준 - tr",
    L00032: "정답을 확인중입니다. - tr",
    L00033: "정답 - tr",
    L00034: "입니다.  - tr",
    L00035: "정답 : (__value__) - tr",
    L00036: "오답 - tr",
    L00037: "입니다.  - tr",
    L00038: "정답 : (__value__) - tr",
    L00048: "퀴즈 결과 - tr",
    L00049: "__value__님 - tr",
    L00050: "__value__개 문제 중, - tr",
    L00051: "__value__문제 - tr",
    L00151: "정답 - tr",
    L00052: "__value__문제 - tr",
    L00152: "오답 - tr",
    L00103: "흐흐흐 수고했어! 모험가여\n그럼, 계속해서 방송을 시청하라고! - tr",
    L00104: "퀴즈가 \n종료 되었습니다. - tr",
    L00105: "계속해서 방송을 시청해 주세요. - tr",
  },
  pt: {
    L00001: "Language - pt",
    L00002: "당신이 즐기고 있는 플랫폼은? - pt",
    L00003: "검은사막 \nPC & Console - pt",
    L00004: "검은사막 \nMobile - pt",
    L00005: "입장하기 - pt",
    L00016: "Nick Name - pt",
    L00017: "닉네임을 입력해주세요. - pt",
    L00018: "입력완료 - pt",
    L00019: "곧 퀴즈가 시작됩니다. 잠시만 대기해 주세요. - pt",
    L00030: "문제 보상 - pt",
    L00031: "보상지급기준 - pt",
    L00032: "정답을 확인중입니다. - pt",
    L00033: "정답 - pt",
    L00034: "입니다.  - pt",
    L00035: "정답 : (__value__) - pt",
    L00036: "오답 - pt",
    L00037: "입니다.  - pt",
    L00038: "정답 : (__value__) - pt",
    L00048: "퀴즈 결과 - pt",
    L00049: "__value__님 - pt",
    L00050: "__value__개 문제 중, - pt",
    L00051: "__value__문제 - pt",
    L00151: "정답 - pt",
    L00052: "__value__문제 - pt",
    L00152: "오답 - pt",
    L00103: "흐흐흐 수고했어! 모험가여\n그럼, 계속해서 방송을 시청하라고! - pt",
    L00104: "퀴즈가 \n종료 되었습니다. - pt",
    L00105: "계속해서 방송을 시청해 주세요. - pt",
  },
  zh: {
    L00001: "Language - zh",
    L00002: "당신이 즐기고 있는 플랫폼은? - zh",
    L00003: "검은사막 \nPC & Console - zh",
    L00004: "검은사막 \nMobile - zh",
    L00005: "입장하기 - zh",
    L00016: "Nick Name - zh",
    L00017: "닉네임을 입력해주세요. - zh",
    L00018: "입력완료 - zh",
    L00019: "곧 퀴즈가 시작됩니다. 잠시만 대기해 주세요. - zh",
    L00030: "문제 보상 - zh",
    L00031: "보상지급기준 - zh",
    L00032: "정답을 확인중입니다. - zh",
    L00033: "정답 - zh",
    L00034: "입니다.  - zh",
    L00035: "정답 : (__value__) - zh",
    L00036: "오답 - zh",
    L00037: "입니다.  - zh",
    L00038: "정답 : (__value__) - zh",
    L00048: "퀴즈 결과 - zh",
    L00049: "__value__님 - zh",
    L00050: "__value__개 문제 중, - zh",
    L00051: "__value__문제 - zh",
    L00151: "정답 - zh",
    L00052: "__value__문제 - zh",
    L00152: "오답 - zh",
    L00103: "흐흐흐 수고했어! 모험가여\n그럼, 계속해서 방송을 시청하라고! - zh",
    L00104: "퀴즈가 \n종료 되었습니다. - zh",
    L00105: "계속해서 방송을 시청해 주세요. - zh",
  },
  ja: {
    L00001: "Language - ja",
    L00002: "당신이 즐기고 있는 플랫폼은? - ja",
    L00003: "검은사막 \nPC & Console - ja",
    L00004: "검은사막 \nMobile - ja",
    L00005: "입장하기 - ja",
    L00016: "Nick Name - ja",
    L00017: "닉네임을 입력해주세요. - ja",
    L00018: "입력완료 - ja",
    L00019: "곧 퀴즈가 시작됩니다. 잠시만 대기해 주세요. - ja",
    L00030: "문제 보상 - ja",
    L00031: "보상지급기준 - ja",
    L00032: "정답을 확인중입니다. - ja",
    L00033: "정답 - ja",
    L00034: "입니다.  - ja",
    L00035: "정답 : (__value__) - ja",
    L00036: "오답 - ja",
    L00037: "입니다.  - ja",
    L00038: "정답 : (__value__) - ja",
    L00048: "퀴즈 결과 - ja",
    L00049: "__value__님 - ja",
    L00050: "__value__개 문제 중, - ja",
    L00051: "__value__문제 - ja",
    L00151: "정답 - ja",
    L00052: "__value__문제 - ja",
    L00152: "오답 - ja",
    L00103: "흐흐흐 수고했어! 모험가여\n그럼, 계속해서 방송을 시청하라고! - ja",
    L00104: "퀴즈가 \n종료 되었습니다. - ja",
    L00105: "계속해서 방송을 시청해 주세요. - ja",
  },
};

export const streaming_dic = {
  ko: {
    pc: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
    mobile: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
  },
  en: {
    pc: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
    mobile: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
  },
  ru: {
    pc: "https://www.youtube.com/watch?v=dwsm5F3DC4c",
    mobile: "https://www.youtube.com/watch?v=dwsm5F3DC4c",
  },
  th: {
    pc: "https://www.youtube.com/watch?v=bEdF0cycBAk",
    mobile: "https://www.youtube.com/watch?v=bEdF0cycBAk",
  },
  tr: {
    pc: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
    mobile: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
  },
  pt: {
    pc: "https://www.twitch.tv/videos/1040210792",
    mobile: "https://www.twitch.tv/videos/1040210792",
  },
  zh: {
    pc: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
    mobile: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
  },
  ja: {
    pc: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
    mobile: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
  },
};

export const link_dic = {
  ko: {
    pc: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
    mobile: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
  },
  en: {
    pc: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
    mobile: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
  },
  ru: {
    pc: "https://www.youtube.com/watch?v=dwsm5F3DC4c",
    mobile: "https://www.youtube.com/watch?v=dwsm5F3DC4c",
  },
  th: {
    pc: "https://www.youtube.com/watch?v=bEdF0cycBAk",
    mobile: "https://www.youtube.com/watch?v=bEdF0cycBAk",
  },
  tr: {
    pc: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
    mobile: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
  },
  pt: {
    pc: "https://www.twitch.tv/videos/1040210792",
    mobile: "https://www.twitch.tv/videos/1040210792",
  },
  zh: {
    pc: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
    mobile: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
  },
  ja: {
    pc: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
    mobile: "https://www.youtube.com/watch?v=0s3hiXgWrBQ",
  },
};

export const redirect_dic = {
  ko: {
    pc: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
    mobile: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
  },
  en: {
    pc: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
    mobile: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
  },

  ru: {
    pc: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
    mobile: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
  },
  th: {
    pc: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
    mobile: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
  },
  tr: {
    pc: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
    mobile: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
  },
  pt: {
    pc: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
    mobile: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
  },
  zh: {
    pc: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
    mobile: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
  },
  ja: {
    pc: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
    mobile: [
      {
        type: "youtube",
        url: "https://www.twitch.tv/videos/1040210792",
      },
      {
        type: "facebook",
        url: "https://fb.watch/5_Sff1zdLb/",
      },
      {
        type: "twitch",
        url: "https://www.twitch.tv/videos/1040210792",
      },
    ],
  },
};
