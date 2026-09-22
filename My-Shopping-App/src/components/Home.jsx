import Item from "./item"
//import { Outlet } from "react-router-dom"
const Home = () => {
  const itemData= [
   [
    {title: "Mathematics for Beginners", Price: 299},
    {title: "Advanced Mathematics", Price: 499},
    {title: "Physics Fundamentals", Price: 399},
    {title: "Concepts of Chemistry", Price: 449},
    {title: "Biology: The Living World", Price: 349},
]
  ]
  return (
    <div className="home">{
      itemData.map((item,index) =>{
        return <Item key={index} props={item}/>
       })

    }
    </div>
  )
}

export default Home
