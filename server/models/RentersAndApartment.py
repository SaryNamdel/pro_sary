from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class RenterAndApartment(Base):
    __tablename__ = 'RentersAndApartment'
    rentersAndApartmentId = Column(Integer, primary_key=True)
    apartmentId = Column(Integer)
    rentId = Column(Integer)
    custId = Column(Integer)
    dateExit = Column(Date)
    dateIncoming = Column(Date)



