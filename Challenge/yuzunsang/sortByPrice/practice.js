const account = [
    {id : 'jsh', addr : '서울'},
    {id : 'root2', addr : '인천'},
    {id : 'ghd', addr : '광주'},
    {id : 'root3', addr : '경기'},
    {id : 'root5', addr : '경북'},
    {id : 'rnv', addr : '세종'},
    {id : 'ekz', addr : '전북'},
    {id : 'gae', addr : '전남'},
    {id : 'root4', addr : '전남fds'},
    {id : 'root1', addr : '전남fds'}
];

const compare = function(a, b) {

    if ((b.id.indexOf('root') === 0 && (a.id.indexOf('root') === 0))) {
        let newA = a.id.split('root');
        let newB = b.id.split('root');

        return newA[1] - newB[1];
        // if (newA[1] > newB[1]) {
        //     return 1;
        // } else if (newA[1] < newB[1]) {
        //     return -1;
        // } else {
        //     return 0;
        // }
    }
    else if ((a.id.indexOf('root') === 0)) {
        return -1;
    }
    else if ((b.id.indexOf('root') === 0)) {
        return 1;
    }
    else {
        if (a.id > b.id) {
            return 1;
        } else if (a.id < b.id) {
            return -1;
        } else {
            return 0;
        }
    }
};

console.log(account.sort(compare));