from db import users_collection
from fastapi import HTTPException,Security
from Authentication.authHandler import Authhandler
from fastapi.security import HTTPBearer,HTTPAuthorizationCredentials

security = HTTPBearer()


class JWTbearer:
    async def __call__(
            self,
            credentials : HTTPAuthorizationCredentials=Security(security)
    ):
    
        if credentials:
            print ("Token recived")
            payload=  Authhandler.decode_jwt(credentials.credentials)
    
            print("Payload")
            print(payload)
            if payload:

                return payload
            
        raise HTTPException(
            status_code=401,
            detail="Invalid Token"
        )




