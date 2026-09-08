

const Book = (props) => {
  return (
    <div className="book">
      <img src={props.image} alt={props.title} />
      <h2>Title: {props.title}</h2>
      <h2>Price: {props.price}</h2>
      <button>Buy Now</button>
    </div>
  );
};

export default Book;