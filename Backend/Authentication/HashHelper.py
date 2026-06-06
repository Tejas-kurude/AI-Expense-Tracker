from bcrypt import hashpw,gensalt,checkpw


class HashPass:

    @staticmethod
    def hashpass(plain_pass:str):
        return hashpw(
            plain_pass.encode("utf-8"),
            gensalt()
        ).decode('utf-8')
        
    @staticmethod
    def verify(plain_pass:str,hashpass:str):
        return checkpw(
            plain_pass.encode('utf-8'),
            hashpass.encode('utf-8'))
        