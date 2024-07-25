# # from fastapi import FastAPI
# # from pydantic import BaseModel
# # import numpy as np
# # from sklearn.preprocessing import LabelEncoder, StandardScaler, OneHotEncoder
# # import tensorflow as tf
# # import joblib
# # from fastapi.middleware.cors import CORSMiddleware

# # # Load the model and the scaler
# # model = tf.keras.models.load_model('diabetes_model.h5')
# # scaler = joblib.load('scaler.pkl')
# # gender_encoder = LabelEncoder()
# # gender_encoder.fit(['Female', 'Male', 'Other'])
# # smoking_history_encoder = LabelEncoder()
# # smoking_history_encoder.fit(['No Info', 'never', 'former', 'current', 'not current', 'ever'])

# # # Initialize FastAPI app
# # app = FastAPI()

# # # Configure CORS
# # origins = [
# #     "http://localhost:3000",  # React app's URL
# # ]

# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=origins,
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# # # Define the input data model
# # class DiabetesInput(BaseModel):
# #     gender: str
# #     age: float
# #     hypertension: bool
# #     heart_disease: bool
# #     smoking_history: str
# #     bmi: float
# #     HbA1c_level: float
# #     blood_glucose_level: float

# # # Define the prediction endpoint
# # @app.post('/predict')
# # def predict_diabetes(input_data: DiabetesInput):
# #     # Print the received data
# #     print("Received data:", input_data.dict())  # Added line to print data
# #     features = np.array([
# #         gender_encoder.transform([input_data.gender])[0],
# #         input_data.age,
# #         int(input_data.hypertension),
# #         int(input_data.heart_disease),
# #         smoking_history_encoder.transform([input_data.smoking_history])[0],
# #         input_data.bmi,
# #         input_data.HbA1c_level,  # Fixed field name
# #         input_data.blood_glucose_level  # Fixed field name
# #     ])
# #     features = features.reshape(1, -1)
# #     features = scaler.transform(features)
    
# #     # Make prediction
# #     probability = model.predict(features)[0][0]
# #     prediction=probability
# #     # prediction = int(probability > 0.5)
# #     confidence = probability if prediction == 1 else 1 - probability
# #     confidence_percent = confidence * 100
    
# #     result = {
# #         'diabetes_prediction': prediction,
# #         'confidence': f"{confidence_percent:.2f}%"
# #     }
    
# #     return result

# # # Run the app
# # if __name__ == '__main__':
# #     import uvicorn
# #     uvicorn.run(app, host='0.0.0.0', port=8000)

# # # from fastapi import FastAPI
# # # from pydantic import BaseModel
# # # import numpy as np
# # # from sklearn.preprocessing import LabelEncoder, StandardScaler
# # # import tensorflow as tf
# # # import joblib
# # # from fastapi.middleware.cors import CORSMiddleware

# # # # Load the model and the scaler
# # # model = tf.keras.models.load_model('diabetes_model.h5')
# # # scaler = joblib.load('scaler.pkl')
# # # gender_encoder = LabelEncoder()
# # # gender_encoder.fit(['Female', 'Male', 'Other'])
# # # smoking_history_encoder = LabelEncoder()
# # # smoking_history_encoder.fit(['No Info', 'never', 'former', 'current', 'not current', 'ever'])

# # # # Initialize FastAPI app
# # # app = FastAPI()

# # # # Configure CORS
# # # origins = [
# # #     "http://localhost:3000",  # React app's URL
# # # ]

# # # app.add_middleware(
# # #     CORSMiddleware,
# # #     allow_origins=origins,
# # #     allow_credentials=True,
# # #     allow_methods=["*"],
# # #     allow_headers=["*"],
# # # )

# # # # In-memory store for form data and predictions
# # # form_data_store = []

# # # # Define the input data model
# # # class DiabetesInput(BaseModel):
# # #     gender: str
# # #     age: float
# # #     hypertension: bool
# # #     heart_disease: bool
# # #     smoking_history: str
# # #     bmi: float
# # #     HbA1c_level: float
# # #     blood_glucose_level: float

