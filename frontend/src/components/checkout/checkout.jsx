
import Subnavbar from "../Subnavbar/Subnavbar"
import './checkout.css'
import React, { useEffect, useState } from 'react';
function Checkout() {
  const [hotel, setHotel] = useState({})
  const [guest, setGuest] = useState({})

  useEffect(() => {
      setHotel(JSON.parse(localStorage.getItem("hotel")))
      setGuest(JSON.parse(localStorage.getItem("guestdata")))
    }, []);

    const {images,title,price,cityName,place,address,type,category} = hotel 

    const {Counter,Datetime,GuestMobile,Guestname} = guest

      //  console.log(guest)
  return (
    


    <div>
      <Subnavbar/>
   <div className='checki'>
           <div className='cheki1'><h1>{title}</h1>
                <h1>{address}</h1>
           </div><hr />
           <div className='cheki1_guest'>
            <h2>{Guestname}</h2>
            <h2>{GuestMobile}</h2>
           </div>
           <hr />
           <div className='cheki1_summery'>
      <h2>{Datetime}</h2>
      <h2>{Counter}</h2>
      <h2>{Guestname}</h2>
        <h3>D015247509</h3>

           </div>
   </div>
      
 
      </div>


    
  )
}

export default Checkout

