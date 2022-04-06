import Card from "../components/Card";
import { v4 as uuid } from "uuid";
import { IoShirt } from "react-icons/io5";
import { RiShirtFill } from "react-icons/ri";
import { GiShirt, GiPoloShirt, GiTShirt, GiArmoredPants } from "react-icons/gi";
import "./Products.css";

function Products(){
    const products = [
        {name: "Vest", price: 45, icon: <IoShirt size={250} />},
        {name: "Jacket", price: 60, icon: <RiShirtFill size={250} />},
        {name: "Sweater", price: 65, icon: <GiShirt size={250} />},
        {name: "TShirt", price: 20, icon: <GiTShirt size={250} />},
        {name: "Pants", price: 40, icon: <GiArmoredPants size={250} />},
        {name: "Jumper", price: 25, icon: <GiPoloShirt size={250} />},
    ]

    return(
        <div className="product-list">
                {products.map((product) =>
                    <div key={uuid()}>
                        <Card icon = {product.icon} name={product.name} price={product.price} />
                    </div>
                )}  
        </div>
    )
}

export default Products;