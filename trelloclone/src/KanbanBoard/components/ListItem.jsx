import React from "react";
import { Avatar } from "antd";

function ListItem({ text, icon }) {
  return (
    <div>
      <Avatar
        shape="square"
        style={{ background: "#fff", color: "#42526e" }}
        icon={icon}
      />
      <span
        style={{
          fontWeight: 700,
          color: "rgb(23, 43, 77)",
          borderRadius: "3px",
          lineHeight: "20px",
          padding: "6px 6px 6px 14px",
          position: "relative",
          textDecoration: "none",
        }}
      >
        {text}
      </span>
    </div>
  );
}
export { ListItem };
