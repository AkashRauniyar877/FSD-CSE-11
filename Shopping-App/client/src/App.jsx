import UserLayout from "./pages/UserLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout/>}/>
        <Route path="/mycart" element={<h1>My Cart</h1>}/>
        <Route path="/myorders" element={<h1>My Order</h1>}/>
        <Route path="/settings" element={<h1>Setting</h1>}/>
        <Route path="/profile" element={<h1>Profile</h1>}/>
        <Route path="/logout" element={<h1>Logout</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
