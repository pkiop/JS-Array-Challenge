'use strict'

const userHistory = [
    { date: '2020-11-03', watched: [ 'KT', 'BBQ' ] },
    { date: '2020-11-04', watched: [ '정관장', 'KT', '딱좋은데이' ] },
    { date: '2020-11-05', watched: [ '그랑사가', '농심' ] },
    { date: '2020-11-06', watched: [ 'BBQ' ] },
    { date: '2020-11-07', watched: [ '쌍용자동차', 'BBQ', 'KT' ] },
    { date: '2020-11-08', watched: [ '켈로그코리아', '빙그레' ] },
    { date: '2020-11-09', watched: [ 'KT', '그랑사가', '빙그레' ] },
];

const advList = [ '동원F&B', '정관장', 'KT', 'BBQ', '그랑사가', '농심', '딱좋은데이', '빙그레', '쌍용자동차', '켈로그코리아' ];

// write your codes
const indexOfadvList = [0,1,2,3,4,5,6,7,8,9];
const indexOfuserHistory = [0,1,2,3,4,5,6];

const watched_adv_Array = [];
const ArrayFromSet = [];

const gatherWA = indexOfuserHistory.map((el)=> watched_adv_Array.concat(userHistory[el].watched)).join(",").split(",");
// userHistory의 watched_adv 한 배열에 모으기

const deleteOverlap = new Set(gatherWA);
for( let i of deleteOverlap){
    ArrayFromSet.push(i);
} // 모인 watched_adv를 Set을 이용해 중복값 없애고 ArrayFromSet에 push 해주기

const result = advList.filter((el2) => ArrayFromSet.indexOf(el2) === -1);
// advList의 요소 중에서 ArrayFromSet에 존재하지 않는 요소를 찾아서 리턴해주기

console.log(result);
