
import Item from './item'
const ItemStore = () => {
     const itemData= [
    {image: "https://c8.alamy.com/comp/2R24T4B/math-textbook-with-formulas-on-school-blackboard-vector-mathematics-science-education-open-book-with-orange-cover-on-background-of-chalkboard-with-math-formulas-geometric-shapes-algebra-equations-2R24T4B.jpg" ,title: "Mathematics for Beginners", Price: 299},
    {image:"https://m.media-amazon.com/images/I/51va0XXqwcL._SY445_SX342_.jpg", title: "Advanced Mathematics", Price: 499},
    {image:"https://in.images.search.yahoo.com/search/images;_ylt=A2RTWP31ULJq7wIA26.9HAx.;_ylu=Y29sbwNhcC1zb3V0aGVhc3QtMQRwb3MDNgR2dGlkAwRzZWMDc3I-?fr=mcafee&p=physics+book+cover&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F814VZlo2tXL._SL1500_.jpg",title: "Physics Fundamentals", Price: 399},
    {image:"https://tse4.mm.bing.net/th/id/OIP.WqdaNDnYEVilTvNOj4zSrQHaHa?r=0&pid=Api&h=220&P=0 ",title: "Concepts of Chemistry", Price: 449},
    {image:"https://books.kolbe.org/cdn/shop/products/6015_Pentice_Hall_Biology_Cover_f6f0c3a7-d507-44b5-8d85-b3b15f43e509_1984x.jpg?v=1655691817",title: "Biology: The Living World", Price: 349},

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
