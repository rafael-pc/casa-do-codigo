import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #ececec;
`;

export const CartValue = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 30px;
  width: 70%;
  text-align: right;
`;

export const Table = styled.table`
  width: 70%;
  background: #fff;
  padding: 10px;
  margin: 15px 0;
  @media only screen and (max-width: 300px) {
    td {
      font-size: 0.8em;
      padding: 4px;
    }
  }
  @media only screen and (max-width: 400px) {
    td {
      font-size: 0.9em;
      padding: 8px;
    }
  }
`;

export const THeader = styled.thead`
  th {
    color: #0a1a6f;
    text-align: left;
    padding: 12px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
  }
`;
export const TBody = styled.tbody``;

export const Row = styled.tr``;

export const RowItem = styled.td`
  vertical-align: middle;
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

export const CartPhoto = styled.img`
  height: 100px;
`;
