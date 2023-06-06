import React from "react";
import axios from "axios";

export default function App() {
  function click() {
    const data = {
      message: "Hello",
    };

    axios
      .post("http://localhost:3000/api/endpoint", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div>
      <button onClick={click}>Click here</button>
    </div>
  );
}
