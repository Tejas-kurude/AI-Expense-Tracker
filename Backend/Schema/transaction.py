from pydantic import BaseModel
from datetime import date
from typing import Optional



class   trasaction(BaseModel):
    Date:str
    Spend:float
    For:str


class updatetransaction(BaseModel):
    Date:Optional[str]
    Spend:Optional[float]
    For:Optional[str]
