from fastapi import FastAPI,Depends
from Routes.SignUp import signuprouter
from Routes.login import loginrouter
from Authentication.authbearer import JWTbearer
from Routes.transactions import transactionrouter


app=FastAPI()
app.include_router(router=signuprouter)
app.include_router(router=loginrouter)
app.include_router(router=transactionrouter)


@app.get('/')
def test(user=Depends(JWTbearer())):
    return{
        "message":"Working",
        "User_id": user["user_id"]
    }





