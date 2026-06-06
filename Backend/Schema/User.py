from pydantic import BaseModel,EmailStr
from  typing import Optional


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


class Userupdate(BaseModel):
    F_Name:Optional[str]
    L_Name:Optional[str]
    Email:Optional[EmailStr]   
    Hashed_pass:Optional[str]