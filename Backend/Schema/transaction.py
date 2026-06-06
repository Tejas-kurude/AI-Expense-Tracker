from pydantic import BaseModel
from datetime import date
from typing import Optional



class   trasaction(BaseModel):
    Date:str
    Spend:float
    For:str


class updatetransaction(BaseModel):
    Date:Optional[str]=None
    Spend:Optional[float]=None
    For:Optional[str]=None
