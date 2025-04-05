let grade = "93"

switch (true) {
  case (grade >= 97 && grade <= 100 ):
    console.log("A");
    break;
  case (grade >= 95 && grade <= 96 ):
    console.log("B");
    break;
  case (grade >= 92 && grade <= 94):
    console.log("C");
    break;
  case (grade >= 90 && grade <= 91 ):
    console.log("D");
    break;
  default:
    console.log("Failed");  
}

let gender = "m" if (gender === "M","m") { console.log("Male") } else
 if (gender === "F","f"){ console.log("Female") } else{ console.log("X") }

let age = 20 if (age >= 18) { console.log("you are valid") } else { console.log("you are not valid") }