import math
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import joblib

# A simple regression model
class PredictModel:
    def __init__(self, dataset):
        # Initialize the model (Linear Regression)
        self.model = RandomForestRegressor(n_jobs=-1, n_estimators=500)
        self.df = dataset

    def train(self):
        # Select features
        X = self.df[['Year', 'Quarter', 'Miles', 'Passengers']]
        y = self.df['Fare']

        # Split the data into training and testing data
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Train the model
        self.model.fit(X_train, y_train)
        
        # Save the model
        joblib.dump(self.model, 'predict_model.pkl')

        # Evaluation
        y_pred = model.predict(X_test)

        print(f"R2: {r2_score(y_test, y_pred)}")
        print(f"MAE: {mean_absolute_error(y_test, y_pred)}")
        print(f"MSE: {mean_squared_error(y_test, y_pred)}")
        print(f"RMSE: {math.sqrt(mean_squared_error(y_test, y_pred))}")

    def predict(self, year, quarter, miles, passengers):
        # Load the model
        model = joblib.load('predict_model.pkl')
        
        # Make a prediction based on input
        return model.predict([[year, quarter, miles, passengers]])

# Example usage (for initial training)
if __name__ == "__main__":
    model = PredictModel()
    model.train()