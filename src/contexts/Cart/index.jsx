import { createContext, useEffect, useState } from "react"; 
import { v4 as uuidv4 } from "uuid";

export const CartContext = createContext([]); 

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function handleAddCart(card) {
    const newCard = {
      ...card,
      idCard: uuidv4(),
    };

    setCart([...cart, newCard]);
    localStorage.setItem("cart", JSON.stringify([...cart, card]));
    alert("Adicionado no carrinho");
  }

  function handleRemoveItemInCart(idCard) {
    const cartFiltered = cart.filter((item) => {
      if (item.idCard === idCard) {
        return false;
      } else {
        return true;
      }
    });
    setCart(cartFiltered);
    localStorage.setItem("cart", JSON.stringify(cartFiltered));
    alert("Removido do item");
  }

  useEffect(() => {
    function handleGetItensLocalStorage() {
      const storedArray = JSON.parse(localStorage.getItem("cart"));
      setCart(storedArray || []);
    }
    handleGetItensLocalStorage();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addItem: handleAddCart,
        removeItem: handleRemoveItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
