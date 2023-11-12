// import { useState } from "react"
import Button from "./Button";
import styled from "styled-components";
const Square = ({ id, color, onDelete }) => {
  return (
      <Container 
        key={id}
        style={{          
          backgroundColor: color,
          height: 150
        }}
        onClick={() => onDelete(id)}
      >
        <DeleteButton><Button >Delete</Button></DeleteButton>
        
      </Container>
  );
};

export default Square;


const DeleteButton = styled.div`
position: absolute;
right:0;
bottom: 0;
margin: 5px;
`;


const Container = styled.div`
  position: relative;
`;