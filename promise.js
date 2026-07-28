function register(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("Register Here")
    resolve();
    },10000)
})
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("login Here");
        resolve();
        },5000)

})
}

function getData(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
    console.log("Fetch data from DB");
    resolve();
    },3000)
})
}
function DisplayData(){
     return new Promise((resolve,reject)=>{
     setTimeout(()=>{
    console.log("Display Data");
    resolve();
    },6000)
})
}
// register()
//     .then(login)
//         .then(getData)
//             .then(DisplayData)
//                 .catch((err)=>{
//                   console.log("Error",err);

//     })

async function test(){
    try{
      await  register();
       await login();
       await getData();
       await DisplayData();
    }
    catch(err){
        console.log("Error",err);
    }
}
test();

 console.log("Call Another Application");
