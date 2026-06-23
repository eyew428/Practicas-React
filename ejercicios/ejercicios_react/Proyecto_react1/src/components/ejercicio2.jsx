import { useState } from "react";

function Ejercicio2() {
  const [text, setChange] = useState("");

  return (
    <>
      <h2>Ejercicio 2</h2>
      <input type="text" onChange={(e) => setChange(e.target.value)} />
      <p>texto: {text}</p>
      {text == "hola" && <p>hola</p>}
    </>
  );
}

export default Ejercicio2;
