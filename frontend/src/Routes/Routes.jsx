import { Routes, Route } from "react-router";

import Booktable from "../components/Booktable/Booktables";
import Home from "../components/Home/Home";
import Hotel from "../components/SingleHotel/Hotel";
import Dineoutpassport from '../components/Dineout-Passport/Dineoutpassport'


export const AllRoutes = () => {
  return (
    <>
      
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/Booktable" element={<Booktable />} />
        <Route exact path="/Booktable/:name" element={<Hotel/>} />
        <Route exact path="/Dineoutpassport" element={<Dineoutpassport/>} />
      </Routes>
    </>
  );
};
