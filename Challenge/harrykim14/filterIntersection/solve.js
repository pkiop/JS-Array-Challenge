const A = [1, 2, 3, 4, 5];
const B = [3, 4, 5, 6, 7];
// write your codes

// 반대로 적용해도 같은 답을 구할 수 있다
const intersection = A.filter(el => new Set([...B]).has(el))

// 함수화하기
function getIntersection(A, B) {
    return A.filter(el => new Set([...B]).has(el));
}

