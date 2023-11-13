import React from "react";
import Button from "./Button";
import styled from "styled-components";

const Square = ({ id, color, onDelete }) => {

const handleDelete=(e)=>{
  e.stopPropagation()
  onDelete(id)
}
  return (
    <Container
      key={id}
      style={{
        backgroundColor: color,
        height: 150,
      }}
    >
      <DeleteButton>
        <Button onClick={handleDelete}>Delete</Button>
      </DeleteButton>
    </Container>
  );
};

export default Square;

const DeleteButton = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 5px;
  color: white;
`;

const Container = styled.div`
  position: relative;
`;
