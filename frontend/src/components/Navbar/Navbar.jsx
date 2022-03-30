import React from "react";
import { Login } from "../Register/Login";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { userLogin } from "../../Redux/Login/action";
import "./Navbar.css";
const Navbar = () => {
  const [model, setModel] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((store) => store.login.token);
  const [userToken, setUserToken] = useState(token);

  const localStorageToken = localStorage.getItem("token");
  dispatch(userLogin(localStorageToken));

  const handleProfilePage = () => {
    document.getElementById("signsub").style.display = "block";
  };

  const handleLogout = () => {
    dispatch(userLogin({}));
    localStorage.setItem("token", "");
    window.location.reload();
  };

  return (
    <>
      <div className="container">
        <div className="navbar-main">
          <div className="logo">
            <a href="">
              <img
                src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="select">
            <select name="city" id="city-select">
              <option value="volvo">Indore</option>
              <option value="saab">Mumbai</option>
              <option value="mercedes">Delhi</option>
              <option value="audi">Banglore</option>
            </select>
          </div>

          <div className="list-items">
            <ul>
              <li>
                <a href="" className="home-btn">
                  Home
                </a>
              </li>
              <li>
                <a href="">Book a Table</a>
              </li>
              <li>
                <a href="">Dineout Pay</a>
              </li>
              <li>
                <a href="">Dineout Passport</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">Super Saver</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div className="btn">
            {!userToken ? (
              <button onClick={() => setModel(true)}>Login</button>
            ) : (
              <div className="profile">
                <p>
                  My Account{" "}
                  <span onClick={handleProfilePage}>
                    {<ArrowDropDownIcon />}
                  </span>
                </p>
                <div id="signsub">
                  <Link to={"/profile"}>
                    <p>Profile</p>
                  </Link>
                  <p>Coupon History</p>
                  <p onClick={handleLogout}>Logout</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {model ? <Login closeModel={setModel} /> : null}
    </>
  );
};

export default Navbar;
