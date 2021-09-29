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

// write your codes
function solution(inputArray) {
  // 실격자 배제한 새로운 배열 생성
  let goToNext = inputArray.filter((student) => {
    return student.goe.jump.length >= "3"
    && student.goe.spin.length >= "3"
    && student.goe.step.length >= "1"
  });

  // jump, spin 점수가 3개 이상이면 내림차순 정렬 후 3개로 잘라서 합을 구함
  goToNext.map((student)=>{
    let jumpScore = student.goe.jump;
    let spinScore = student.goe.spin;
    if(jumpScore.length>3){
      // 내림차순 정렬 후 index 3부터 뒷요소 모두 제거
      jumpScore.sort((a,b) => b-a).splice(3);
    }
    if(spinScore.length>3){
      spinScore.sort((a,b)=>b-a).splice(3);
    }
    student.goe.jump = jumpScore.reduce((a,b)=>a+b);
    student.goe.spin = spinScore.reduce((a,b)=>a+b);
  });
  // 총 score 계산
  goToNext.forEach((student)=>{
    let score = student.goe.jump * baseScore.jump +
    student.goe.spin * baseScore.spin +
    student.goe.step * baseScore.step +
    student.pcs - student.penalty;
    student["score"] = score;
  });
  // score 기준으로 내림차순 정렬
  goToNext.sort((a,b)=>b.score-a.score);
  // answer 구함
  let answer = goToNext.map((student)=>({"name":student.name, "score":student.score}));
  return answer;
}

exports.solution = solution;
