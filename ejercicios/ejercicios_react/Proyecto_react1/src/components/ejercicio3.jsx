import { useState } from "react";

function Ejercicio3() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <>
      <h2>Ejercicio 3</h2>
      <button onClick={() => setMostrar(!mostrar)}>¡Haz click aquí!</button>
      {mostrar == false && <p>Hola Alejo</p>}
    </>
  );
}

export default Ejercicio3;
