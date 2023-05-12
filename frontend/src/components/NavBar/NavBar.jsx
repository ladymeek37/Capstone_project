import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link class = "navtext" to="/" style={{ textDecoration: "none" }}>
            <b class = "navtextgnarhealth">GNAR HEALTH</b> <p>Health tips for skateboarders</p>
          </Link>
        </li>
         <li>
          <Link class = "navtext" style={{ textDecoration: "none" }} to = "/about"> About </Link>
         </li>        
        <li>
           <Link class = "navtext" style={{ textDecoration: "none" }} to = "/createpost/"> Create Post </Link>
         </li>
         <li>
          <Link class = "navtext" style={{ textDecoration: "none" }} to = "/favorites/">Favorites</Link>
         </li>         
         <li>
          <Link class = "navtext" style={{ textDecoration: "none" }} to = "/profile/"> Profile</Link>
         </li>
        <li>
          {user ? (
            <button className = 'loginlogout' onClick={logoutUser} style={{ textDecoration: "none" }}>Logout</button>
          ) : (
            <button className = 'loginlogout' onClick={() => navigate("/login")} style={{ textDecoration: "none" }}>Login</button>
          )}
        </li>

      </ul>
    </div>
  );
};

export default Navbar;
