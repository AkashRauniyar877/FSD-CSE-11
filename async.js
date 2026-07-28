function register(){
    setTimeout(()=>{
    console.log("Register Here");
    },10000)
}
function login(){
    setTimeout(()=>{
    console.log("login Here");
    },5000)
}
function getData(){
     setTimeout(()=>{
    console.log("Fetch data from DB");
    },3000)
}
function DisplayData(){
     setTimeout(()=>{
    console.log("Display Data");
    },6000)
}

register();
login();
getData();
DisplayData();
console.log("Call Another Application")
