from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from config import Base

class RenterAndApartment(Base):
    __tablename__ = 'RentersAndApartment'
    rentersAndApartmentId = Column(Integer, primary_key=True, autoincrement=True)
    apartmentId = Column(Integer, ForeignKey("Apartments.apartmentId"), nullable=False)
    rentId = Column(Integer, nullable=True)
    custId = Column(Integer, nullable=True)
    dateExit = Column(Date, nullable=True)
    dateIncoming = Column(Date, nullable=True)


