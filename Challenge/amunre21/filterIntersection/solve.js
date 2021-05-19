const A4 = [1, 3, 5, 7, 12, 21, 16, 24, 17, 93, 26];
const B4 = [3, 7, 133, 134, 25, 17, 21, 22];
// write your codes

exports.answer = function(A,B){
  return A.filter(el => B.includes(el));
};