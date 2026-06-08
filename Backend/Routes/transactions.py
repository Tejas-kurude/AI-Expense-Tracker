from fastapi import APIRouter,Depends,HTTPException
from Schema.transaction import trasaction
from Schema.transaction import updatetransaction
from Authentication.authbearer import JWTbearer
from db import transaction_collection
from bson import ObjectId


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

@transactionrouter.patch("/updatetransaction")
def updatetransaction(id:str,
                      data:updatetransaction,
                      user= Depends(JWTbearer())
                      ):
     
     
     exist = transaction_collection.find_one({
          "_id":ObjectId(id)
     })

     if not exist:
          raise HTTPException(
               status_code=404,
               detail="Transaction Not Found"
          )
     if (exist["User_id"]!=user["user_id"]):
          raise HTTPException(
               status_code=403,
               detail="Forbidden Action.Please check Login"
          )
     
     update_data= data.model_dump(exclude_unset=True)
     transaction_collection.update_one({
          "_id" : ObjectId(id)
     },
     {
          "$set" : update_data
     }
     
     )
     return{
          "message":"Transaction Updated...."
     }
     



@transactionrouter.delete("/deletetransaction")
def delete(id:str,user=Depends(JWTbearer())):

     exist=transaction_collection.find_one({
          "_id":ObjectId(id)
     })

     if not exist:
          raise HTTPException(
               status_code=404,
               detail="Not Found"

          )
     
     if exist["User_id"]!=user["user_id"]:
          raise HTTPException(
               status_code=403,
               detail="Action Forbidden"
          )
     
     transaction_collection.delete_one(
          {
               "_id":ObjectId(id)
          }
     )
     return{
          "message":"Transaction Deleted...."
     }
     
     pass
     
     
     
     

    
