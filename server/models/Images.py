from sqlalchemy import Column, Integer, String
from config import Base


class Images(Base):
    __tablename__ = 'Images'
    imgId = Column(Integer, primary_key=True)
    apartmentId = Column(String)
    imgName = Column(String)
# apartment_id = Column(Integer, ForeignKey('Apartments.ApartmentId'))
#    apartment = relationship("Apartment", back_populates="images")
