from config import Session
from models.Apartment import Apartment


class ApartmentRepository:
    def __init__(self):
        self.session = Session()

    def add(self, apartment: Apartment):
        self.session.add(apartment)
        self.session.commit()

    def get_all(self):
        return self.session.query(Apartment).all()

    def get_by_id(self, apartmentId):
        return self.session.get(Apartment, apartmentId)

    def update(self, apartmentId, new_data: Apartment):
        apartment = self.get_by_id(apartmentId)
        if apartment:
            apartment.apartmentId = new_data.apartmentId
            apartment.selfDescription = new_data.selfDescription
            apartment.numBeds = new_data.numBeds
            apartment.cost = new_data.cost
            apartment.cityId = new_data.cityId
            apartment.park = new_data.park
            apartment.elevator = new_data.elevator
            apartment.numRooms = new_data.numRooms
            apartment.numFloor = new_data.numFloor
            apartment.porch = new_data.porch
            apartment.accessibleness = new_data.accessibleness
            apartment.address = new_data.address
            apartment.lan = new_data.lan
            apartment.lat = new_data.lat
            apartment.imgId = new_data.imgId
            apartment.mangal = new_data.mangal
            apartment.protected_space = new_data.protected_space
            apartment.priceToBed = new_data.priceToBed
            apartment.trampoline = new_data.trampoline
            apartment.hammock = new_data.hammock
            apartment.woodenBench = new_data.woodenBench
            apartment.SittingArea = new_data.SittingArea
            apartment.isPool = new_data.isPool
            self.session.commit()
        return apartment

    def delete(self, apartmentId):
        apartment = self.get_by_id(apartmentId)
        if apartment:
            self.session.delete(apartment)
            self.session.commit()
        return apartment

    def exists_by_city(self, cityId):
        return self.session.query(Apartment).filter_by(cityId=cityId).first() is not None


