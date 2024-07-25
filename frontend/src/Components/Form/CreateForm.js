import React, { useState } from "react";
import { auth } from "../../firebase";
import "../../styles/Form.css";

export const CreateForm = () => {
  const [formData, setFormData] = useState({
    gender: "Male",
    age: "",
    hypertension: false,
    heart_disease: false,
    smoking_history: "never",
    bmi: "",
    HbA1c_level: "",
    blood_glucose_level: "",
  });
  const [prediction, setPrediction] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const onChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Data sent to FastAPI:", formData);
      const userRef = auth.currentUser;
      const API_URL = "https://<your-railway-app-name>.up.railway.app";
      const response = await fetch(`${API_URL}/predict`, {
        // const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          user_id: userRef.uid,
          age: parseFloat(formData.age),
          bmi: parseFloat(formData.bmi),
          HbA1c_level: parseFloat(formData.HbA1c_level),
          blood_glucose_level: parseFloat(formData.blood_glucose_level),
        }),
      });

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        setPrediction(result);
        setShowPopup(true);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      setError(
        "An error occurred while making the prediction. Please try again."
      );
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="wrapper">
      <form onSubmit={onSubmitHandler}>
        <h1>Diabetes Risk Assessment</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="input-box">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={onChangeHandler}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="input-box">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="check-box">
          <label>Hypertension</label>
          <input
            type="checkbox"
            name="hypertension"
            checked={formData.hypertension}
            onChange={onChangeHandler}
          />
        </div>
        <div className="check-box">
          <label>Heart Disease</label>
          <input
            type="checkbox"
            name="heart_disease"
            checked={formData.heart_disease}
            onChange={onChangeHandler}
          />
        </div>
        <div className="input-box">
          <label>Smoking History</label>
          <select
            name="smoking_history"
            value={formData.smoking_history}
            onChange={onChangeHandler}
          >
            <option value="never">Never</option>
            <option value="former">Former</option>
            <option value="current">Current</option>
            <option value="ever">Ever</option>
            <option value="not current">Not Current</option>
          </select>
        </div>
        <div className="input-box">
          <label>BMI</label>
          <input
            type="number"
            name="bmi"
            value={formData.bmi}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="input-box">
          <label>HbA1c Level</label>
          <input
            type="number"
            name="HbA1c_level"
            value={formData.HbA1c_level}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="input-box">
          <label>Blood Glucose Level</label>
          <input
            type="number"
            name="blood_glucose_level"
            value={formData.blood_glucose_level}
            onChange={onChangeHandler}
            required
          />
        </div>
        <button type="submit">Predict</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Prediction Result</h2>
            <p>
              {prediction.diabetes_prediction
                ? `High risk of diabetes. ${prediction.confidence} confidence. Please consult a doctor.`
                : `Low risk of diabetes. ${prediction.confidence} confidence.`}
            </p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
