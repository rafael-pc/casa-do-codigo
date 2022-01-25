import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";
import { MdDelete } from "react-icons/md";
import ContainerDefault from "../../components/Container";
import {
  Container,
  CartValue,
  Table,
  THeader,
  TBody,
  CartPhoto,
  Row,
  RowItem,
} from "./styles";

function Cart() {
  const { cart, removeItem } = useContext(CartContext);

  let total = cart.reduce((total, valor) => total + valor.price, 0);

  return (
    <ContainerDefault>
      <Container>
        <CartValue> 
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total)}
        </CartValue>

        <Table>
          <THeader>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Deletar</th>
            </tr>
          </THeader>
          <TBody>
            {cart.map((item, index) => (
              <Row key={index}>
                <RowItem>
                  <CartPhoto src={item.image} alt="Foto da carta" />
                </RowItem>
                <RowItem>{item.title}</RowItem>
                <RowItem>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.price)}
                </RowItem>
                <RowItem>
                  <MdDelete
                    size={30}
                    color="#0a1a6f"
                    onClick={() => removeItem(item.idCard)}
                  />
                </RowItem>
              </Row>
            ))}
          </TBody>
        </Table>
      </Container>
    </ContainerDefault>
  );
}

export default Cart;
