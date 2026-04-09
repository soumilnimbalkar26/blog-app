import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { Logout } from "../../context/Actions";
import { PF } from "../../config";
import { motion } from "framer-motion";
import "./topbar.css";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
  { label: "WRITE", path: "/write" },
];

const NavItem = ({ label, path, onClick }) => (
  <motion.li whileHover={{ scale: 1.2 }} className="topListItem" onClick={onClick}>
    {path ? (
      <Link className="link" to={path}>
        {label}
      </Link>
    ) : (
      label
    )}
  </motion.li>
);

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <nav className="top">
      <div className="topLeft"></div>

      <div className="topCenter">
        <ul className="topList">
          {navItems.map((item) => (
            <NavItem key={item.label} label={item.label} path={item.path} />
          ))}
          {user && <NavItem label="LOGOUT" onClick={handleLogout} />}
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topImg"
              src={PF + user.profilePic}
              alt={`${user.username}'s profile`}
            />
          </Link>
        ) : (
          <ul className="topList">
            <NavItem label="LOGIN" path="/login" />
            <NavItem label="REGISTER" path="/register" />
          </ul>
        )}
      </div>
    </nav>
  );
}
