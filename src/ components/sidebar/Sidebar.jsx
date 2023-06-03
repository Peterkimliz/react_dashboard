import {
  AccountCircle,
  Dashboard,
  Medication,
  Logout,
  Accessible,
  Settings,
  CalendarMonth,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        {" "}
        <Link  to="/" style={{ textDecoration:"none"}}>
        <span className="logo">Digimhealth </span>
        </Link>
        
      </div>
      <hr className="horizontalDivider" />
      <div className="center">
        <ul className="listItems">
          <li>
            {" "}
            <Dashboard className="icon" />
            <span>DashBoard</span>
          </li>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              {" "}
              <Accessible className="icon" />
              <span>Patients </span>
            </li>
          </Link>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              {" "}
              <Medication className="icon" />
              <span>Doctors </span>
            </li>
          </Link>

          <li>
            {" "}
            <CalendarMonth className="icon" />
            <span>Appointments </span>
          </li>
          <li>
            {" "}
            <Settings className="icon" />
            <span>Settings</span>
          </li>

          <li>
            {" "}
            <AccountCircle className="icon" />
            <span>Profile </span>
          </li>
          <li>
            {" "}
            <Logout className="icon" />
            <span>Logout </span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption1"></div>
        <div className="colorOption2"></div>
      </div>
    </div>
  );
}
