# JS-Array-Challenge

## 자바스크립트 배열을 마스터 해보자!

### 문제 풀기

- (처음 clone받으면) npm install 을 한다.

1. Problems에서 풀고 싶은 문제를 Challenge 폴더 본인 깃헙 아이디 폴더를 만들어 복붙한다.
2. 문제의 README.md로 문제를 파악한다.
3. solve.js에서 문제를 해결하는 함수를 작성한다.
4. npm run test 실행 후 패스하면 성공!

### 문제 만들기

1. Problems폴더에 문제 제목으로 폴더를 만든다
2. README.md 파일에 문제 설명을 적는다

```md
ex)

## 설명

every를 이용해서 모든 원소가 짝수인지 아닌지를 판별하세요
```

3. solve.js를 아래와 같이 작성한다.

```js
function solution(inputArray) {}

exports.solution = solution;
```

4. solve.test.js 에 테스트 케이스를 추가한다.

```js
const { solution } = require('./solve');

const test1 = {
  input: [2, 4, 6, 8, 10],
  answer: true,
};

const test2 = {
  input: [2, 3, 6, 8, 10],
  answer: false,
};

describe('everyArray', () => {
  test('모두 짝수면 true여야 한다.', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });

  test('홀수가 있으면 false여야 한다.', () => {
    expect(solution(test2.input)).toEqual(test2.answer);
  });
});
V;
```
