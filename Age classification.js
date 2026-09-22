// Age Classification

let Age = prompt("Enter your age");
console.log(Age);
if (Age >= 60){
    console.log("Senior Citizen");
}else if (Age >=18 && Age < 59){
    console.log("Adult");
}else if (Age >= 0 && Age < 18){
    console.log("Child");
}else if (Age <= 0){
    console.log("Invalid Age");
}else{
    console.log("Enter a valid age");
}