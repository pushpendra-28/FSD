function orderfood(item,time){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("your order is" ,item)
            resolve("order deliverd")
        }, time);
    });
}
orderfood("pasta",1000).then(()=>{
    orderfood("mocha",2000).then(()=>{
orderfood("pizza",3000);
    })
})
async function order(){
    await orderfood("pasta",1000);
    await orderfood("mocha",2000);
    await orderfood("pizza",3000);
}
order();
