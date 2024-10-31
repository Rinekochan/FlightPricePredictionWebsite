# Kamikaze Flight Prediction

Welcome to the Kamikaze Flight Prediction project! This application provides flight price predictions using machine learning models integrated into a React web front end and a FastAPI backend.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
    - [Front-end Setup](#front-end-setup)
    - [Back-end Setup](#back-end-setup)
- [Running Instructions](#running-instructions)
- [AI Model Integration](#ai-model-integration)
- [AI Model Setup (Optional)](#ai-model-setup-optional)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js** (version 14 or above) for the front-end
- **Python** (version 3.8 or above) for the back-end
- **Pip** for installing Python packages

Please check the version of these requirements:
```bash
node -v // For Node.js
python --version // For Python
pip --version // For Pip
```
## Setup Instructions

### Front-end Setup

1. Navigate to the front-end directory:
```bash
cd frontend
```
2. Install the necessary libraries:
```bash
npm install
```
### Back-end Setup
- Necessary Python libraries:
  - `fastapi`
  - `uvicorn`
  - `pandas`
  - `scikit-learn`
  - `joblib`
  - `numpy`

1. Navigate to the back-end directory:
```bash
cd backend
```

2. You can install the required libraries using pip:
```bash
pip install fastapi uvicorn pandas scikit-learn joblib numpy
```
## Running Instructions
1. Navigate to the front-end directory:
```bash
cd frontend
```
2. Open React website:
```bash
npm start
```
3. Navigate to the back-end directory:
```bash
cd backend
```

4. Open FastAPI server
```bash
uvicorn main:app --reload
```

5. Access the website via http://localhost:3000/
## AI Model Integration
The application integrates a machine learning pipeline with the following features:

- Prediction Model: Utilizes a Random Forest Regressor to predict flight prices.
- Recommendation Model: Uses DBSCAN clustering to recommend similar flights based on fare and distance.
- Classification Model: Uses LightGBM Classifier to determine if the provided price is higher or lower than the current trend
## AI Model Setup (Optional)
In case the .pkl package of the model is not existed, please run these commands:
1. Navigate to the back-end directory:
```bash
cd backend
```
2. Run and train predict_model:
```bash
python predict_model.py
```
3. Run and train recommend_model:
```bash
python recommend_model.py
```

4. Run and train classify_model:
```bash
python classify_model.py
```

