import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { motion } from "framer-motion";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <motion.i
          whileHover={{ scale: 1.2 }}
          className="topIcon fab fa-facebook-square"
        ></motion.i>
        <motion.i
          whileHover={{ scale: 1.2 }}
          className="topIcon fab fa-twitter-square"
        ></motion.i>
        <motion.i
          whileHover={{ scale: 1.2 }}
          className="topIcon fab fa-pinterest-square"
        ></motion.i>
        <motion.i
          whileHover={{ scale: 1.2 }}
          className="topIcon fab fa-instagram-square"
        ></motion.i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <motion.li whileHover={{ scale: 1.2 }} className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            className="topListItem"
            onClick={handleLogout}
          >
            {user && "LOGOUT"}
          </motion.li>
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <motion.li whileHover={{ scale: 1.2 }} className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </motion.li>
          </ul>
        )}
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}
