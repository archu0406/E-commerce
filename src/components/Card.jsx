import { useContext } from "react";
import CartContext from "../CartContext";
import { AiFillShopping } from "react-icons/ai";
import "../css/Card.css";

function Card({name, price, icon}) {

    const { addToCart } = useContext(CartContext);

    return(
        <div className="card">
            <div className="product-box">
                {icon}
            </div>

            <div className="purchase">
                <h3>{name}</h3>

                <h4> $ {price}</h4>

                <button className="add" onClick = {() => addToCart(name, price)}>
                    Add to Cart <AiFillShopping />
                </button>
            </div>
        </div>
    );
}

export default Card;