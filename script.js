// <!-- even odd checker 
// even which reminder = 0
// odd which reminder = 1
// here we are using %(modular operator) -->

function checkEvenOrOddFunc (a){
 return a % 2 === 0 ? console.log("even") : console.log("odd")}
// checkEvenOrOddFunc(10)

function checkNegOrPos(a){
    return a < 0 ? console.log("negative number"):console.log("positive numnber")
}
// checkNegOrPos(13)
function checkLagest3rdNumber([...a]){
let large3rdNumber = a.sort().pop()
console.log(large3rdNumber)
return large3rdNumber
}

// checkLagest3rdNumber([2,23,19])


// switch statement 

// switch (value){
//     case condition :{
//         statement
//     }
//         case condition :{
//         statement
//     }
//     default :{

//     }
// }


// grade system 

function gradeSystem (value){
  switch (value){
    case(value < 33):{
         console.log("your are fail")
    }
    case(value > 33 && value < 40):{
         console.log("E grade")
    }
    case(value > 40 && value < 50):{
         console.log("D grade")
    }
    case(value > 50 && value < 60):{
         console.log("D grade")
    }
    case(value > 60 && value < 70):{
         console.log("C grade")
    }
    case(value > 70 && value < 80):{
         console.log("B grade")
    }
    case(value > 80 && value < 90):{
         console.log("A grade")
    }
    case(value > 90 && value < 100):{
         console.log("+A grade")
    }
    default :{
        console.log("Thanks to using this system")
    }
  }
}
