let url='https://api.github.com/users/Pushpendra-28';
let b=fetch(url);
b.then((data)=>{
    
    console.log(data)
    return data.json();
}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("error")
}).finally(()=>{
    console.log("first");
})
async function fetchh(){
    console.log("here")
    let url='https://api.github.com/users'

    let b=await fetch(url);
    console.log("here")
    console.log(b)
    let data =await b.json();
    console.log(data);
}
fetchh()