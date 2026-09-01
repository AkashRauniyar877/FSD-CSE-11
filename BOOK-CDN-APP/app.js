import Book from "./book.js";
const bookdata = [
    {
        image:"./img1.jpg",
        title:"ReactJS",
        price:"₹499/-",
    },
     {
        image:"./node.webp",
        title:"NodeJS",
        price:"₹399/-",
    },
     {
        image:"./express.webp",
        title:"ExpressJS",
        price:"₹499/-",
    },
     {
        image:"./next.webp",
        title:"NextJS",
        price:"₹599/-",
    },
   

    

]

function App(){
    const bookstore = bookdata.map((b) => {
        return Book(b);
    })
    const div = React.createElement("div",
        {className:"bookstore"},
    [...bookstore]
)
return div;

}

export default App;