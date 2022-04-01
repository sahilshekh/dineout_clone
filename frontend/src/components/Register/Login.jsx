import styled from "styled-components";
import { Signup } from "./Signup";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../Redux/Login/action";
import { useNavigate } from "react-router-dom";

const Style = styled.div`
  .modelback {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    position: fixed;
    margin-top: -57px;
    padding-top: 40px;
  }
  .modelcont {
    border-radius: 4px;
    box-shadow: 0px 0px 4px grey;
    margin: auto;
    position: fixed;
    padding: 40px;
    padding-top: 15px;
    background-color: white;
    margin-top: -60px;
    width: 36%;
    height: 65%;
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    color: #333333;
    margin: 0;
  }
  .inputBox {
    display: flex;
    flex-direction: column;
    p {
      font-size: 16px;
      color: #333333;
    }
    div {
      height: 40px;
      display: flex;
      align-items: center;
      border: 1px solid gray;
      border: 1px solid #3595ff;
      input {
        width: 100%;
        border: none;
        padding: 5px;
      }
      input:focus {
        outline: none !important;
      }
    }
  }
  .signup_button {
    height: 46px;
    width: 100%;
    border-radius: 4px;
    padding: 12px, 32px, 12px, 32px;
    background: #ff645a;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    line-height: 22px;
    color: white;
    margin-top: 22px;
  }
  .signup_button:hover {
    background: #dc4f4a;
  }
  .lines {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      width: 130px;
      height: 0px;
      background: #333333;
      border: 1px solid #333333;
    }
    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  .oath_links {
    display: flex;
    justify-content: space-between;
    .gmail {
      height: 40px;
      width: 176px;
      border-radius: 4px;
      background: #ffffff;
      border: 1px solid #797979;
      display: flex;
      align-items: center;
      gap: 10px;
      svg {
        margin-left: 10px;
      }
      p {
        font-size: 14px;
        line-height: 16px;
        color: #797979;
      }
    }
    .facebook {
      height: 40px;
      width: 176px;
      border-radius: 4px;
      background: #0b5b8f;
      border: none;
      display: flex;
      align-items: center;
      gap: 10px;
      svg {
        margin-left: 15px;
      }
      p {
        font-size: 14px;
        line-height: 16px;
        color: white;
      }
    }
  }
  .end_line {
    p {
      font-size: 14px;
      line-height: 20px;
      color: #333333;
    }
    span {
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #ff645a;
      cursor: pointer;
    }
  }
  .top_cross {
    position: relative;
    left: 380px;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.03);
  }
`;

export const Login = ({ closeModel }) => {
  const [signup, setSignup] = useState(false);
  const [phone, setPhone] = useState("");

  const handleToogle = () => {
    setSignup(true);
    document.getElementsByClassName("modelback")[0].style.display = "none";
  };

  const token = useSelector((store) => store.login.token);

  const dispatch = useDispatch();

  const handleLogin = () => {
    axios
      .post("http://localhost:5500/login", {
        phone: phone,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        const localStorageToken = localStorage.getItem("token");
        dispatch(userLogin(localStorageToken));
        closeModel(false);
        window.location.reload();
      });
  };
  const localStorageToken = localStorage.getItem("token");
  dispatch(userLogin(localStorageToken));
  return (
    <Style>
      <div className="modelback">
        <div className="modelcont">
          <div className="top_cross" onClick={() => closeModel(false)}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6673 2.27301L9.72732 1.33301L6.00065 5.05967L2.27398 1.33301L1.33398 2.27301L5.06065 5.99967L1.33398 9.72634L2.27398 10.6663L6.00065 6.93967L9.72732 10.6663L10.6673 9.72634L6.94065 5.99967L10.6673 2.27301Z"
                fill="#DCDCDC"
                stroke="#DCDCDC"
              />
            </svg>
          </div>
          <h1>Login</h1>
          <div className="inputBox">
            <p>Phone number</p>
            <div>
              <input
                placeholder="Enter Your Number"
                type="text"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <button className="signup_button" onClick={handleLogin}>
            SEND OTP
          </button>
          <div className="lines">
            <span></span>
            <p>Or login via</p>
            <span></span>
          </div>
          <div className="oath_links">
            <div className="gmail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5367 6.69401H13.9997V6.66634H7.99967V9.33301H11.7673C11.2177 10.8853 9.74067 11.9997 7.99967 11.9997C5.79067 11.9997 3.99967 10.2087 3.99967 7.99967C3.99967 5.79067 5.79067 3.99967 7.99967 3.99967C9.01934 3.99967 9.94701 4.38434 10.6533 5.01267L12.539 3.12701C11.3483 2.01734 9.75567 1.33301 7.99967 1.33301C4.31801 1.33301 1.33301 4.31801 1.33301 7.99967C1.33301 11.6813 4.31801 14.6663 7.99967 14.6663C11.6813 14.6663 14.6663 11.6813 14.6663 7.99967C14.6663 7.55267 14.6203 7.11634 14.5367 6.69401Z"
                  fill="#FFC107"
                />
                <path
                  d="M2.10156 4.89667L4.2919 6.50301C4.88456 5.03567 6.3199 3.99967 7.99956 3.99967C9.01923 3.99967 9.9469 4.38434 10.6532 5.01267L12.5389 3.12701C11.3482 2.01734 9.75556 1.33301 7.99956 1.33301C5.4389 1.33301 3.21823 2.77867 2.10156 4.89667Z"
                  fill="#FF3D00"
                />
                <path
                  d="M8.00043 14.6669C9.72243 14.6669 11.2871 14.0079 12.4701 12.9362L10.4068 11.1902C9.71494 11.7164 8.86958 12.0009 8.00043 12.0002C6.26643 12.0002 4.7941 10.8946 4.23943 9.35156L2.06543 11.0266C3.16876 13.1856 5.40943 14.6669 8.00043 14.6669Z"
                  fill="#4CAF50"
                />
                <path
                  d="M14.537 6.69466H14V6.66699H8V9.33366H11.7677C11.5047 10.0725 11.0311 10.7181 10.4053 11.1907L10.4063 11.19L12.4697 12.936C12.3237 13.0687 14.6667 11.3337 14.6667 8.00033C14.6667 7.55333 14.6207 7.11699 14.537 6.69466Z"
                  fill="#1976D2"
                />
              </svg>
              <p>Gmail</p>
            </div>
            <div className="facebook">
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.47969 5.5998V4.1598C5.47969 3.5358 5.62369 3.1998 6.63169 3.1998H7.87969V0.799805H5.95969C3.55969 0.799805 2.59969 2.3838 2.59969 4.1598V5.5998H0.679688V7.9998H2.59969V15.1998H5.47969V7.9998H7.59169L7.87969 5.5998H5.47969Z"
                  fill="white"
                />
              </svg>
              <p>Facebook</p>
            </div>
          </div>
          <div className="end_line">
            <p>
              Don't have an account?{" "}
              <span onClick={handleToogle}>Create one</span>
            </p>
          </div>
        </div>
      </div>
      {signup ? (
        <Signup closeSignup={setSignup} closeLogin={closeModel} />
      ) : null}
    </Style>
  );
};
