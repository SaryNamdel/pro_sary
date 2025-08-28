
from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base
from config import Base


class CustomerAndApartment(Base):
    __tablename__ = 'customerAndApartment'
    customerAndApartmentId = Column(Integer, primary_key=True)
    rentId = Column(Integer)
    apartmentId = Column(Integer)
    custId = Column(Integer)
    dateIncoming = Column(Date)
    dateExit = Column(Date)
