import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink className="nav-link" to="/personTable">
            Address Book
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/customFootball">
            Custom Football
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Basic
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
