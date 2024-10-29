import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder

# A simple regression model
class Dataset:
    def __init__(self):
        # Initialize the model (Linear Regression)
        self.dataset = pd.read_csv("../datasets/US_Airfare.csv")

    def preprocess(self):
        # Remove potential duplicates of all datasets
        self.dataset.drop_duplicates(inplace=True)

        # Drop the data before 2014 since we are analysing the past 10 years flight fares
        self.dataset = self.dataset[self.dataset['Year'] >= 2014].copy()
        
        # Drop the flights with 0 passenger because we want to predict the commercial flights
        self.dataset = self.dataset[self.dataset['passengers'] != 0].copy()

        # Sort the dataset based on year and quarter column
        self.dataset = self.dataset.sort_values(by=['Year', 'Quarter'], ascending=[True, True])
        self.dataset = self.dataset.reset_index(drop=True)

        # Drop city1 and city2 since machine learning models work with numbers
        self.dataset.drop(columns=['city1'], inplace=True)
        self.dataset.drop(columns=['city2'], inplace=True)

        # Since OriginCityID and DestinationCityId needs to work as a pair to have any meaning, we combine it into a route string
        self.dataset['Route'] = self.dataset['OriginCityId'].astype(str) + '-' + self.dataset['DestinationCityId'].astype(str)

        # Then we drop the OriginCityID and DestinationCityId
        self.dataset.drop(columns=['OriginCityId'], inplace=True)
        self.dataset.drop(columns=['DestinationCityId'], inplace=True)

        # We also need to encode route string into number to train models
        label_encoder = LabelEncoder()

        self.dataset['RouteEncoded'] = label_encoder.fit_transform(self.dataset['Route']) # Encoding routes into numerical
        self.dataset.drop(columns=['Route'], inplace=True)

        # Delete all of these outliners from every year
        for i in range(5):
            self.dataset = self.dataset.groupby('Year').apply(self.remove_outliers).reset_index(drop=True)

        print(f"Current dataset: {self.dataset}")

    def remove_outliers(data):
        Q1 = data['Fare'].quantile(0.25)
        Q3 = data['Fare'].quantile(0.75)
        IQR = Q3 - Q1

        lower_bound = Q1 - 1.5 * IQR
        upper_bound = Q3 + 1.5 * IQR

        return data[(data['Fare'] >= lower_bound) & (data['Fare'] <= upper_bound)]


# Example usage (for initial training)
if __name__ == "__main__":
    model = Dataset()
    model.preprocess()