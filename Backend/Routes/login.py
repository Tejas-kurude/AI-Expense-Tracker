from fastapi import APIRouter
from Schema.User import UserLogin
from db import users_collection
from fastapi import HTTPException
from Authentication.HashHelper import HashPass
from Authentication.authHandler import Authhandler


loginrouter = APIRouter()


@loginrouter.post("/login")
def login(data:UserLogin):
    existing = users_collection.find_one({"Email":data.Email})

    if not (existing):
        raise HTTPException(
            status_code=401,
            detail="User is Not Registered"
        )
    
    if not (HashPass.verify(data.Pass,existing["Hashed_pass"])):
        raise HTTPException(
            status_code=403,
            detail="Invalid Credenatials"
        )
    token =  Authhandler.log_jwt(str(existing["_id"]))
    return {
        "token":token
    }

        




