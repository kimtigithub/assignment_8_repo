import React, { useState } from "react";
import "../styles/StateAssignmentTwo.css";
function StateAssignmentTwo() {
  const [two, setTwo] = useState([]);
  function randomGen() {
    setTwo([...two, Math.floor(Math.random() * 10)]);
  }
  return (
    <section className="containerTwo">
      <button onClick={randomGen}>Click me!</button>
      <ul>
        {two.map((number, index) => {
          return <li key={index}>{number}</li>;
        })}
      </ul>
    </section>
  );
}

export default StateAssignmentTwo;
