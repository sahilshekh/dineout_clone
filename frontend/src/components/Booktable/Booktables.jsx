import React from 'react'
import  './Booktable.css'
import Navbar from '../Navbar/Navbar'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Booktable() {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    axios.get("http://localhost:5500/products").then((res) => {
      console.log(res.data);
      setProducts([...res.data]);
    });
  }, []);



  
  return (
    <>
        <Navbar/>
        <div className='main_Booktable'>
          <div className='sideBar'>
              <form>
                  <h3>Quick Filters</h3>
                  <input type="search" placeholder='Search'></input><br/><br/>

                  

                  <Link to="/Dineout"><input type="checkbox"></input></Link>Dineout pay<br/><br/>
                  <Link to="/PureVeg"><input type="checkbox"></input></Link>Pure Veg<br/><br/>
                 <Link to="/Star"><input type="checkbox"></input></Link>5 Star<br/><br/>
                 <Link to="/Buffet"><input type="checkbox"></input></Link>Buffet<br/><br/>

                  <p>Show More (4)</p>

                  <hr/>

                  <h3>Cuisines</h3>
                  <input type="search" placeholder='Search For Cuisine'></input><br/><br/>
                  <Link to="/NorthIndia"><p>North Indian</p></Link><br/><br/>
                  <Link to="/Chinese">Chinese</Link><br/>
                  <Link to="/Fast">Fast Food</Link><br/>
                  <p>Continental</p>
                  <p>Show More (60)</p>

                  <hr/>

                  <h3>Tags</h3>
              </form>




          </div>
          <div className='dataDiv'>
              <div className="hotelData">
                {products
                  .map((el) => {
                    return (
                      <div className="near-res-container" key={el._id}>
                        <img src={el.images} alt="Restaurant" />
                        {/* <div className="near-res-details"> */}
                          <h3>{el.title}</h3>
                          <p>{el.address + ", " + el.place}</p>
                          <p>{el.price + ", " + el.type}</p>

                        {/* </div> */}
                      </div>
                    );
                  })}
                  
              </div>
          </div>
        </div>
    </>
  )
}

export default Booktable