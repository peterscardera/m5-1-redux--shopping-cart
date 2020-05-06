import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateItem } from "../actions";

const CartItems = ({ quantity, id, title, price }) => {
    console.log(price)
  const dispatch = useDispatch();

  return (
    <React.Fragment>
     
      <Wrapper>
        <FirstRow>.
          <Title> {title}</Title>
          <StyledButton
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            X
          </StyledButton>
        </FirstRow>
        <div>Quantity:</div>
        <Quantity
          type="text"
          placeholder="#"
          onChange={(e) => dispatch(updateItem(e.target.value, id))}
          value={quantity}
        ></Quantity>
      </Wrapper>
     
    </React.Fragment>
  );
};

export default CartItems;

const Wrapper = styled.div`
  color: white;
  height: auto;
  /* background: red; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20% 10%;
  border: 1px dashed white;
`;
const Title = styled.div`
  padding: 10px;
`;

const Quantity = styled.input`
  background: #800080;
  padding: 10px;
`;

const StyledButton = styled.button`
  margin: 0 15px;
  color: white;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  width: 20px;
  font-size: 18px;
  font-weight: bold;
  outline: none;
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledPrice = styled.div`
  color: white;
`;
