// // components/Auth/Login.js
// import React, { useState, useEffect } from "react";
// import { auth } from "../../firebase";
// import { useNavigate } from "react-router-dom";
// import { MdEmail } from "react-icons/md";
// import { FaLock } from "react-icons/fa";
// import "../../styles/Form.css";
// import { Link } from "react-router-dom";

// export const Login = ({ user, setUser }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [remember, setRemember] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedEmail = localStorage.getItem("email");
//     if (savedEmail) {
//       setEmail(savedEmail);
//       setRemember(true);
//     }
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//       if (remember) {
//         localStorage.setItem("email", email);
//       } else {
//         localStorage.removeItem("email");
//       }
//       setUser(email);
//       navigate("/predict");
//     } catch (error) {
//       console.log(error);
//       alert(error.message);
//     }
//   };

//   const handleForgotPassword = async () => {
//     if (!email) {
//       alert("Please enter your email address to reset your password.");
//       return;
//     }
//     try {
//       await auth.sendPasswordResetEmail(email);
//       alert("Password reset email sent!");
//     } catch (error) {
//       console.log(error);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="wrapper">
//       <form onSubmit={handleLogin}>
//         <h1>Login</h1>
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
//         <div className="remember-forgot">
//           <label>
//             <input
//               type="checkbox"
//               checked={remember}
//               onChange={(e) => setRemember(e.target.checked)}
//             />
//             Remember Password
//           </label>
//           <a href="#" onClick={handleForgotPassword}>
//             Forgot Password
//           </a>
//         </div>
//         <button type="submit">Login</button>
//         <div className="register-link">
//           <p>
//             Don't have an account? <Link to="/register">Register</Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// components/Auth/Login.js
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import "../../styles/Form.css";
import { Link } from "react-router-dom";

export const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
      setRemember(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      if (remember) {
        localStorage.setItem("email", email);
      } else {
        localStorage.removeItem("email");
      }
      setUser(email);
      navigate("/predict");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email address to reset your password.");
      return;
    }
    try {
      await auth.sendPasswordResetEmail(email);
      alert("Password reset email sent!");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
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
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember Password
          </label>
          <button
            type="button"
            className="forgot-password-button"
            onClick={handleForgotPassword}
          >
            Forgot Password
          </button>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
