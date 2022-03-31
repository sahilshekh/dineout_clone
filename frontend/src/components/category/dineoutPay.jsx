import React from 'react'
import  '../Booktable/Booktables'
import Navbar from '../Navbar/Navbar'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Dineout() {

  const [dineout, setDinprod]= useState([]);

  useEffect(() => {
    axios.get("http://localhost:5500/dineout").then((res) => {
      console.log(res.data);
      setDinprod([...res.data]);
    });
  }, []);


//   var count = 0
// const clickMe = () => {
//   if(count ==0){

//     console.log("yeee")
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
                  <Link to="/Dineout"><input type="checkbox"></input></Link>Dineout Pay<br/><br/>
                  <Link to="/Dineout"><input type="checkbox"></input></Link>Pure Veg<br/><br/>
                  <Link to="/Dineout"><input type="checkbox"></input></Link>5 Star<br/><br/>
                  <Link to="/Dineout"><input type="checkbox"></input></Link>Buffet<br/><br/>
                  <p>Show More (4)</p>

                  <hr/>

                  <h3>Cuisines</h3>
                  <input type="search" placeholder='Search For Cuisine'></input><br/><br/>
                  <p>North Indian</p>
                  <p>Chinese</p>
                  <p>Fast Food</p>
                  <p>Continental</p>
                  <p>Show More (60)</p>

                  <hr/>

                  <h3>Tags</h3>
              </form>




          </div>
          <div className='dataDiv'>
              <div className="hotelData">
                {dineout
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

export default Dineout