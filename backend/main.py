from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field
from fastapi.responses import FileResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from fastapi import BackgroundTasks
from predict_model import PredictModel
from recommend_model import RecommendModel
from classify_model import ClassifyModel
from dataset import Dataset
from fastapi.middleware.cors import CORSMiddleware
from utils import logger
import pandas as pd
import joblib
import os

import time

app = FastAPI()

# Serve React static files
app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

@app.get("/")
async def serve_spa(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

# Catch-all route for React frontend
@app.route("/{full_path:path}")
async def catch_all(request: Request, full_path: str):
    logger.info("full_path: " + full_path)
    return templates.TemplateResponse("index.html", {"request": request})

# Initialize dataset
dataset = Dataset()
dataset.preprocess()

# Load the pre-trained model
predict_model = PredictModel(dataset)
recommend_model = RecommendModel(dataset)
classify_model = ClassifyModel(dataset)

# Define a Pydantic model to validate and parse input data for prediction
class PredictionInput(BaseModel):
    # Field defines constraints for input validation
    year: int = Field(..., gt=2024, description="Year of Flight")
    quarter: int = Field(..., ge=1, le=4, description="Quarter in that year of flight")
    distance: int = Field(..., gt=0, description="Distance of the flight")
    passengers: int = Field(..., gt=0, description="Number of passengers inside the flight")

# Define a Pydantic model to validate and parse input data for recommendation
class RecommendationInput(BaseModel):
    # Field defines constraints for input validation
    price: int = Field(..., gt=0, description="Fare of the flight")
    distance: int = Field(..., gt=0, description="Miles of the flight")

class ClassificationInput(BaseModel):
    year: int = Field(..., gt=2014,le=2024, description="Year of Flight")
    quarter: int = Field(..., ge=1, le=4, description="Quarter in that year of flight")
    distance: int = Field(..., gt=0, description="Distance of the flight")
    passengers: int = Field(..., gt=0, description="Number of passengers inside the flight")
    price: int = Field(..., gt=0, description="Fare of the flight")



# Define a GET endpoint at "/datasets" to fetch historical datasets
@app.get("/datasets")
async def get_historical_data():
    try:
        # Get the dataset as a DataFrame
        data = pd.DataFrame(dataset.to_dict())
        
        # Group data by Year and Quarter, calculating average Fare
        aggregated_data = data.groupby(['Year', 'Quarter']).agg({'Fare': 'mean'}).reset_index()
        
        # Convert to dictionary format suitable for JSON response
        aggregated_data_dict = aggregated_data.to_dict(orient="records")

        return {"data": aggregated_data_dict }
    
    except Exception as e:
        # Log the error if an exception occurs during prediction
        logger.error(f"Error during fetching historical data: {str(e)}")

        raise HTTPException(status_code=500, detail="Failed to retrieve historical data") from e

# Define a POST endpoint at "/predict" for price prediction
@app.post("/predict/")
async def predict_price(input: PredictionInput):
    try:
        # Call the model's predict method using the input data
        price = predict_model.predict(input.year, input.quarter, input.distance, input.passengers)[0]
        
        # Log the prediction details (price, square footage, and bedrooms)
        logger.info(f"Prediction made: {price} for Year {input.year}, Quarter {input.quarter}, Distance {input.distance}, Passengers {input.passengers}")
        
        # Return the predicted price in JSON format, rounding to 2 decimal places
        return {"predicted_price": round(price, 2)}
    
    except Exception as e:
        # Log the error if an exception occurs during prediction
        logger.error(f"Error during prediction: {str(e)}")
        
        # Raise an HTTP 500 Internal Server Error if prediction fails
        raise HTTPException(status_code=500, detail="Internal server error")
    
    # Define a POST endpoint at "/recommend" for flight recommendation
@app.post("/recommend/")
async def recommend_flights(input: RecommendationInput):
    try:
        # Get similar flights
        similar_flights = recommend_model.recommend(input.price, input.distance)
        
        # Log the prediction details (price, square footage, and bedrooms)
        logger.info(f"Similar flights {similar_flights}")

        # Check if similar_flights is empty or not in a valid format
        if isinstance(similar_flights, pd.DataFrame):
            # Convert DataFrame to a list of dictionaries
            similar_flights = similar_flights.to_dict(orient='records')
            
        return {"similar_flights": similar_flights}

    except Exception as e:
        # Log the error if an exception occurs during prediction
        logger.error(f"Error during prediction: {str(e)}")
        
        # Raise an HTTP 500 Internal Server Error if prediction fails
        raise HTTPException(status_code=500, detail="Internal server error")
    
@app.post("/classify/")
async def classify_price(input: ClassificationInput):
    try:
        # Call the model's classify method using the input data
        result = classify_model.classify(input.year,input.quarter,input.distance,input.passengers,input.price)        
        logger.info(f"Classification made: Category {result[0]} Confidence {result[1]}")

        return {
            "category": result[0],
            "confidence": result[1]
        }
    
    except Exception as e:
        # Log the error if an exception occurs during prediction
        logger.error(f"Error during prediction: {str(e)}")
        
        # Raise an HTTP 500 Internal Server Error if prediction fails
        raise HTTPException(status_code=500, detail="Internal server error")
    

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)