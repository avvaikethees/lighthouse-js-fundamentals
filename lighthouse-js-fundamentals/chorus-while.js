const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log ("*change key*"); 
  }
  console.log(chorus);
  // ++ is shorthand for repeat = repeat + 1
  repeat++;
}
console.log("Until the sun comes up!");