# # # # Define the prediction endpoint
# # # @app.post('/predict')
# # # def predict_diabetes(input_data: DiabetesInput):
# # #     features = np.array([
# # #         gender_encoder.transform([input_data.gender])[0],
# # #         input_data.age,
# # #         int(input_data.hypertension),
# # #         int(input_data.heart_disease),
# # #         smoking_history_encoder.transform([input_data.smoking_history])[0],
# # #         input_data.bmi,
# # #         input_data.HbA1c_level,
# # #         input_data.blood_glucose_level
# # #     ])
# # #     features = features.reshape(1, -1)
# # #     features = scaler.transform(features)
    
# # #     # Make prediction
# # #     probability = model.predict(features)[0][0]
# # #     prediction = probability
# # #     confidence = probability if prediction == 1 else 1 - probability
# # #     confidence_percent = confidence * 100
    
# # #     result = {
# # #         'gender': input_data.gender,
# # #         'age': input_data.age,
# # #         'hypertension': input_data.hypertension,
# # #         'heart_disease': input_data.heart_disease,
# # #         'smoking_history': input_data.smoking_history,
# # #         'bmi': input_data.bmi,
# # #         'HbA1c_level': input_data.HbA1c_level,
# # #         'blood_glucose_level': input_data.blood_glucose_level,
# # #         'diabetes_prediction': prediction,
# # #         'confidence': f"{confidence_percent:.2f}%"
# # #     }
    
# # #     form_data_store.append(result)
    
# # #     return result

# # # # Define the endpoint to get all stored form data
# # # @app.get('/formdata')
# # # def get_form_data():
# # #     return form_data_store

# # # # Run the app
# # # if __name__ == '__main__':
# # #     import uvicorn
# # #     uvicorn.run(app, host='0.0.0.0', port=8000)

# # ############################################################################################################

# # from fastapi import FastAPI
# # from pydantic import BaseModel
# # import numpy as np
# # from sklearn.preprocessing import LabelEncoder, StandardScaler
# # import tensorflow as tf
# # import joblib
# # from fastapi.middleware.cors import CORSMiddleware

# # # Load the model and the scaler
# # model = tf.keras.models.load_model('diabetes_model.h5')
# # scaler = joblib.load('scaler.pkl')
# # gender_encoder = LabelEncoder()
# # gender_encoder.fit(['Female', 'Male', 'Other'])
# # smoking_history_encoder = LabelEncoder()
# # smoking_history_encoder.fit(['No Info', 'never', 'former', 'current', 'not current', 'ever'])

# # # Initialize FastAPI app
# # app = FastAPI()

# # # Configure CORS
# # origins = [
# #     "http://localhost:3000",  # React app's URL
# # ]

# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=origins,
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# # # Store form data and prediction results
# # form_data_store = []

# # # Define the input data model
# # class DiabetesInput(BaseModel):
# #     gender: str
# #     age: float
# #     hypertension: bool
# #     heart_disease: bool
# #     smoking_history: str
# #     bmi: float
# #     HbA1c_level: float
# #     blood_glucose_level: float

# # # Define the prediction endpoint
# # @app.post('/predict')
# # def predict_diabetes(input_data: DiabetesInput):
# #     features = np.array([
# #         gender_encoder.transform([input_data.gender])[0],
# #         input_data.age,
# #         int(input_data.hypertension),
# #         int(input_data.heart_disease),
# #         smoking_history_encoder.transform([input_data.smoking_history])[0],
# #         input_data.bmi,
# #         input_data.HbA1c_level,  # Fixed field name
# #         input_data.blood_glucose_level  # Fixed field name
# #     ])
# #     features = features.reshape(1, -1)
# #     features = scaler.transform(features)
    
# #     # Make prediction
# #     probability = model.predict(features)[0][0]
# #     prediction = float(probability)
# #     confidence = float(probability) if prediction > 0.5 else float(1 - probability)
# #     confidence_percent = confidence * 100
    
# #     result = {
# #         'diabetes_prediction': int(prediction > 0.5),
# #         'confidence': f"{confidence_percent:.2f}%"
# #     }
    
# #     # Store the input data and result
# #     form_data_store.append({**input_data.dict(), **result})
    
