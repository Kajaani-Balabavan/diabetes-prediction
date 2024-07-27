// // components/Auth/Register.js
// import React, { useState } from "react";
// import { auth } from "../../firebase";
// import { useNavigate } from "react-router-dom";
// import { MdEmail } from "react-icons/md";
// import { FaLock } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import "../../styles/Form.css";

// export const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userName, setUserName] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await auth.createUserWithEmailAndPassword(email, password);
//       alert("User registered successfully. Please login to continue.");
//       navigate("/login");
//     } catch (error) {
//       console.log(error);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="wrapper">
//       <form onSubmit={handleRegister}>
//         <h1>Register</h1>
//         <div className="input-box">
//           <input
//             type="text"
//             placeholder="UserName"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             required
//           />
//           <FaUser className="icon" />
//         </div>
//         <div className="input-box">
//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <MdEmail className="icon" />
//         </div>
//         <div className="input-box">
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <FaLock className="icon" />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

import React, { useState } from "react";
import { auth, db } from "../../firebase"; // Import db for Firestore
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "../../styles/Form.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(""); // New state for DOB
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;

      // Save additional user details to Firestore
      await db.collection("users").doc(user.uid).set({
        userName,
        gender,
        dob, // Save DOB
      });

      alert("User registered successfully. Please login to continue.");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <div className="input-box">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            placeholder="UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <MdEmail className="icon" />
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="input-box">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="input-box">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
