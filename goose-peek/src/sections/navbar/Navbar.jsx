import "./navbar.css";
import data from "./data";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // To get the current path

  return (
    <nav>
      <ul className="nav__menu">
        {data.map((item) => (
          <li key={item.id} className="flex justify-center rounded-lg bg-slate-300">
            <Link
              className = "flex items-center" 
              to={item.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
