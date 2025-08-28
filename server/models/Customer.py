

from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from config import Base


class Customer(Base):
    __tablename__ = 'customers'
    custId = Column(Integer, primary_key=True)
    cityId = Column(Integer)
    lastName = Column(String)
    firstName = Column(String)
    phone = Column(String)
    email = Column(String)
    pwd = Column(String)
