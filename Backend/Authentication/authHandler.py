import jwt
from decouple import config
import time

JWT_SECRETE = config("JWT_SECRETE")
JWT_ALGORITHM = config("JWT_ALGORITHM")



class Authhandler:
    @staticmethod
    def log_jwt(user_id:str)->str:
        payload={
            "user_id":user_id,
            "exp":int(time.time()) +900
        }

        token = jwt.encode(payload,JWT_SECRETE,algorithm=JWT_ALGORITHM)
        return token
    

    def decode_jwt(token:str)->dict:

        try:
            decoded_tok = jwt.decode(token,JWT_SECRETE,algorithms=[JWT_ALGORITHM])

            print("Token Decoded..." ,decoded_tok)

            return decoded_tok
        
        except Exception as e:
            return e 


