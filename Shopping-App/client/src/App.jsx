import UserLayout from "./pages/UserLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import ItemStore from "./components/ItemStore";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout/>}>
        <Route index element={<ItemStore/>}/>
        <Route path="mycart" element={<h1>My Cart</h1>}/>
        <Route path="myorders" element={<h1>My Order</h1>}/>
        <Route path="settings" element={<h1>Setting</h1>}/>
        <Route path="profile" element={<h1>Profile</h1>}/>
        <Route path="logout" element={<h1>Logout</h1>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
