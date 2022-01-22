import styled from "styled-components";

export const BookItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 5px;
  border-radius: 0 0 10px 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #eee;

  &:hover {
    box-shadow: -10px 10px 0 #0a1a6f;
    border-bottom-left-radius: 10px;
  }
  img {
    width: 200px;
  }
  title {
    display: contents;
    font-weight: bold;
    font-size: 1.1em;
    color: #2b2b2b;
  }
  span {
    color: #0a1a6f;
    font-weight: bold;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  button {
    background-color: #0a1a6f;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    font-size: 0.8em;
    line-height: 0.8em;
    color: #fff;
    width: 65px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
  }
`;

export const CartIcon = styled.div`
  margin: 0 auto;
  cursor: pointer;
`;
