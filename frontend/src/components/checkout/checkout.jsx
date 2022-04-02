
import Subnavbar from "../Subnavbar/Subnavbar"
import './checkout.css'
import React, { useEffect, useState } from 'react';
function Checkout() {
  const [hotel, setHotel] = useState({})

  useEffect(() => {
      setHotel(JSON.parse(localStorage.getItem("hotel")))
    }, []);

    const {images,title,price,cityName,place,address,type,category} = hotel 

    const [guest, setGuest] = useState({})

    useEffect(() => {
        setGuest(...{JSON.parse(localStorage.getItem("Guestdata"))})
      }, []);
  
      // const {Counter,Datetime,GuestMobile,Guestname} = guest 

       console.log(guest.Counter)
  return (
    


    <div>
      <Subnavbar/>
   <div className='checki'>
           <div className='cheki1'><h1>{title}</h1>
                <h1>{address}</h1>
           </div><hr />
           <div className='cheki1_guest'>
            <h2>{guest.Counter}</h2>
           </div>
           <div className='cheki1_summery'></div>
   </div>
      
 
      </div>


    
  )
}

export default Checkout

