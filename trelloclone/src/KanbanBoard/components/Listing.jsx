import React from "react";

function Listing({ title, children }) {
  return (
    <div
      style={{
        backgroundColor: "#ebecf0",
        borderRadius: "3px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        maxHeight: "100%",
        whiteSpace: "normal",
      }}
    >
      <span
        style={{
          flex: "0 0 auto",
          minHeight: "20px",
          padding: "10px 8px",
          fontWeight: "600",
          margin: "0 0",
          fontSize: "16px",
          lineHeight: "22px",
        }}
      >
        {title}
      </span>
      {children}
    </div>
  );
}
export { Listing };