# #     return result

# # # Define the endpoint to get stored form data
# # @app.get('/formdata')
# # def get_form_data():
# #     return form_data_store

# # # Run the app
# # if __name__ == '__main__':
# #     import uvicorn
# #     uvicorn.run(app, host='0.0.0.0', port=8000)


# from fastapi import FastAPI, HTTPException, Depends
# from pydantic import BaseModel
# import numpy as np
# from sklearn.preprocessing import LabelEncoder, StandardScaler
# import tensorflow as tf
# import joblib
# from fastapi.middleware.cors import CORSMiddleware
# import firebase_admin
# from firebase_admin import credentials, firestore
# from datetime import datetime

# # Firebase initialization
# cred = credentials.Certificate(r"C:\Users\DELL\Downloads\diabetes-predictor-76178-firebase-adminsdk-kxm2g-c1ccb840b3.json")
# firebase_admin.initialize_app(cred)
# db = firestore.client()

# # Load the model and the scaler
# model = tf.keras.models.load_model('diabetes_model.h5')
# scaler = joblib.load('scaler.pkl')
# gender_encoder = LabelEncoder()
# gender_encoder.fit(['Female', 'Male', 'Other'])
# smoking_history_encoder = LabelEncoder()
# smoking_history_encoder.fit(['No Info', 'never', 'former', 'current', 'not current', 'ever'])

# # Initialize FastAPI app
# app = FastAPI()

# # Configure CORS
# origins = [
#     "http://localhost:3000", # React app's URL
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Define the input data model
# class DiabetesInput(BaseModel):
#     user_id: str
#     gender: str
#     age: float
#     hypertension: bool
#     heart_disease: bool
#     smoking_history: str
#     bmi: float
#     HbA1c_level: float
#     blood_glucose_level: float

# # Define the prediction endpoint
# @app.post('/predict')
# def predict_diabetes(input_data: DiabetesInput):
#     features = np.array([
#         gender_encoder.transform([input_data.gender])[0],
#         input_data.age,
#         int(input_data.hypertension),
#         int(input_data.heart_disease),
#         smoking_history_encoder.transform([input_data.smoking_history])[0],
#         input_data.bmi,
#         input_data.HbA1c_level,
#         input_data.blood_glucose_level
#     ])
#     features = features.reshape(1, -1)
#     features = scaler.transform(features)
    
#     # Make prediction
#     probability = model.predict(features)[0][0]
#     prediction = float(probability)
#     confidence = float(probability) if prediction > 0.5 else float(1 - probability)
#     confidence_percent = confidence * 100
    
#     result = {
#         'diabetes_prediction': int(prediction > 0.5),
#         'confidence': f"{confidence_percent:.2f}%"
#     }
    
#     # Store the input data and result in Firestore
#     data_to_save = {
#         'user_id': input_data.user_id,
#         'gender': input_data.gender,
#         'age': input_data.age,
#         'hypertension': input_data.hypertension,
#         'heart_disease': input_data.heart_disease,
#         'smoking_history': input_data.smoking_history,
#         'bmi': input_data.bmi,
#         'HbA1c_level': input_data.HbA1c_level,
#         'blood_glucose_level': input_data.blood_glucose_level,
#         'diabetes_prediction': result['diabetes_prediction'],
#         'confidence': result['confidence'],
#         'timestamp': datetime.utcnow()
#     }
    
#     db.collection('predictions').add(data_to_save)
    
#     return result

# # Define the endpoint to get stored form data for a specific user
# @app.get('/formdata/{user_id}')
# def get_form_data(user_id: str):
#     docs = db.collection('predictions').where('user_id', '==', user_id).stream()
#     form_data = [doc.to_dict() for doc in docs]
#     if not form_data:
#         raise HTTPException(status_code=404, detail="Data not found for this user")
#     return form_data

# # Run the app
# if __name__ == '__main__':
#     import uvicorn
#     uvicorn.run(app, host='0.0.0.0', port=8000)

