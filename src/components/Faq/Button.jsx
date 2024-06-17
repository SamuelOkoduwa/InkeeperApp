import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <>
      <button
        onClick={onclick}
        className="custom-button"
        style={{
          fontSize: "18px",
          background: "#002CB0",
          padding: "12px 24px 12px 24px",
          color: "#E4F5FF",
          fontWeight: "400",
          lineHeight: "24px",
          borderRadius: "8px",
          gap: "8px",
        }}
      >
        Contact Us
      </button>
    </>
  );
};

export default Button;
