import lightgbm as lgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import precision_score, recall_score, f1_score, confusion_matrix, classification_report
import pandas as pd
import joblib

from dataset import Dataset

class ClassifyModel:
    def __init__(self, dataset):
        self.model = lgb.LGBMClassifier(boosting_type='gbdt', num_leaves=50, max_depth=20, subsample=0.5, colsample_bytree=0.5)
        self.df = dataset.dataset

    def train(self):
        X = self.df[['Year', 'Quarter', 'Miles', 'Passengers', 'Fare']]

        self.df = self.categorize_prices_per_year(self.df)
        self.df['PriceCategory'] = self.df['PriceCategory'].map({'Low': 0, 'Medium': 1, 'High': 2}) 
        y = self.df['PriceCategory']
        
        # Split the data into training and testing data
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Train the model
        self.model.fit(X_train, y_train)
        
        # Save the model
        joblib.dump(self.model, 'classify_model.pkl', compress=9)

        # Evaluation
        y_pred = self.model.predict(X_test)
        print("Classification Report:\n", classification_report(y_test, y_pred))
        print(f"Precision: {precision_score(y_test, y_pred, average='weighted')}")
        print(f"Recall: {recall_score(y_test, y_pred, average='weighted')}")
        print(f"F1 Score: {f1_score(y_test, y_pred, average='weighted')}")
    
    
    def categorize_price(self, data, Q1, Q3):
        if data['Fare'] <= Q1:
            return 'Low'
        elif data['Fare'] >= Q3:
            return 'High'
        else:
            return 'Medium'
            
    def categorize_prices_per_year(self, df):
        price_categories = []

        for year, data in df.groupby('Year'):
            Q1 = data['Fare'].quantile(0.25)
            Q3 = data['Fare'].quantile(0.75)

            data['PriceCategory'] = data.apply(self.categorize_price, args=(Q1, Q3), axis=1)
            price_categories.append(data)

        return pd.concat(price_categories).reset_index(drop=True)
    
    
    def classify(self, year, quarter, distance, passenger, price):
        # Load the model
        model = joblib.load('classify_model.pkl')
        
         # Predict the class probabilities
        probabilities = model.predict_proba([[year, quarter, distance, passenger, price]])[0]
        predicted_category_index = int(model.predict([[year, quarter, distance, passenger, price]])[0])

        # Map the integer prediction to category names
        category_map = {0: "Low", 1: "Medium", 2: "High"}
        predicted_category = category_map[predicted_category_index]
        
        # Map the confidence scores to the categories
        confidence_scores = {
            "Low": float(probabilities[0]),
            "Medium": float(probabilities[1]),
            "High": float(probabilities[2])
        }

        return (predicted_category, confidence_scores)
        
    
if __name__ == "__main__":
    dataset = Dataset()
    dataset.preprocess()  # Preprocess the data before passing it to ClassifyModel
    model = ClassifyModel(dataset)
    model.train()
