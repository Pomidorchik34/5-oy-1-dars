let res;
// 5-OY 1-DARS
// 1
// let fruits = ["apple", "banana", "grape", "orange", "kiwi", "pear"];
// let filteredFruits = fruits.filter((arr) => arr.length <= 5);
// let result = filteredFruits.map(
//   (arr) => arr.charAt(0).toUpperCase() + arr.slice(1)
// );
// console.log(result);

// 2
// let students = [
//   { name: "Maha", age: 19 },
//   { name: "Dimik", age: 22 },
//   { name: "Bob", age: 43 },
// ];
// let result = students.find((student) => student.age > 20);
// if (result) {
//   let res = result.name.charAt(0).toUpperCase() + result.name.slice(1);
//   console.log(res);
// } else {
//   console.log(false);
// }

// 3
// let vegetables = [
//   { name: "Peper", price: 120 },
//   { name: "Tomato", price: 80 },
//   { name: "Patato", price: 150 },
//   { name: "Cucumber", price: 90 },
// ];

// res = vegetables
//   .filter((value) => value.price > 100)
//   .reduce((acc, value) => acc + value.price, 0);
// console.log(res);

// 4
// (function (arr) {
//   let trueTrue = arr.every((number) => number > 0);
//   let BigNum = arr.some((number) => number > 100);
//   if (trueTrue) {
//     if (BigNum) {
//       console.log(true, true);
//     } else {
//       console.log(true);
//     }
//   } else {
//     console.log(false);
//   }
// })([15, 30, 200]);

// 5
// let arr = [1, 2, 3, 4, 5];
// function res(arr) {
//   let squaredArray = [];
//   arr.forEach((element) => {
//     let square = element * element;
//     squaredArray.push(square);
//   });
//   return squaredArray;
// }
// function consoleArr(arr) {
//   arr.forEach((element) => {
//     console.log(element);
//   });
// }
// consoleArr(res(arr));

// 6
// let students = [
//   { name: "nekto", salary: 1800 },
//   { name: "Pomi", salary: 2200 },
//   { name: "Zhitel", salary: 1900 },
//   { name: "Alexandr", salary: 1500 },
// ];
// function calculateTotalSalary(students) {
//   let res = students.filter((employee) => employee.salary < 2000);
//   let result = res
//     .map((employee) => employee.salary * 1.1)
//     .reduce((sum, value) => sum + value, 0);

//   return result;
// }
// console.log(calculateTotalSalary(students));
