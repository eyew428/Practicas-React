import { useState } from "react";

const Ejercicio1 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
      <p>{count}</p>
    </>
  );
};

export default Ejercicio1;
