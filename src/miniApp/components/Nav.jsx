import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { map } from "lodash-es";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const routes = [
  {
    title: "Address Book",
    link: "/",
  },
  {
    title: "Custom Football",
    link: "/customFootball",
  },
  {
    title: "Basic",
    link: "/basicTable",
  },
];

function Nav() {
  const navRef = useRef();

  function showNavbar() {
    navRef.current.classList.toggle("repsonsive-nav");
  }
  return (
    <header>
      <nav ref={navRef}>
        <ul className="nav-list">
          {map(routes, (route) => (
            <li className="nav-item" key={route.title}>
              <NavLink
                onClick={showNavbar}
                className="nav-link"
                to={route.link}
              >
                {route.title}
              </NavLink>
            </li>
          ))}
        </ul>{" "}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <RxCross2 />
        </button>
      </nav>

      <button className="nav-btn " onClick={showNavbar}>
        <RxHamburgerMenu />
      </button>
    </header>
  );
}

export default Nav;
