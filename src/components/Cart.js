import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  // const state = useSelector(state => state)
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);

  return (
    <React.Fragment>
      <Container>
        <Title> Your Cart </Title>
        {storeItems.map((eachItem, i) => {
          console.log(eachItem, "HERE");
          return (
            <>
              <CartItem
                id={eachItem.id}
                quantity={eachItem.quantity}
                title={eachItem.title}
              ></CartItem>
            </>
          );
        })}
        {storeItems.length > 0 && (
          <StyledTotal>
            
            Total= $
            {storeItems.reduce((acc, item) => {
              console.log(acc);
              console.log(item);
              return acc + item.price * item.quantity;
            }, 0)}
            <StyledButton> Purchase </StyledButton>
          </StyledTotal>
       
        )  }
      </Container>
    </React.Fragment>
  );
};

export default Cart;

const Container = styled.div`
  height: 100%;
  width: auto;
  background: RGBA(64, 31, 67);
  /* display:flex;
flex-direction: column; */
`;
const Title = styled.div`
  padding: 10%;
  font-weight: bold;
  color: white;
  position: relative;
`;

const StyledTotal = styled.div`
  color: white;
  padding-left: 10%;
  font-size: 1.2rem;
  font-weight: bold;

`;

const StyledButton = styled.button`
color: white;
border: 1px solid white;
background: lightpink;
outline:none;
cursor: pointer;
border-radius: 9px;
font-size: 1.2rem;

`