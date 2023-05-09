import { useState } from "react";
import React from "react";

const Lower = () => {
  const [inputText, setInputText] = useState("");
  const [element, setElement] = useState([]);
  const addValue = () => {
    if (inputText === "") {
      alert("Input box is empty");
    } else {
      setInputText("");
      setElement([...element, inputText]);
    }
  };
  const deleteElement = (id) => {
    console.log(id);
    const delElem = element.filter((item, ind) => {
      return id !== ind;
    });
    setElement(delElem);
    // setElement(delElem)
  };
  return (
    <>
      <div className="container">
        <div className="main">
          <input
            type="text"
            value={inputText}
            placeholder="Your daily tasks..."
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <input type="submit" onClick={addValue} />
        </div>
        <div className="output">
          {element.map((item, index) => {
            return (
              <div key={index}>
                <span>{item}</span>
                <button onClick={() => deleteElement(index)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Lower;
