
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, UniqueConstraint, ForeignKey
from config import Base


class Renters(Base):
    __tablename__ = 'renters'
    rentId = Column(Integer, primary_key=True, autoincrement=True)
    apartmentId = Column(Integer, ForeignKey("Apartments.apartmentId"), nullable=False)
    lastName =  Column(String(255), nullable=True)
    firstName =  Column(String(255), nullable=True)
    phone = Column(String(50), nullable=True)
    email =  Column(String(255), nullable=True)
    pwd =  Column(String(255), nullable=False)
    username = Column(String(255), nullable=True)

    # server/models/Renter.py


    __table_args__ = (
        UniqueConstraint('username', name='uq_renters_username'),
    )

    def to_dict(self):
        return {
            "rentId": self.rentId,
            "apartmentId":self.apartmentId,
            "phone": self.phone,
            "email": self.email,
            "lastName": self.lastName,
            "firstName": self.firstName,
            "pwd": self.pwd,
            "username": self.username,
        }






