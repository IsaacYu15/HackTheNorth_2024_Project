import "./navbar.css";
import data from "./data";

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
                    <a className="routes" href={item.link}>{item.title}</a>
                    <div className="underline"></div>
                  </li>
              </div>

            ))
          }
        </ul>
    </nav>
  );
};

export default Navbar;