import { useEffect, useState } from "react";

export function Counter() {
  // Desestructuramos el Array de useState.
  // El Array de useState tiene 2 elementos.
  // Al desestructurarlo al primero lo llamamos counter que es el estado inicial.
  // Al segundo lo llamamos setCounter que es una función de React.
  // En useState se define el estado inicial.
  // es similar a escribir:
  // const counter = useState[0]
  // const setCounter = useState[1]
  const [counter, setCounter] = useState(0);

  const [counter2, setCounter2] = useState(0);

  // Si coloco el Array vacío, se ejecuta solo al inicio.
  useEffect(() => {
    console.log("Iniciando la app");
  }, []);

  // Le indicamos que la función console.log se ejecute una vez que cambie de estado "counter".
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const handlerClick = (increment: number) => {
    // utilizamos la función setCounter para cambiar el valor del counter y que refresque la pantalla.
    setCounter(counter + increment);

    // En console.log están los valores sin los cambios de estado.
    console.log(counter);
  };

  const handlerClick2 = (increment: number) => {
    setCounter2(counter2 + increment);
    console.log(counter2);
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => handlerClick(-1)}>➖</button>
      <button onClick={() => handlerClick(+1)}>➕</button>

      <p>{counter2}</p>
      <button onClick={() => handlerClick2(-1)}>➖</button>
      <button onClick={() => handlerClick2(+1)}>➕</button>
    </div>
  );
}
