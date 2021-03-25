import React from "react";
import { Menu } from "antd";

const LeftMenu = (props) => {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="blog">
        <a href="/blog">Documents</a>
      </Menu.Item>
      <Menu.Item key="create">
        <a href="/blog/create">Create</a>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
