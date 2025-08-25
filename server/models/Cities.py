from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class City(Base):
    __tablename__ = 'cities'
    cityId = Column(Integer, primary_key=True)
    areaId = Column(String)
    cityName = Column(String)
