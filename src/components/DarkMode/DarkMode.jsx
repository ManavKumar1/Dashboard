import React from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";

import "./DarkMode.css";

export const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkMode();
  }
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        {/* <img src={Sun} alt='Sun Icon' /> */}
        {/* <img src={Moon} alt='Moon Icon' /> */}
      </label>
    </div>
  );
};
