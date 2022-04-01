import { Routes, Route } from "react-router";

// import Dineout from "../components/category/dineoutPay";
// import Pureveg from "../components/category/pureVeg";



// import Buffet from "../components/category/buffet";
import NorthIndia from "../components/category/northIndia";
import Chinese from "../components/category/chinese";
import Fast from "../components/category/fastFood";

import Dineout from "../components/category/dineoutPay";
import Pureveg from "../components/category/pureVeg";
import Booktable from "../components/Booktable/Booktables";
import Home from "../components/Home/Home";
import Star from "../components/category/5star";
import Buffet from "../components/category/buffet";
import Hotel from "../components/SingleHotel/Hotel"
import Dineoutpassport from "../components/Dineout-Passport/Dineoutpassport"


export const AllRoutes = () => {
  return (
    <>
      
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/Booktable" element={<Booktable />} />

        {/* <Route exact path="/Dineout"  element={<Dineout/>} /> */}
        {/* <Route exact path="/PureVeg"  element={<Pureveg/>} /> */}
        <Route exact path="/Star"  element={<Star/>} />
        {/* <Route exact path="/Buffet"  element={<Buffet/>} /> */}
        <Route exact path="/NorthIndia"  element={<NorthIndia/>} />
        <Route exact path="/Chinese"  element={<Chinese/>} />
        <Route exact path="/Fast"  element={<Fast/>} />
        <Route exact path="/Booktable/:name" element={<Hotel/>} />
        <Route exact path="/Dineoutpassport" element={<Dineoutpassport/>} />





        <Route exact path="/Dineout"  element={<Dineout/>} />
        <Route exact path="/PureVeg"  element={<Pureveg/>} />
        <Route exact path="/Star"  element={<Star/>} />
        <Route exact path="/Buffet"  element={<Buffet/>} />

      </Routes>
    </>
  );
};