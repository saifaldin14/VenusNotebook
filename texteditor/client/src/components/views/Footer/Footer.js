import React from "react";
import { Icon } from "antd";

const Footer = () => {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p>
        {" "}
        Let's make something great <Icon type="smile" />
      </p>
    </div>
  );
};

export default Footer;
