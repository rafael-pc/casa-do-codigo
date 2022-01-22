import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/Cart";
import { FaCartPlus } from "react-icons/fa";
import { HeaderMenu } from "./styles";

function Menu() {
  const { cart } = useContext(CartContext);

  return (
    <HeaderMenu>
      <Link to="/" className="menu-list-item">
        Casa do Código
      </Link>
      <Link to="/cart" className="cart-list-item">
        {cart.length} <FaCartPlus size="20px" />
      </Link>
    </HeaderMenu>
  );
}

export default Menu;
