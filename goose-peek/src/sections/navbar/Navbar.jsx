import "./navbar.css";
import data from "./data";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    //ul is for bullet point list in which order does not matter
    <nav>
        <ul className="nav__menu">
          {
            //iterate through all the items in data, setting the link to the name
            data.map((item) => (
              <div className="route_container">
                  <li key={item.id}>
                    <Link className="routes" to={item.link}>{item.title}</Link>
                  </li>
              </div>

            ))
          }
        </ul>
    </nav>
  );
};

export default Navbar;