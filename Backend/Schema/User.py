from pydantic import BaseModel,EmailStr


class Usercreate(BaseModel):
    F_Name:str
    L_Name:str
    Email:EmailStr
    Pass:str

class UserShow(BaseModel):
    F_Name:str
    L_Name:str
    Email:EmailStr

class UserLogin(BaseModel):
    Email:EmailStr
    Pass:str