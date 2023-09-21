function solution (inputArray1, inputArray2) {
    // filter는 배열에서 조건에 맞는 원소만을 남겨둘 때 사용
    // includes는 어떠한 원소가 배열에 포함되어 있는 지를 boolean으로 반환
    return inputArray1.filter((el) => inputArray2.includes(el));
}

exports.solution = solution;
