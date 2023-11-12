import { useState } from "react";
import Header from "./Header";
import Square from "./component/Square";
import styled from "styled-components";

const initialColor = [
  { id: 1, name: "red" },
  { id: 2, name: "blue" },
  { id: 3, name: "yellow" },
  { id: 4, name: "green" },
  { id: 5, name: "gray" },
];

function App() {
  const [colors, setColors] = useState(initialColor);

  const addColor = (color) => {
    const newColor = {
      id: new Date(),
      name: color,
    };
    setColors([...colors, newColor]);
  };

  const handleDeleteBox = (id) => {
    const filteredColors = colors.filter((color) => {
      return color.id !== id;
    });
    setColors(filteredColors);
  };

  return (
    <Container>
      <Header
        onAdd={addColor}
        // onColorSelection={(color) => {
        //   addColor(color);
        // }}
      />
      <ColorList>
        {colors.map((color) => {
          return (
            <div key={color.id} className="box">
              <Square
                id={color.id}
                color={color.name}
                onDelete={handleDeleteBox}
              />
            </div>
          );
        })}
      </ColorList>
    </Container>
  );
}
export default App;

const Container = styled.div`
  height: 100vh;
`;

const ColorList = styled("div")`
  display: flex;
  align-items: center;
  height: 50vh;
  flex-wrap: wrap;

  .box {
    width: 30%;
    margin: 16px;
  }
`;
