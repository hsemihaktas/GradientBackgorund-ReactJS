import React from "react";

import ColorInput from "./components/ColorInput";
import DeleteButton from "./components/DeleteButton";
import AddButton from "./components/AddButton";
import RangeBar from "./components/RangeBar";
import TypeButton from "./components/TypeButton";

import "./styles/main.css";

function App() {
  const [colors, setColor] = React.useState([
    {
      id: 0,
      color: "#827081",
    },
    {
      id: 1,
      color: "#e7e6f7",
    },
  ]);
  const [degree, setDegree] = React.useState("90");
  const [type, setType] = React.useState("linear");

  const changeColor = (e) => {
    console.log(e.target.value);
    const clonedColor = colors.map((item) => {
      if (item.id === Number(e.target.id)) {
        return {
          id: item.id,
          color: e.target.value,
        };
      } else {
        return item;
      }
    });
    setColor(clonedColor);
  };

  const deleteColor = (e) => {
    if (colors.length > 2) {
      const clonedColor = colors.filter(
        (item) => item.id !== Number(e.target.id)
      );
      setColor(clonedColor);
    }
  };

  const addColor = () => {
    const clonedColor = [...colors];
    const newColor = {
      id: Date.now(),
      color: "#ffffff",
    };
    clonedColor.push(newColor);
    setColor(clonedColor);
  };

  const changeRange = (e) => {
    setDegree(e.target.value);
  };

  return (
    <div className="container">
      <div
        className="backgroundContainer"
        style={{
          background: `${type}-gradient(${
            type === "linear" ? degree + "deg" : "circle"
          }, ${colors.map((item) => item.color)})`,
        }}
      />
      <div className="colorGroup">
        {colors.map((item) => (
          <div key={item.id}>
            <ColorInput
              id={item.id}
              onChange={changeColor}
              value={item.color}
            />
            <DeleteButton id={item.id} onClick={deleteColor} />
          </div>
        ))}
        <AddButton onClick={addColor} />
      </div>
      {type === "linear" ? (
        <RangeBar value={degree} onChange={changeRange} />
      ) : null}
      <TypeButton
        onClick={() => {
          setType("linear");
        }}
      >
        Linear
      </TypeButton>
      <TypeButton
        onClick={() => {
          setType("radial");
        }}
      >
        Radial
      </TypeButton>

      <h1 className="codeText">
        {`background: ${type}-gradient(${
          type === "linear" ? degree + "deg" : "circle"
        },${colors.map((item) => " " + item.color)});`}
      </h1>
    </div>
  );
}

export default App;
