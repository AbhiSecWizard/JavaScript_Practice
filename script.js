// // <!-- even odd checker 
// // even which reminder = 0
// // odd which reminder = 1
// // here we are using %(modular operator) -->

// function checkEvenOrOddFunc (a){
//  return a % 2 === 0 ? console.log("even") : console.log("odd")}
// // checkEvenOrOddFunc(10)

// function checkNegOrPos(a){
//     return a < 0 ? console.log("negative number"):console.log("positive numnber")
// }
// // checkNegOrPos(13)
// function checkLagest3rdNumber([...a]){
// let large3rdNumber = a.sort().pop()
// console.log(large3rdNumber)
// return large3rdNumber
// }

// // checkLagest3rdNumber([2,23,19])


// // switch statement 

// // switch (value){
// //     case condition :{
// //         statement
// //     }
// //         case condition :{
// //         statement
// //     }
// //     default :{

// //     }
// // }


// // grade system 

// function gradeSystem (value){
//   switch (true){
//     case(value < 33):{
//          console.log("your are fail")
//     }
//     break
//     case(value > 33 && value < 40):{
//          console.log("E grade")
//     }
//     break
//     case(value >= 40 && value < 50):{
//          console.log("D grade")
//     }
//     break
//     case(value >= 50 && value < 60):{
//          console.log("D grade")
//     }
//     break
//     case(value >= 60 && value < 70):{
//          console.log("C grade")
//     }
//     break
//     case(value >= 70 && value < 80):{
//          console.log("B grade")
//     }
//     break
//     case(value >= 80 && value < 90):{
//          console.log("A grade")
//     }
//     break
//     case(value >= 90 && value < 100):{
//          console.log("+A grade")
//     }
//     break
//     default :{
//         console.log("Thanks to using this system")
//     }
//   }
// }

// // gradeSystem(51)

// // BMI  Body Mass Index 

// function BMIcalc(weight,height) {
// const BMI= weight / (height *height)
// console.log(BMI)
// return BMI
// }

// // BMIcalc(54,1.5)

// // let employee = {
// //     eid: "E102",
// //     ename: "Jack",
// //     eaddress: "New York",
// //     salary: 50000
// // };
// // // console.log("Employee=> ", employee);

// // let newEmployee = {...employee}

// // // console.log(newEmployee)


// // // <------- after modification------------>
// // // newEmployee.ename = "Beck";
// // console.log(newEmployee)
// // console.log(employee)
// // console.log(newEmployee == employee)


// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }
// // console.log("=========Deep Copy========");
// let newEmployee = JSON.parse(JSON.stringify(employee));
// // console.log("Employee=> ", employee);
// // console.log("New Employee=> ", newEmployee);
// // console.log("---------After modification---------");
// newEmployee.ename = "Beck";
// newEmployee.salary = 70000;
// // console.log("Employee=> ", employee);
// // console.log("New Employee=> ", newEmployee);

// // function outer (){
// //      let count = 0
// //      console.log("outer function count",count)
// //      function inner (){
// //           count ++
// //           console.log("inner function count",count)
// //      }
// //      return inner
// // }
// // let a = outer()
// // a()
// // a()


// // const newPromises = new Promise((resolve,rejected)=>{
// //      try {
// //           console.log("loading...")
// //           setTimeout(()=>{
// //              ("me aaya 2 seconds")
// //           },2000)
// //      } catch (error) {
// //            console.log(error)
// //      }
// // })
// // newPromises.then((data)=>{
// //      console.log(data)
// // })


// // console.log("Start"); // first 

// // setTimeout(() => {
// //     console.log("Timeout"); //4th
// // }, 0);

// // Promise.resolve().then(() => {
// //     console.log("Promise"); // 3rd
// // });

// // console.log("End"); // second



// let a = 20
// let b = 10 
// [a,b]  = [b,a]

// let a = 10;
// let b = 20;

// // Remove 'let' here to mutate the existing variables
// [a, b] = [b, a]; 

// console.log(a, b);

// posta++ and pre++a increment 


// 
// const p = Number(prompt("Type Your Principal Amount"))
// const t = Number(prompt("Number of years paying of the interest"))
// const r = Number(prompt("Rate(%) of compound Interest"))

// const calCofCI = Math.ceil((p*Math.pow((1+(r/100)),t))-p)
// console.log(calCofCI)