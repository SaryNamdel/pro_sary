from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Renters(Base):
    __tablename__ = 'renters'
    rentId = Column(Integer, primary_key=True)
    apartmentId = Column(Integer)
    lastName = Column(String)
    firstName = Column(String)
    phone = Column(String)
    email = Column(String)
    pwd = Column(String)
