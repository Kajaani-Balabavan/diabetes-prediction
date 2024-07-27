import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import "../../styles/DisplayData.css";

export const DisplayData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userRef = auth.currentUser;
      if (userRef) {
        const dataRef = db
          .collection("predictions")
          .where("user_id", "==", userRef.uid)
          .orderBy("timestamp", "desc"); // Sort by timestamp in descending order
        const snapshot = await dataRef.get();
        const userData = snapshot.docs.map((doc) => doc.data());
        setData(userData);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="data-wrapper">
      <h1>Medical History</h1>
      <table>
        <thead>
          <tr>
            <th>Gender</th>
            <th>Age</th>
            <th>Hypertension</th>
            <th>Heart Disease</th>
            <th>Smoking History</th>
            <th>BMI</th>
            <th>HbA1c Level</th>
            <th>Blood Glucose Level</th>
            <th>Prediction</th>
            <th>Probability of Diabetes</th> {/* New column */}
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.gender}</td>
              <td>{item.age}</td>
              <td>{item.hypertension ? "Yes" : "No"}</td>
              <td>{item.heart_disease ? "Yes" : "No"}</td>
              <td>{item.smoking_history}</td>
              <td>{item.bmi}</td>
              <td>{item.HbA1c_level}</td>
              <td>{item.blood_glucose_level}</td>
              <td>
                {item.diabetes_prediction === 1 ? "Positive" : "Negative"}
              </td>
              <td>{item.probability_of_diabetes} %</td> {/* Display probability */}
              <td>
                {new Date(item.timestamp.seconds * 1000).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
