import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  padding: 40px;
  gap: 30px;
  margin-top: 15px;

  @media only screen and (max-width: 1000px) {
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 450px) {
    padding: 20px;
    font-size: 1em;
  }
`;

export const Title = styled.div`
  padding: 20px;
  font-size: 2em;
  font-size: 1.5em;
  font-weight: bold;

  @media only screen and (max-width: 1000px) {
    text-align: center;
  }
`;

export const Price = styled.div`
  padding: 20px;
  font-weight: bold;
`;

export const Description = styled.div`
  padding: 20px;
  font-size: 1.2em;
  line-height: 1.2em;
  font-weight: bold;
  text-align: justify;
  max-width: 500px;

  @media only screen and (max-width: 450px) {
    padding: 2px;
    font-size: 0.9em;
  }
  @media only screen and (max-width: 800px) {
    padding: 6px;
    font-size: 0.92em;
  }
`;

export const ImageBook = styled.img`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 400px;

  @media only screen and (max-width: 450px) {
    width: 250px;
  }
  @media only screen and (max-width: 800px) {
    width: 250px;
  }
`;

export const DescriptionContainer = styled.div`
  max-width: 600px;
`;

export const CartIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  height: 50px;
  padding: 20px;

  .icon-cart {
    cursor: pointer;
    color: #0a1a6f;
  }
  @media only screen and (max-width: 400px) {
    .icon-cart {
      width: 30px;
    }
  }
`;