import os
import json
from fastapi import FastAPI, HTTPException,Response
from pydantic import BaseModel
import numpy as np
import pandas as pd
import joblib
from fastapi.middleware.cors import CORSMiddleware
import firebase_admin
from firebase_admin import credentials, firestore
from datetime import datetime

firebase_cred_json = os.getenv('FIREBASE_CREDENTIALS_JSON')
if firebase_cred_json:
    cred_dict = json.loads(firebase_cred_json)
    cred = credentials.Certificate(cred_dict)
else:
    raise ValueError("Firebase credentials not set in environment variables")

# Firebase initialization
# cred = credentials.Certificate(r"C:\Users\DELL\Downloads\diabetes-predictor-76178-firebase-adminsdk-kxm2g-c1ccb840b3.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# Load the RandomForest model and the one-hot column names
model = joblib.load('diabetes_model.joblib')
one_hot_columns = joblib.load('one_hot_columns.pkl')

# Initialize FastAPI app
app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:3000", # Local React app's URL
    # "https://Kajaani-Balabavan.github.io/diabetes-prediction" #Github page React app's URL
    "https://kajaani-balabavan.github.io" #Github page React app's URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# Define the input data model
class DiabetesInput(BaseModel):
    user_id: str
    gender: str
    age: float
    hypertension: bool
    heart_disease: bool
    smoking_history: str
    bmi: float
    HbA1c_level: float
    blood_glucose_level: float
# Define the root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the Diabetes Prediction API"}

@app.options('/predict')
async def options_handler():
    return Response(
        status_code=204,
        headers={
            'Access-Control-Allow-Origin': 'https://Kajaani-Balabavan.github.io/diabetes-prediction',  # Your specific origin
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
    )

# Define the prediction endpoint
@app.post('/predict')
def predict_diabetes(input_data: DiabetesInput):
    # Create DataFrame from input data
    input_df = pd.DataFrame([{
        'gender': input_data.gender,
        'age': input_data.age,
        'hypertension': int(input_data.hypertension),
        'heart_disease': int(input_data.heart_disease),
        'smoking_history': input_data.smoking_history,
        'bmi': input_data.bmi,
        'HbA1c_level': input_data.HbA1c_level,
        'blood_glucose_level': input_data.blood_glucose_level
    }], columns=['gender', 'age', 'hypertension', 'heart_disease', 'smoking_history', 'bmi', 'HbA1c_level', 'blood_glucose_level'])
    
    # One-hot encode categorical features
    input_df_encoded = pd.get_dummies(input_df, columns=['gender', 'smoking_history'])
    
    # Ensure that the DataFrame has all the columns from the training set
    input_df_encoded = input_df_encoded.reindex(columns=one_hot_columns, fill_value=0)
    
    # Extract features
    features = input_df_encoded.values
    
    # Make prediction
    prediction = model.predict(features)[0]
    probability = model.predict_proba(features)[0][1]  # Probability of positive class
    confidence = float(probability) if prediction == 1 else float(1 - probability)
    confidence_percent = confidence * 100
    
    result = {
        'diabetes_prediction': int(prediction),
        'confidence': f"{confidence_percent:.2f}%"
    }
    
    # Store the input data and result in Firestore
    data_to_save = {
        'user_id': input_data.user_id,
        'gender': input_data.gender,
        'age': input_data.age,
        'hypertension': input_data.hypertension,
        'heart_disease': input_data.heart_disease,
        'smoking_history': input_data.smoking_history,
        'bmi': input_data.bmi,
        'HbA1c_level': input_data.HbA1c_level,
        'blood_glucose_level': input_data.blood_glucose_level,
        'diabetes_prediction': result['diabetes_prediction'],
        'confidence': result['confidence'],
        'timestamp': datetime.utcnow()
    }
    
    db.collection('predictions').add(data_to_save)
    
    return result

# Define the endpoint to get stored form data for a specific user
@app.get('/formdata/{user_id}')
def get_form_data(user_id: str):
    docs = db.collection('predictions').where('user_id', '==', user_id).stream()
    form_data = [doc.to_dict() for doc in docs]
    if not form_data:
        raise HTTPException(status_code=404, detail="Data not found for this user")
    return form_data

# Run the app
if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8000)