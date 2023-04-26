let userList=[
    {name: "Mike", age: 30},
    {name: "Tom", age: 10},
    {name: "Jane", age: 27},
    {name: "Sue", age: 26},
    {name: "Harry", age: 43},
    {name: "Steve", age: 60},
];
    //성인만 뽑아서 새로운 배열 생성.
    const result=userList.reduce((prev, cur)=>{
        if(cur.name.length===3){
            prev.push(cur);
        }
        return prev;
    },[]);
    console.log(result);