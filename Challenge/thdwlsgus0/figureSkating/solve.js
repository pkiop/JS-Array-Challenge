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

function solution(inputArray) {

  const baseComp = (array) => {
    if(array.goe.jump.length >= baseAssignment.jump && 
      array.goe.spin.length >= baseAssignment.spin &&
      array.goe.step.length >= baseAssignment.step) 
      return array;
  }

  const sumScore = (array) => {
    const sum = array.reduce((acc, cur)=>{
      return acc+cur;
    },0);

    return sum;
  }

  const getScore = (player, n) => {
   
    const jumpScore = baseScore.jump * sumScore(sortScore(player.goe.jump, n));
    const spinScore = baseScore.spin * sumScore(sortScore(player.goe.spin, n));
    const stepScore = baseScore.step * sumScore(sortScore(player.goe.step, n));

    const totalScore = jumpScore + spinScore + stepScore + player.pcs - player.penalty;

    return totalScore;
  }

  const sortScore = (actionArray, n) => {
    if(actionArray.length>=n){
      return actionArray.sort((a,b)=>b-a)
                 .slice(0, 3);
    }
    else return actionArray.sort((a,b)=> a-b);
  }

  const getObject = (currentPlayer) => {
    const obj = {};
    obj['name'] = currentPlayer.name;
    obj['score'] = getScore(currentPlayer, 4);
    return obj;
  }

  const answer = inputArray.filter(item=>baseComp(item))
                           .reduce((player, currentPlayer)=>{
                             player.push(getObject(currentPlayer));
                             return player;
                           },[]);
 
  return answer;
}

console.log(solution(inputArray));
exports.solution = solution;
