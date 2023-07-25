import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CodeIcon from "@material-ui/icons/Code";
import NightsStay from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const Layout = () => {
  const [mode, setMode] = useState(false);
  return (
    <div>
      <div className="header">
        <a>
          <CodeIcon />
        </a>
        {!mode ? (
          <a onClick={() => setMode(!mode)}>
            <NightsStay />
          </a>
        ) : (
          <a onClick={() => setMode(!mode)}>
            <WbSunnyIcon />
          </a>
        )}
      </div>
      <div>
        <Outlet />
      </div>
      <ToastContainer position="top-right" autoClose={1500} limit={10} style={{ zIndex: "20000" }} />
    </div>
  );
};
export default Layout;
