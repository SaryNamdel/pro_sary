from sqlalchemy import Column, Integer, String, ForeignKey
from config import Base


class Images(Base):
    __tablename__ = 'Images'
    imgId = Column(Integer, primary_key=True)
    apartmentId = Column(Integer, ForeignKey("Apartments.apartmentId"), nullable=False)
    imgName = Column(String)
# apartment_id = Column(Integer, ForeignKey('Apartments.ApartmentId'))
#    apartment = relationship("Apartment", back_populates="images")
