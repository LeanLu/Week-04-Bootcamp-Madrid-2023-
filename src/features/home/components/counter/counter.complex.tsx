import { useEffect, useState } from "react";

export function CounterComplex() {
  const [counters, setCounter] = useState({
    count1: 0,
    count2: 0,
  });

  useEffect(() => {
    console.log("Iniciando la app");
  }, []);

  useEffect(() => {
    console.log(counters);
  }, [counters]);

  const handlerClick = (increment: number) => {
    setCounter({ ...counters, count1: counters.count1 + increment });
  };

  const handlerClick2 = (increment: number) => {
    setCounter({ ...counters, count2: counters.count2 + increment });
  };

  return (
    <div>
      <p>{counters.count1}</p>
      <button onClick={() => handlerClick(-1)}>➖</button>
      <button onClick={() => handlerClick(+1)}>➕</button>

      <p>{counters.count2}</p>
      <button onClick={() => handlerClick2(-1)}>➖</button>
      <button onClick={() => handlerClick2(+1)}>➕</button>
    </div>
  );
}
