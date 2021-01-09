import React from "react";

const Tabs = ({ children, active, titles, setActive }) => {
  return (
    <div className="tabs">
      <ul>
        {titles.map((title, index) => (
          <li
            key={title}
            className={index === active ? "active" : ""}
            onClick={() => setActive(index)}
          >
            {title}
          </li>
        ))}
      </ul>
      <div>{children.map((child, index) => index === active && child)}</div>
    </div>
  );
};

export default Tabs;