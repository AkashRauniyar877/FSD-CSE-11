function register(cb){
    setTimeout(()=>{
    console.log("Register Here")
    cb();
    },10000)
}
function login(cb){
    setTimeout(()=>{
    console.log("login Here");
    cb();
    },5000)
}
function getData(cb){
     setTimeout(()=>{
    console.log("Fetch data from DB");
    cb();
    },3000)
}
function DisplayData(cb){
     setTimeout(()=>{
    console.log("Display Data");
    cb();
    },6000)
}
//callback hell Problem
register(
      ()=>{
         login(
              ()=>{
                  getData(
                    ()=>{
                         DisplayData();
                        }
                    );              
                }
            );
        }
    );

 console.log("Call Another Application");
