import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { FaEllipsisV } from "react-icons/fa";
import "./actionMenu.css";
const MenusContext = createContext();

function Menu({ children }) {
  return <div className="menu">{children}</div>;
}

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    const rect = e.target.closest("button").getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.width - rect.x,
      y: rect.y + rect.height - 8,
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
  const { openId, position } = useContext(MenusContext);

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

function Button({ children, onClick }) {
  return (
    <li>
      <button onClick={onClick} className="button">
        {children}
      </button>
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

ActionMenu.propTypes = {
  children: PropTypes.object,
};

Button.propTypes = {
  children: PropTypes.array,
  onClick: PropTypes.func,
};

List.propTypes = {
  children: PropTypes.object,
  id: PropTypes.number,
};

Toggle.propTypes = {
  id: PropTypes.number,
};

Menu.propTypes = {
  children: PropTypes.array,
};
