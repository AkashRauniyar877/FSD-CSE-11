import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/mycart">My Cart</Link>
        <Link to="/myorders">My Orders</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>
      
    </div>
  )
}

export default Nav
