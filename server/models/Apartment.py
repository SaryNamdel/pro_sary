from sqlalchemy import Column, Integer, String, Boolean, Float, ForeignKey
from config import Base


class Apartment(Base):
    __tablename__ = "Apartments"
    apartmentId = Column(Integer, primary_key=True, autoincrement=True)
    #  cityId = Column(Integer, ForeignKey("Cities.cityId"))
    cityId = Column(Integer)
    park = Column(Boolean)
    elevator = Column(Boolean)
    numRooms = Column(Integer)
    numBeds = Column(Integer)
    numFloor = Column(Integer)
    porch = Column(Boolean)
    mangal = Column(Boolean)
    accessibleness = Column(Boolean)
    selfDescription = Column(String)
    address = Column(String)
    lat = Column(Float)
    lan = Column(Float)
    protected_space = Column(Boolean)
    trampoline = Column(Boolean)
    hammock = Column(Boolean)
    woodenBench = Column(Boolean)
    SittingArea = Column(Boolean)
    isPool = Column(Boolean)
    priceToBed = Column(Float)
