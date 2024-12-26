import React, { useState } from "react";
import "./Navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoCreateOutline, IoLogOutOutline } from "react-icons/io5";
import { LiaUserCircleSolid } from "react-icons/lia";
import { DarkMode } from "../DarkMode/DarkMode";
import { AppName } from "../../Constants/constants";

function Navbar({ toggleSidebar }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (toggleSidebar) {
      toggleSidebar();
    }
  };

  const handleLinkNavPath = (path) => navigate(path);

  const handleLogout = async () => {
    // Assuming dispatch is defined elsewhere, e.g., via useDispatch hook.
    await dispatch(logout());
    window.location.reload();
  };

  const userPhoto = ""; // Placeholder for user profile picture URL

  return (
    <nav className='Navbar-Main'>
      <div className='companyLogo flex selectNone'>
        {sidebarOpen ? (
          <FaTimes
            size={25}
            onClick={handleToggleSidebar}
            className='FaHover'
          />
        ) : (
          <FaBars size={25} onClick={handleToggleSidebar} className='FaHover' />
        )}
        <h1 onClick={() => handleLinkNavPath("/")}>{AppName}</h1>
      </div>

      <ul className='Navbar-Menu'>
        <li onClick={() => handleLinkNavPath("/create-note")}>
          <IoCreateOutline size={25} />
        </li>
        <li onClick={() => handleLinkNavPath("/user")}>
          {userPhoto ? (
            <img src={userPhoto} alt='User' className='Navbar-userPhoto' />
          ) : (
            <LiaUserCircleSolid size={25} />
          )}
        </li>
        <li onClick={handleLogout}>
          <IoLogOutOutline size={25} />
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
