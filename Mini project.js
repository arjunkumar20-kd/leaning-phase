// Mini project ++++ Consloe Grade checker 

let StudentName = "Aman";
let Score = prompt("Enter your score");
console.log("Student Name: " + StudentName);
console.log("Score:" +Score);

if(Score<0||Score>100){
    console.log("Invalid Score .Score 0 se 100 ke bich hone chahiye");
}else if( Score === 100){
    console.log("Grade A+");
    console.log("Perfect Score!");
}else if (Score>=90){
    console.log("Grade A");
    console.log("exelent work");
} else if (Score>=80){
    console.log("Grade B");
    console.log("Good work");
}else if (Score>=50){
    console.log("Grade C");
    console.log("Average work");
}else if (Score>=40){
    console.log("Grade D");
    console.log("Below Average work");
}else if (Score<40){
    console.log("Grade F");
    console.log("Fail");
    console.log("Better luck next time");
}
