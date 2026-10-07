const students = [
  "anne",
  "dora",
  "debby",
  "carlos",
  "don",
  "peter",
  "carter",
  "maya",
];

const findStudent = (students, studentName) => {
  if (!students.includes(studentName)) return console.log("Invalid Student");
  for (let i = 0; i < students.length; i++) {
    if (students[i] === studentName)
      return console.log(`Student found: ${students[i]}  and  ${studentName}`);
  }
};

findStudent(students, "april");

students.forEach((student) => {
  const capitalStudent = student.split("")[0].toUpperCase();
  //   console.log(capitalStudent);
  // console.log(`Hi I am ${student}`);
});

// O(1) example
const numbers = [1, 2, 3, 4, 5, 6];
const getElement = (arr, index) => arr[index];

// console.log(getElement(numbers, 0));

//  O(n^2) Example

function findPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]}, ${arr[j]}`);
    }
  }

  for (let q = 0; q < arr.length; q++) {
    console.log(q);
  }
}

// findPairs(numbers);

// Arrays
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(newData) {
    this.data[this.length] = newData;
    this.length++;
    return this.length;
  }
  listData() {
    console.log(this.data);
  }
  get(i) {
    const item = this.data[i];
    console.log(item);
  }
  pop() {
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {
    let firstItem = this.data[0];
    delete this.data[0];
    this.length--;
    return firstItem;
  }
}

const NewArray = new MyArray();
NewArray.push("class");
NewArray.push("dog food");
NewArray.push("mango");
NewArray.push("catfish");
//NewArray.pop();
// console.log(NewArray.pop());
console.log(NewArray);

console.log(NewArray.length);
console.log(NewArray.shift());
console.log(NewArray);
