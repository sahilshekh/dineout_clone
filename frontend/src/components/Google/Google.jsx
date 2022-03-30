// import React from "react";
// import GoogleLogin from "react-google-login";
// import { useState } from "react";
// const Google = () => {
//   const [loginData, setLoginData] = useState(
//     localStorage.getItem("loginData")
//       ? JSON.parse(localStorage.getItem("loginData"))
//       : null
//   );

//   const handleFailure = (result) => {
//     alert(result);
//   };
//   const handleLogin = async (googleData) => {
//     const res = await fetch("/api/google", {
//       method: "POST",
//       body: JSON.stringify({
//         token: googleData.tokenId,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         console.log(res);
//         const data = res.json();
//         setLoginData(data);
//         localStorage.setItem("LoginData", JSON.stringify(data));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   //   const handleLogout = () => {
//   //     localstorage.setItem("LoginData");
//   //     setLoginData(nul1);
//   //   };

//   return (
//     <div>
//       {loginData ? (
//         <div>
//           <h3>You logged in as {loginData.email}</h3>
//           <button>Logout</button>
//         </div>
//       ) : (
//         <GoogleLogin
//           clientId="399261979111-3pdi6gcbl2e6uega4gd5tajvvm69q15f.apps.googleusercontent.com"
//           buttonText="Log in with Google"
//           onSuccess={handleLogin}
//           onFailure={handleFailure}
//           cookiePolicy={"single_host_origin"}
//         ></GoogleLogin>
//       )}
//     </div>
//   );
// };

// export default Google;










// // // -------backen--

// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// const users = [];

// function upsert(array, item) {
//     const i = array.findIndex((_item) => _item.email == item.email);
//     if (i > -1) array[i] = item;
//     else array.push(item);
// }

// app.post('/api/google-login', async (req, res) => {
//     const { token } = req.body;
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: process.env.GOOGLE_CLIENT_ID,
//     });
//     const { name, email, picture } = ticket.getPayload();
//     upsert(users, { name, email, picture });
//     res.status(201);
//     res.json({ name, email, picture });
// });
