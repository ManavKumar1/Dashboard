import React from "react";
import "./CustomButton.scss"; // Import SCSS file for styling

const CustomButton = ({
  width = "auto",
  height = "40px",
  color = "#fff",
  bgColor = "#007bff",
  borderRadius = "5px", // Default roundness of the button
  children,
  onClick,
}) => {
  return (
    <button
      className='custom-button'
      style={{ width, height, color, backgroundColor: bgColor, borderRadius }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
