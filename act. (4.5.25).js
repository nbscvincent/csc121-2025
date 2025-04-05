//DRIVERS LICENSE ELIGIBILITY//


let age = 100;

if (age >= 18 && age < 60) {
  console.log("you are eligible for the license")
}
  else if (age >= 60) {
    console.log ("you are too old na po, passenger princess na lang po kayo")
  }
  else if (age <= 0) {
    console.log("baby cant drive abunjing")
  }
else {
  console.log("you are not eligible for the license")
}



// GENDER CHECKER //


let gender = "F"

if (gender === "M") {
  console.log("You are a male")
}
else if (gender === "F") {
  console.log("you are a female")
}
else {
  console.log("invalid")
}









// GRADE CHECKER
let grade = 80;

switch (true) {
  case (grade >= 97  && grade <= 100) :
    console.log("You got an A, good job");
    break;

  case (grade >= 95 && grade <= 96):
    console.log("You got B, thumbs up");
    break;

  case (grade >= 92 && grade <= 94):
    console.log("You got C, very good");
    break;

  case (grade >= 90 && grade <= 91):
    console.log("You got D, passed good job");
    break;
  default:
    console.log("sorry, do better next sem")
}
