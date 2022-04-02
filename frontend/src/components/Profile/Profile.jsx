import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CreateIcon from "@mui/icons-material/Create";
import EmailIcon from "@mui/icons-material/Email";
import "./Profile.css";
import SavingImg from "../Images/saving.png";
const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("auth"));
  // const [user, setUser] = useState(userData);

  return (
    <>
      <Navbar />

      <div className="profile-container">
        <div className="mainprofile">
          <div className="smallcont">
            <div className="profile-img">
              <img
                src={
                  true
                    ? userData.photoURL
                    : "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
                }
                alt="profilepicture"
              />
            </div>
            <div className="profiledetail">
              <p className="name">
                {userData.displayName}
                <span className="create">
                  <CreateIcon style={{ fontSize: "14px" }} />
                </span>
              </p>
              <p>
                <span className="emailicon">
                  <EmailIcon style={{ fontSize: "20px" }} />
                </span>{" "}
                {userData.email}
              </p>
            </div>
            <div className="totaldin">
              <p>Total Dined : 0</p>
            </div>
          </div>
        </div>

        <div className="profiledata-container">
          <div className="profile"></div>
          <div className="savings">
            <img src={SavingImg} alt="imagesprofile" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
