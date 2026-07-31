import {sum,add} from "./spreadoperator.js"; // for single import sum from "./spreadoperator.js";
console.log("Sum = ",sum(1));
console.log("Sum = ",sum(1,5,43,45));
console.log("Sum = ",sum(1,2,3,5,6,6));
console.log("Sum = ",sum(1,65,3));
console.log("Sum = ",sum(1,7,50,12,23,3,5,87,8));

console.log();
console.log("Sum = ",add(1));
console.log("Sum = ",add(1,5,43,45));
console.log("Sum = ",add(1,2,3,46,6));
console.log("Sum = ",add(1,6,5,3));
console.log("Sum = ",sum(1,7,5,0,12,23,3,5,8,4,44,75,75,7,8));