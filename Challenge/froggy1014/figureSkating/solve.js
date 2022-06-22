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

  let answer = []
  
  // 필수 수행과제 여부 확인 새로운 배열 생성

    let candidates = inputArray.filter((ppl) => {
      return ppl.goe.jump.length >= baseAssignment.jump &&
      ppl.goe.spin.length >= baseAssignment.spin &&
      ppl.goe.step.length >= baseAssignment.step
    })
    
 
    candidates.map((candidate) => {

      // 내림차순 정렬 및 splice로 필요이상 요소 제거 후 점수 변수 선어 , reduce로 합산 

      candidate.goe.jump.sort((a,b) => b-a).splice(3)
      let jmp_score = candidate.goe.jump.reduce((a,b)=> a+b)*baseScore.jump;
      console.log(jmp_score);
      candidate.goe.spin.sort((a,b) => b-a).splice(3)
      let spn_score = candidate.goe.spin.reduce((a,b) => a+b,0)*baseScore.spin;
      console.log(spn_score);
      candidate.goe.step.sort((a,b) => b-a).splice(1)
      let stp_score = candidate.goe.step * baseScore.step;
      console.log(stp_score);

      // 점수 통합 및 배열안에 score 추가 

      let score = jmp_score + spn_score + stp_score + candidate.pcs - candidate.penalty
  
      candidate['score'] = score;
    })

    // 마지막 선수들끼리 점수 내림차 순으로 바꾸고, answer 배열에 Push하여 순위대로 출력되게끔.

    candidates.sort((a,b) => b.score - a.score);
    candidates.map(candidate => {
     answer.push({"name":candidate.name, "score":candidate.score})
    })
    return answer;
}

exports.solution = solution;
