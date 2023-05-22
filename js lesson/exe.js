// for (let i = 1; i <= 20; i++) {
//     console.log(i);
//   }


// for (let i = 3; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 4; i <= 22; i += 2) {
//     console.log(i);
//   }
// for (let i = 7; i <= 62; i++) {
//     if (i % 7 === 0) {
//       console.log(i);
//     }
//   }
// for (let i = 50; i > 0; i -= 5) {
//     console.log(i);
//   }
  

// function firstPlusLength(arr) {
//     console.log(arr[0] + arr.length);
//   }
//   firstPlusLength([1,2,5]); // should log 4
//   firstPlusLength([3,0,2,5]); // should log 7
//   firstPlusLength([-5,0,2,5]); // should log -1
//   firstPlusLength([1]); // should log 2
    

// function printPositiveIndex(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//         console.log(i);
//       }
//     }
//   }

//   printPositiveIndex([1, 3, -10]); // should log 0 1
// printPositiveIndex([10, 5, -5, 15]); // should log 0 1 3
// printPositiveIndex([10, 5, 5, 15]); // should log 0 1 2 3

// function calculateGrade() {
//     let score = parseInt(document.getElementById("score").value);
//     let grade;
  
//     if (score >= 90) {
//       grade = "A";
//     } else if (score >= 80) {
//       grade = "B";
//     } else if (score >= 70) {
//       grade = "C";
//     } else if (score >= 60) {
//       grade = "D";
//     } else {
//       grade = "F";
//     }
  
//     document.getElementById("output").textContent = `The grade for a score of ${score} is ${grade}.`;
//   }








function calculateGrade() {
    let score = parseInt(document.getElementById("score").value);
    let grade;
  
    if (score >= 90) {
      grade = "A";
      document.getElementById("output").textContent = ` ${grade}`;
      document.getElementById("output5").textContent = `Congratulation you Passed! Your average is ${score}↑`;
    } else if (score >= 80) {
      grade = "B";
      document.getElementById("output1").textContent = ` ${grade}`;
      document.getElementById("output6").textContent = `Congratulation you Passed! Your average is ${score}↑`;
    } else if (score >= 70) {
      grade = "C";
      document.getElementById("output2").textContent = ` ${grade}`;
      document.getElementById("output7").textContent = `Try Again! Your average is ${score}↓`;
    } else if (score >= 60) {
      grade = "D";
      document.getElementById("output3").textContent = ` ${grade}`;
      document.getElementById("output8").textContent = `Try Again! Your average is ${score}↓`;
    } else {
      grade = "F";
      document.getElementById("output4").textContent = ` ${grade}`;
      document.getElementById("output9").textContent = `Try Again! Your average is ${score}↓`;
    }
  
    // document.getElementById("output5").textContent = `The grade for a score of ${score} is ${grade}.`;
    
  }
  