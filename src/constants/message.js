const OUTPUT_MESSAGE = Object.freeze({
  START: '점심 메뉴 추천을 시작합니다.',
  RESULT: '메뉴 추천 결과입니다.',
  FINISH: '추천을 완료했습니다.',
});

const INPUT_MESSAGE = Object.freeze({
  COACH: '코치의 이름을 입력해 주세요. (, 로 구분)',
  MENU: (coach) => `${coach}(이)가 못 먹는 메뉴를 입력해 주세요.`,
});

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE };
