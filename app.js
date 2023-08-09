//MODULES 

// let a = {
//     average: (a,b) => {
//         console.log((a+b)/2);
//     },
//     percent: (a,b) => {
//         console.log((a/b)*2);
//     }
// }

// module.exports = a;
// export default a;

// 2) FILE BASED MODULES
//1st Method to do...
// const {readFileSync} = require('fs');
// const a = readFileSync('./text.txt','utf-8');
// console.log(a);

//2nd method to do...

// const fs = require('fs');
// const a = fs.readFileSync('./text.txt', 'utf-8');
// console.log(a);


//WRITING TO THE FILE
const fs = require('fs');
const a = "This is from app to sample written test.";

fs.writeFile('./sample.txt', a, ()=> {
    console.log('successful!');
});
console.log("I'm first.");