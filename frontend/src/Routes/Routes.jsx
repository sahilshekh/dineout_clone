import { Routes, Route } from "react-router";
import Dineout from "../components/category/dineoutPay";
import Pureveg from "../components/category/pureVeg";
import Booktable from "../components/Booktable/Booktables";
import Home from "../components/Home/Home";
import Star from "../components/category/5star";
import Buffet from "../components/category/buffet";

export const AllRoutes = () => {
  return (
    <>
      
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/Booktable" element={<Booktable />} />
        <Route exact path="/Dineout"  element={<Dineout/>} />
        <Route exact path="/PureVeg"  element={<Pureveg/>} />
        <Route exact path="/Star"  element={<Star/>} />
        <Route exact path="/Buffet"  element={<Buffet/>} />
      </Routes>
    </>
  );
};
