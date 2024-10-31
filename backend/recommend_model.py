from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score
import pandas as pd
import numpy as np
import joblib

from dataset import Dataset

class RecommendModel:
    def __init__(self, dataset):
        self.model = DBSCAN(eps=0.05, min_samples=3)

        # Only include Fare and Miles for clustering
        self.X = dataset.dataset[['Fare', 'Miles']][dataset.dataset['Year'] == 2024].copy().reset_index(drop=True)

        # Store the original dataset for later use
        self.original_data = dataset.dataset[dataset.dataset['Year'] == 2024].copy().reset_index(drop=True)
        self.scaler = StandardScaler()
        self.X_scaled = self.scaler.fit_transform(self.X)

        # Initialize and fit DBSCAN
        self.original_data['Cluster'] = self.X['Cluster'] = self.model.fit_predict(self.X_scaled)
        
    def train(self):
        # Save the model
        joblib.dump(self.model, 'recommend_model.pkl', compress=9)

        print(f'Eps: 0.05: Silhouette Score: {silhouette_score(self.X_scaled, self.X["Cluster"])} - Cluster: {len(set(self.X["Cluster"]))}')
        
    def recommend(self, fare, miles):
        # Load the model
        model = joblib.load('recommend_model.pkl')

       # Convert input to DataFrame with appropriate feature names
        input_data = pd.DataFrame([[fare, miles]], columns=['Fare', 'Miles'])

        # Scale the input data
        input_data_scaled = self.scaler.transform(input_data)

        # Calculate distances from input to existing data using scaled values
        distances = np.linalg.norm(self.X_scaled - input_data_scaled, axis=1)

        # Get the index of the closest point
        closest_index = np.argmin(distances)

        # Find the cluster of the closest flight
        closest_cluster = self.X.iloc[closest_index]['Cluster']

        # Filter flights with the same cluster label from the original dataset
        similar_flights = self.original_data[self.original_data['Cluster'] == closest_cluster]
        print(f'Similar Flights: {similar_flights}')

        return similar_flights[['OriginCity', 'DestinationCity', 'Fare', 'Miles']]  # Include only the required columns

# Example usage (assuming dataset is a DataFrame with relevant columns)
if __name__ == "__main__":
    # Load and preprocess your dataset
    dataset = Dataset()
    dataset.preprocess()  # Preprocess the data before passing it to PredictModel
    model = RecommendModel(dataset)
    model.train()
