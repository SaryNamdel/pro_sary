from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


# class Attraction(Base):
#     __tablename__ = 'Attraction'
#     cityId = Column(Integer, primary_key=True)
#     trampoline = Column(String)
#     hammock = Column(String)
#     woodenBench = Column(String)
#     SittingArea = Column(String)
#     isPool = Column(String)
