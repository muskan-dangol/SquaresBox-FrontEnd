// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ColorContainer from "./pages/ColorContainer";
import BoxDetail from "./pages/BoxDetail";
import Header from "./Header";

const initialColor = [
  { id: 1, name: "red" },
  { id: 2, name: "blue" },
  { id: 3, name: "yellow" },
  { id: 4, name: "green" },
  { id: 5, name: "gray" },
];

const App = () => {
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
      return String(color.id) !== String(id);
    });
    setColors(filteredColors);
  };

  const getColorById = (id) => {
    return colors.find((each) => String(each.id) === String(id));
  };

  return (
    <div>
      <Header onAdd={addColor} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ColorContainer colors={colors} onDelete={handleDeleteBox} />
            }
          />
          <Route
            path="/color/:id"
            element={
              <BoxDetail
                onDelete={handleDeleteBox}
                getColorById={getColorById}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
