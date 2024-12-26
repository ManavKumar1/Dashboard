import React, { useState } from "react";
import "./Sidebar.scss";
import { FaUserShield, FaUsers } from "react-icons/fa"; // Admin Icons
import { MdDashboard, MdManageAccounts } from "react-icons/md"; // Dashboard and Management Icons
import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai"; // Expand/Collapse Icons
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar({ sidebarActive }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (parent) => {
    setExpanded((prev) => ({ ...prev, [parent]: !prev[parent] }));
  };

  const sidebarItems = [
    {
      label: "Admin",
      icon: <FaUserShield size={25} />,
      children: [
        {
          path: "/Admin",
          label: "All Admin",
          icon: <FaUserShield size={20} />,
        },
        {
          path: "/Users",
          label: "All Users",
          icon: <FaUsers size={20} />,
        },
      ],
    },
    {
      label: "Dashboard",
      icon: <MdDashboard size={25} />,
      path: "/Dashboard",
    },
    {
      label: "Management",
      icon: <MdManageAccounts size={25} />,
      path: "/Management",
    },
  ];

  return (
    <div className={`Sidebar-Main ${sidebarActive ? "active" : ""}`}>
      <ul className='Sidebar-List'>
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <div
              className={`parent-item ${
                location.pathname === item.path ? "activeLink" : ""
              }`}
              onClick={() => {
                if (item.children) toggleExpand(item.label);
                else item.path && navigate(item.path);
              }}
            >
              {item.icon}
              {item.label}
              {item.children && (
                <span className='expand-icon'>
                  {expanded[item.label] ? (
                    <AiOutlineArrowDown />
                  ) : (
                    <AiOutlineArrowRight />
                  )}
                </span>
              )}
            </div>
            {item.children && expanded[item.label] && (
              <ul className='child-list'>
                {item.children.map((child, childIndex) => (
                  <li
                    key={childIndex}
                    className={`child-item ${
                      location.pathname === child.path ? "activeLink" : ""
                    }`}
                    onClick={() => navigate(child.path)}
                  >
                    {child.icon}
                    {child.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
