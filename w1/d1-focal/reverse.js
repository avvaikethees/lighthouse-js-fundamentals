const args = process.argv;
//console.log(args); 
let newArray = args.slice(2);
let string = "";  

let reverse = function(newArray) {
  for (let i = 0; i < newArray.length; i ++) {
    string = "";
    for (let j = newArray[i].length - 1; j >=0; j --) {
      string +=  newArray[i][j];
    }
    console.log (string + "\n");
  }
  
  // for (let i = newArray.length -1; i >= 0; i --) {
  //   string += newArray[i]; 
  // }
  return string;
}
  /*for (i = newArray.length -1; i >=0; i-- ) {
    string += newArray[i];
  }
  return string
}
*/
reverse(newArray); 