function addParagraph(){
    const para = document.createElement("p");
    para.innerText="This is new Para";
    para.style.color = "green";
    const parent = document.querySelector('#root');
    parent.appendChild(para);
}

const removeParagraph = () =>{
    const para = document.querySelector("p");
    const parent = document.getElementById("root");
    parent.removeChild(para);
}


const removeAll = () =>{
    const para = document.querySelectorAll("p");
    const parent = document.getElementById("root");
    // for(i of para) {
    //      parent.removeChild(i);
    // }
    para.forEach((i) => {
         parent.removeChild(i);
    })
   
}

