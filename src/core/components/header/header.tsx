import logo from "./logo.svg";

type HeaderProps = { children: JSX.Element };

// Con Props:
// export function Header (props: {children: JSX.Element})
export function Header({ children }: HeaderProps) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      {children}
    </header>
  );
}

// Ejemplo de desestructuración:
/*

const getData = () => ({a: 3, b:4})
const {a, b} = getData();

Lo de arriba sería igual a:
// const x = getData()
// const a = x.a
// const b = x.b


const getData2 = (obj: {x: number, y: number}) => ({c: 3, d:4})
Desestructuramos lo de arriba:
const getData2 = ({x, y} { x: number; y: number }) => ({ c: 3, d: 4 });

const { c, d } = getData2({x:3, y:4});


Desestructuración pero para hacer un clon:
Spread operator:
const obj = {x: 3, y:4}
const obj2 = {...obj}

Si quiero cambiar una propiedad:
En este caso, hacemos clon de "obj" y cambiamos el valor solo de x:
const obj3 = {...obj, x:6}
*/
