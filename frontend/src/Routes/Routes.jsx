import { Routes, Route } from "react-router";
import Dineout from "../components/category/dineoutPay";

import Booktable from "../components/Booktable/Booktables";
import Home from "../components/Home/Home";


export const AllRoutes = () => {
  return (
    <>
      
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/Booktable" element={<Booktable />} />
        <Route exact path="/Dineout"  element={<Dineout/>} />

      </Routes>
    </>
  );
};
