
import "./item.css"
const Item = ({props}) => {
  return (
    <div className="item">
        <img src={props.image} width={100} height={100} alt="item-image"/>
        <h2>Title:{props.title}</h2>
        <h3>Price: ₹{props.Price}-/</h3>
        <button className="btn">Add to Cart</button>
      
    </div>
  )
}

export default Item
