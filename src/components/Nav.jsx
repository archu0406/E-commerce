import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../CartContext";
import { AiFillShopping } from "react-icons/ai";
import "./Nav.css";

function Nav() {

  const { items } = useContext(CartContext);

  return (
    <nav className="nav">
      <div>
        <h1> 
          <Link to="/" className="logo">
            MyApparels
          </Link>
        </h1>
      </div>

      <ul className="nav">
        <li>
          <Link to="/"><p>Products</p></Link>
        </li>

        <li>
          <Link to="/checkout">
            <div className="cart">
              <p> 
                Cart
                <AiFillShopping />
                <span> {items.length} </span> 
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
