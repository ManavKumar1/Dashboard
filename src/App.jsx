import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./Routes/AppRoutes";

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <>
      <Router>
        <Sidebar sidebarActive={sidebarActive} />
        <Navbar toggleSidebar={toggleSidebar} />
        <div
          className={
            sidebarActive ? "main-content app-with-sidebar" : "main-content app"
          }
        >
          <AppRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
