
function Book(props){
    const image = React.createElement("img", {src:props.image, width:"100px",height:"150px"},null);
    const title = React.createElement("h3",{style:{color:"#e6ad27"}},"Title:"+ props.title );
    const price = React.createElement("h3",{style:{color:"blue"}},"Price:"+ props.price);
    const btn = React.createElement("button",{style:{color:"green"}},"Add To Cart");

    const div = React.createElement("div",{className:"book"},[image,title,price,btn]);

    return div;

}

export default Book;