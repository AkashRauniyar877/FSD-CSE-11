
import Item from "./Item"
const ItemStore = () => {
     const itemData= [
    {image:"https://cdn.simpleicons.org/react/61DAFB",title:"React.js",Price: 499},
    {image:"https://cdn.simpleicons.org/nodedotjs/339933",title:"Node.js",Price: 599},
    {image:"https://cdn.simpleicons.org/express/000000",title:"Express.js",Price:449},
    {image:"https://cdn.simpleicons.org/mongodb/47A248",title:"MongoDB",Price:999},
    {image:"https://cdn.simpleicons.org/mysql/4479A1",title:"MySQL",Price:469},
    {image:"https://cdn.simpleicons.org/postgresql/4169E1",title:"POSTGrey SQL",Price:399},
    {image:"https://cdn.simpleicons.org/javascript/F7DF1E",title:"JavaScript",Price:299}
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


export default ItemStore
