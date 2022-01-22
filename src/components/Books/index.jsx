import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { CartContext } from "../../contexts/Cart";
import { DetailsContext } from "../../contexts/Details";
import { BookItem, CartIcon } from "./styles";

function Books({ data }) {
  const { addItem } = useContext(CartContext);
  const { addDetails } = useContext(DetailsContext);

  return (
    <BookItem>
      <img src={data.image} alt="Foto do livro" />
      <title>{data.title}</title>
      <span>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(data.price)}
      </span>
      <div>
        <CartIcon>
          <FaCartArrowDown
            className="cart-icon"
            size="20px"
            onClick={() => {
              addItem(data);
            }}
          />
        </CartIcon>

        <Link to="/details">
          <button
            onClick={() => {
              addDetails(data);
            }}
          >
            Detalhes
          </button>
        </Link>
      </div>
    </BookItem>
  );
}

export default Books;
