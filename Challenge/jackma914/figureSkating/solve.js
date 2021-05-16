// 기본 점수
const baseScore = {
  jump: 10,
  spin: 20,
  step: 15,
};

const baseAssignment = {
  jump: 3,
  spin: 3,
  step: 1,
};

const inputArray = [
  {
    name: "김연아",
    goe: {
      jump: [10, 9, 10],
      spin: [10, 10, 10],
      step: [9],
    },
    pcs: 30,
    penalty: 0,
  },
  {
    name: "피겨의 신",
    goe: {
      jump: [10000, 10000],
      spin: [10000, 10000, 10000],
      step: [10000],
    },
    pcs: 100000,
    penalty: 0,
  },
  {
    name: "아사다 마오",
    goe: {
      jump: [9, 6, 8, 9],
      spin: [9, 9, 9],
      step: [8],
    },
    pcs: 29,
    penalty: 10,
  },
];

// write your codes

//### 판정 기준
// * 점수가 가장 높은 사람이 1등이다.
// * 점수는 기술점수(TES) + 예술점수(PCS) - 감점 으로 구성된다.
// * 기술점수(TES)는 기본점수 * 수행점수(GOE)를 합산해 도출한다.

// * 필수 수행과제를 수행하지 못했을 시 실격이다.

// ### 필수 수행과제

// * 쇼트프로그램은 점프 3개, 스핀 3개, 스텝 1개의 수행과제가 반드시 포함돼야 한다.
// * 점프와 스핀을 4번 이상 수행했을 시 가장 잘한 3개를 기준으로 한다.

//1.필수 수행과제를 수행 여부
var healthObj = {
  name: "달리기",
  lastTime: "PM10:12",
  showHealth: function () {
    setTimeout(function () {
      console.log(
        this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요"
      );
    }, 500);
  },
};
