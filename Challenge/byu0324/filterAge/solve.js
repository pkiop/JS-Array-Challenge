// write your codes
function solution(inputArray) {
  let persons = inputArray.filter(info => 
    info.age >= 30 && info.age < 50
  );

  return persons.map(person => ({ 'name': person.name, 'age': person.age }));
}

exports.solution = solution;
