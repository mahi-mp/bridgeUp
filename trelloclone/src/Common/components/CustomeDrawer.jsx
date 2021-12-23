import React from "react";
import { Drawer } from "antd";

function CustomeDrawer({ title, visible, onClose, children }) {
  return (
    <Drawer
      title={
        <div
          style={{
            textAlign: "center",
            fontWeight: "700",
            color: "rgb(23, 43, 77)",
          }}
        >
          {title}
        </div>
      }
      placement="right"
      closable={true}
      onClose={onClose}
      visible={visible}
      closeIcon={
        <div style={{ right: "15px", top: "18px", position: "absolute" }}>
          X
        </div>
      }
      style={{
        top: "10%",
        bottom: 0,
        height: "90%",
      }}
    >
      {children}
    </Drawer>
  );
}
export { CustomeDrawer };
