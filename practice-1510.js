// function aa(){
//     console.log("first");

// }
// setTimeout(aa,2000);
// // IIFE
// (function(){
// console.log("second");
// })();

// let a = new Function('console.log("constructor");');
// a()

// let b=()=>{
//     console.log("third");
// }
// b()

// function rollnumber(){
//     console.log("first")
// } 
// setTimeout(rollnumber,2000)
// function displayRollNumber(num){
//     console.log("rollno. is",num);
// }
// setTimeout(displayRollNumber,1000,2022320150049)
// setTimeout(displayRollNumber,2000,20223201500450)

// function rollnumber(num,delay,next){
// setTimeout(() => {
//     console.log("rollnumber is",num);
//     if (next)next();

// },delay);
// }
// rollnumber(1212,1000,() => {
//     rollnumber(123,2000, () => {
//         rollnumber(987,3000);
//     });
// });


// callback
const promise=new Promise(function(resolve,reject){
    console.log("my first promise")
    resolve("Resolved")
    reject("Rejected");
});

promise.then(()=>{
    console.log("my first then")
}).catch(() =>{
    console.log("my first catch")
})