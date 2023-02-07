import { Link } from "react-router-dom";
import { MenuOption } from "../app/App";
import "./menu.scss";

type MenuProps = {
  options: MenuOption[];
};

export function Menu({ options }: MenuProps) {
  return (
    <nav>
      <ul>
        {options.map((item) => (
          <li key={item.label}>
            <Link to={item.path}>{item.label}</Link>
            {/* <a href={item.path}>{item.label}</a> Así era la forma anterior. Y ahora se reemplaza por el <Link>*/}
          </li>
        ))}
      </ul>
    </nav>
  );
}
