import React from "react";

const Button = ({ contentButton, colorButton }) => {
  return (
    <button
      className={`px-3 py-2 text-${colorButton} border-[2px] border-${colorButton}`}
    >
      {contentButton}
    </button>
  );
};

export default Button;
