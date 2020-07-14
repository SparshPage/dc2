import React, { useState } from "react";
import { Menu } from "antd";
import About from "./About";

export const SubNav = () => {
  const [value, setvalue] = useState();
  const handleClick = (e) => {
    setvalue(e.key);
    console.log(e.key.);
  };

  const about = <About></About>;

  const timeline = <h3>This is ze timeline</h3>;

  return (
    <div className="subnav">
      <Menu mode="horizontal" onClick={(e) => handleClick(e)}>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="timeline">Timeline</Menu.Item>
      </Menu>

      <br />
      <React.Fragment>{value == "about" ? about : timeline}</React.Fragment>
    </div>
  );
};
