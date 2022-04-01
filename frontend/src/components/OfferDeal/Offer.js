import React, { useState } from 'react'
import Calendar1 from './Calender';
import { Counter } from './Counter';
import './Offer.css'

 

const Offer = () => {
    const[datetime,setdatetime] = useState("");
    const[guestname,setguestname] = useState("");
    const[guestmobile,setguestmobile] = useState("");
    const[counter,setcounter] = useState("");
    const saveGuestdata = () =>{

       var Guestdata = []
       var guestdata = {
           Datetime:datetime,
           Guestname:guestname,
           GuestMobile:guestmobile,
           Counter:counter
       }
       Guestdata.push(guestdata)
       localStorage.setItem("Guestdata",JSON.stringify(Guestdata))
    }

    const getvalue = (v) =>{
        setdatetime(v)
    }

    const getcounter = (c) =>{
        setcounter(c)
    }

   return(
       <>
        <div className='blank'></div>
           {/* <div className='home'>
               <div className='blank'></div>
               <p>
               In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is
               In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is
               In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is
               </p>
           </div> */}
           <div className='Offer_deal'>
               <div className='Select_offer'>Select an a Offer or Deal</div>
           <Calendar1 getvalue = {getvalue} />
           <div className='Detail'>
           <label>Enter Guest Details</label>
           <br/>
           <input type="text" placeholder='Enter Your Name' className='detail_name' value={guestname} onChange={(e) =>{setguestname(e.target.value)}}></input>
           <br/>
           <input type="text" placeholder='Enter Your Number' className='detail_mobile' value={guestmobile} onChange={(e) => {setguestmobile(e.target.value)}}></input>
           <br/>
           <label className='detail_lable'>Select Guest/s</label>
           <p>Choose the number of guests going</p>
           <br/>
           <Counter getcounter={getcounter}/>
           <button className='confirm_btn' onClick={saveGuestdata}>Continue</button>
           </div>
           </div>
       </>
   )
}

export default Offer;