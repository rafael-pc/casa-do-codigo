import React, { useContext } from "react";
import { DetailsContext } from "../../contexts/Details";
import { CartContext } from "../../contexts/Cart";
import { FaCartArrowDown } from "react-icons/fa";
import {
  Container,
  DetailsContainer,
  ImageBook,
  Title,
  Price,
  Description,
  DescriptionContainer,
  CartIconContainer
} from "./styles";

function Details() {
  const { details } = useContext(DetailsContext);
  const { addItem } = useContext(CartContext);

  return (
    <Container>
      {details.map((detail) => (
        <DetailsContainer key={detail}>
          <div>
            <ImageBook src={detail.image} alt="livro"></ImageBook>
          </div>
          <DescriptionContainer>
            <Title className="title-detail">{detail.title}</Title>
            <Price>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(detail.price)}
            </Price>
            <Description>{detail.description}</Description>
            <CartIconContainer>
              <FaCartArrowDown
              className="icon-cart"
                size="35px"
                onClick={() => {
                  addItem(detail);
                }}
              />
            </CartIconContainer>
          </DescriptionContainer>
        </DetailsContainer>
      ))}
    </Container>
  );
}

export default Details;
