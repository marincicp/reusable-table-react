import { createContext, useContext, useState } from "react";
import "./actionMenu.css";
import { createPortal } from "react-dom";
import { FaEllipsisV } from "react-icons/fa";
const MenusContext = createContext();

function Menu({ children }) {
  return <div className="menu">{children}</div>;
}

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    console.log(e);

    const rect = e.target.closest("button").getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.width - rect.x,
      y: rect.y + rect.height,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button onClick={handleClick} className="toggle">
      <FaEllipsisV />
    </button>
  );
}

function List({ id, children }) {
  const { openId, open, close, position } = useContext(MenusContext);

  if (openId !== id) return null;

  return createPortal(
    <ul
      className="list"
      style={{ right: position.x + "px", top: position.y + "px" }}
    >
      {children}
    </ul>,
    document.body
  );
}

function Button({ children }) {
  return (
    <li>
      <button className="button">{children}</button>
    </li>
  );
}

function ActionMenu({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

ActionMenu.Menu = Menu;
ActionMenu.Toggle = Toggle;
ActionMenu.List = List;
ActionMenu.Button = Button;

export default ActionMenu;
