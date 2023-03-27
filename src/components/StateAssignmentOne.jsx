import React, { useState } from "react";
import "../styles/StateAssignmentOne.css";
function StateAssignmentOne() {
  const [one, setOne] = useState(0);
  return (
    <section className="containerOne">
      <button
        onClick={() => {
          setOne(one + 1);
        }}
      >
        {one}
      </button>
    </section>
  );
}

export default StateAssignmentOne;
