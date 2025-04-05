**Conditional Statement**
let age = 18;
if (age >= 18){
  console.log("You are qualified for a driver's license")
}
else {
  console.log("You are not qualified for a driver's license")
}


**else if statement**
let gender = "M";

if (gender === "M"){
  console.log("Your gender is Male")
}
else if (gender === "F") {
  console.log("Your gender is Female")
}
else {
  console.log("Invalid gender!")
}


**Switch cases**
let grade = 91;
switch (true) {
  case (grade >= 97 && grade <= 100):
    console.log("You've got an A!");
    break;
  case (grade >= 95 && grade <= 96):
    console.log("You've got an B!");
    break;
  case (grade >= 92 && grade <= 94):
    console.log("You've got an C!");
    break;
  case (grade >= 90 && grade <= 91):
    console.log("You've got an D!");
    break;
  case (grade <= 89):
    console.log("You failed!");
    break;
  default:
    console.log("Invalid!");
}