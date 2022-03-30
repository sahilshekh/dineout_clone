import React from "react";
import "./Navbar.css";
const Navbar = () => {
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
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
