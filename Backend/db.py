from pymongo import MongoClient


Mongo_URL ='mongodb://localhost:27017'
client = MongoClient(Mongo_URL)

db = client["ExpenseTracker"]

users_collection = db["users"]

transaction_collection = db["transactions"]


