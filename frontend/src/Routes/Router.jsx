import { Routes, Route } from "react-router";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
function Router() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Router;
