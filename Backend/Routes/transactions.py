from fastapi import APIRouter,Depends
from Schema.transaction import trasaction
from Authentication.authbearer import JWTbearer
from db import transaction_collection

transactionrouter=APIRouter()

@transactionrouter.post("/transactions")
def transaction(data:trasaction,user =  Depends(JWTbearer())):
    trans = transaction_collection.insert_one({
        "Date":data.Date,
        "Spend":data.Spend,
        "For":data.For,
        "User_id":user["user_id"]
    })
    return {
        "message":"Transaction Recorded"
    }

@transactionrouter.get("/showtransactions")
def showtransactions(user=Depends(JWTbearer())):


    trans=[]
    for tran in transaction_collection.find({"User_id":user["user_id"]}):
            trans.append({
                 "Date":tran["Date"],
                 "Spend":tran["Spend"],
                 "For": tran["For"],
                 "id":str(tran["_id"])
            })
    return trans

