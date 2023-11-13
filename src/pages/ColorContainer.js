import { useNavigate } from "react-router-dom";
import Square from "../component/Square";
import styled from "styled-components";

function ColorContainer({ onDelete, colors = [] }) {
  console.log(colors)
  const navigate = useNavigate();

  const handleClick = (color) => {
    navigate(`/color/${color.id}/`);
  };

  return (
    <Container>
      <ColorList>
        {colors.map((color) => (
          <div
            key={color.id}
            className="box"
            onClick={() => handleClick(color)}
          >
            {/* <Link to={`/square/${color.id}/${color.name}`}> */}
            <Square
              id={color.id}
              color={color.name}
              onDelete={onDelete}
            ></Square>
            {/* </Link> */}
          </div>
        ))}
      </ColorList>
    </Container>
  );
}
export default ColorContainer;

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
