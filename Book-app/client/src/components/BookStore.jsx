import Book from "./Book"

const BookStore = () => {
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
  return (
    <div className="bookStore">
      {bookdata.map((book,index) => {
        return<Book key={index} {...book} />
      })}
    </div>
  )
}

export default BookStore
