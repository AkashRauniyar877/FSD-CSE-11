const bookdata = [
    { image: "./img2.webp", price: 465 },
    { image: "./img3.webp", price: 485 },
    { image: "./img4.webp", price: 556 },
    { image: "./img5.webp", price: 756 },
   
];

function Book(props) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");

    const image = document.createElement("img");
    image.setAttribute("src", props.image);
    image.setAttribute("width", "120px");
    image.setAttribute("height", "150px");

    const h4 = document.createElement("h4");
    h4.innerText = `Price: ₹${props.price}`;

    const btn = document.createElement("button");
    btn.innerText = "Add To Cart";
    btn.onclick=()=>addToCart(props);
    btn.style.backgroundColor="aqua";
    btn.style.color = "black";
    btn.style.padding = "10px 20px";
    btn.style.borderRadius = "10px";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "16px";

    btn.addEventListener("click", () => {
        btn.innerText = "Added ✓";
    });
    btn.addEventListener("click",() => {
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
    })



    div.appendChild(image);
    div.appendChild(h4);
    div.appendChild(btn);

    return div;
}

const bookstore = bookdata.map((i) => {
    return Book(i);
});

const cart =[];
function addToCart(data){
    cart.push(data);
    console.log(data,"DAta Added Successfully")
    alert("book Added succesfully")
}

const parent = document.getElementById("root");

for (let b of bookstore) {
    parent.appendChild(b);
}