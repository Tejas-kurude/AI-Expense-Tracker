from fastapi import APIRouter
from Schema.User import Usercreate
from db import users_collection
from fastapi import HTTPException
from Authentication.HashHelper import HashPass

signuprouter=APIRouter()



@signuprouter.post("/signup")
def signup(data:Usercreate):
    existing = users_collection.find_one({"Email":data.Email})

    if(existing):
        raise HTTPException(
            status_code=403,
            detail="User ALready Exists"
        )
    
    user=users_collection.insert_one({
        "First_Name":data.F_Name,
        "Last_Name":data.L_Name,
        "Email":data.Email,
        "Hashed_pass": HashPass.hashpass(data.Pass)
    })
    return {
        "message":"User registerd succefully"
    }



