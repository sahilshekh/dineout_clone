import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5500/products").then((res) => {
      console.log(res.data);
      setProducts([...res.data]);
    });
  }, []);

  

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="homepage-container">
        <div className="bestoffer">
          <h2>Best Offers</h2>
          <div className="best-img">
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/25offid.png?tr=tr:n-small"
              alt="10% Offer"
            />
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/30offid.png?tr=tr:n-small"
              alt="20% Offer"
            />
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/20offid.png?tr=tr:n-small"
              alt="10% Offer"
            />

            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/10offid.png?tr=tr:n-small"
              alt="10% Offer"
            />
          </div>
        </div>

        <div className="nearyou">
          <h2>Restaurants Near You</h2>
          <div className="near-res">
            {products
              .filter((_, index) => index % 6 === 0)
              .map((el) => {
                return (
                  <div className="near-res-container" key={el._id}>
                    <img src={el.images} alt="Restaurant" />
                    <div className="near-res-details">
                      <h3>{el.title}</h3>
                      <p>{el.address + ", " + el.place}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* featured */}
        <div className="featured-restaurant">
          <h2>Featured Restaurants</h2>
          <div className="near-res">
            {products
              .filter((_, index) => index % 6 === 1)
              .map((el) => {
                return (
                  <div className="near-res-container" key={el._id}>
                    <img src={el.images} alt="Restaurant" />
                    <div className="near-res-details">
                      <h3>{el.title}</h3>
                      <p>{el.address + ", " + el.place}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* popular */}
        <div className="offer-restaurant">
          <div className="label">
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2020/Sep/9/artboard.png?tr=tr:n-large"
              alt=""
            />
          </div>
          <div className="offer-res">
            {products
              .filter((_, index) => index % 6 === 1)
              .map((el) => {
                return (
                  <div className="offer-res-container" key={el._id}>
                    <img src={el.images} alt="Restaurant" />
                    <div className="offer-res-details">
                      <h3>{el.title}</h3>
                      <p>{el.address + ", " + el.place}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
