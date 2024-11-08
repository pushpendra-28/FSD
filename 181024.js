// let promise = new Promise((resolve, reject) => {
//     resolve({ user: 'aj', pass: "123456" });
// });

// promise.then((data) => {
//     console.log(data);
//     return data;
// }).then((res) => {
//     console.log(res.user);
// }).catch(() => {
//     console.log("error");
// }).finally(() => {
//     console.log("finally");
// });

// function roll(num,delay){
//     return new Promise((resolve,reject)=>{
// setTimeout(() => {
//     console.log("Roll no. is"+num);
//     reject(new Error("error cant't be resolved"));
    
// },delay);
//     })
// }
// roll(123131,1000).then(()=>{
//     roll(123123,2000).then(()=>{
//         roll(1211,3000).then(()=>{
//             console.log("all rolls are done");
//         })
//         })
// }).catch((error) => {
//     console.error("Error:", error);
// });
function roll(num,delay){
        return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Roll no. is"+num);
        resolve("successfully done");
        
    },delay);
        })
    }
    async function getRoll(){
        let roll1=await roll(12121,1000)
        let roll2=await roll(1232,2000)
    }
    getRoll();