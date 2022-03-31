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
  var count = 0
// const clickMe = () => {
//   if(count ==0){
//     let brand = "chinese"
//     let response = axios.get(`http://localhost:5500/products/filter?type=${brand}`);
//     let data =  response.json();
//     console.log("yeee",data)
//     count++

//   }else{
//     count --
//     return
//   }
// }
  
  return (
    <>
        <Navbar/>
        <div className='main_Booktable'>
          <div className='sideBar'>
              <form>
                  <h3>Quick Filters</h3>
                  <input type="search" placeholder='Search'></input><br/><br/>
                  <input type="checkbox"></input><span>Dineout Pay</span><br/><br/>
                  <input type="checkbox"></input><span>Pure Veg</span><br/><br/>
                  <Link to="/Star"><input type="checkbox"></input></Link>5 Star<br/><br/>
                  <input type="checkbox"></input><span>Buffet</span><br/><br/>
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