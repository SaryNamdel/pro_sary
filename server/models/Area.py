from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Area(Base):
    __tablename__ = 'Area'
    areaId = Column(Integer, primary_key=True)
    areaName = Column(String)
