from config import Session
from models.RentersAndApartment import RenterAndApartment


class RenterAndApartmentRepository:
    def __init__(self):
        self.session = Session()

    def add(self, renterAndApartment: RenterAndApartment):
        self.session.add(renterAndApartment)
        self.session.commit()

    def get_all(self):
        return self.session.query(RenterAndApartment).all()

    def get_by_id(self, rentersAndApartmentId):
        return self.session.query(RenterAndApartment).get(rentersAndApartmentId)

    def update(self, rentersAndApartmentId, new_data: RenterAndApartment):
        renterAndApartment = self.get_by_id(rentersAndApartmentId)
        if renterAndApartment:
            RenterAndApartment.rentersAndApartmentId = new_data.rentersAndApartmentId
            RenterAndApartment.apartmentId = new_data.apartmentId
            RenterAndApartment.custId = new_data.custId
            RenterAndApartment.rentId = new_data.rentId
            RenterAndApartment.dateIncoming = new_data.dateIncoming
            RenterAndApartment.dateExit = new_data.dateExit
            self.session.commit()
        return renterAndApartment

    def delete(self, rentersAndApartmentId):
        renterAndApartment = self.get_by_id(rentersAndApartmentId)
        if renterAndApartment:
            self.session.delete(renterAndApartment)
            self.session.commit()
        return renterAndApartment

    def exists_by_dateRentId(self, dateRentId):
        return self.session.query(RenterAndApartment).filter_by(Date=dateRentId).first() is not None

    def exists_by_RentId(self, RentId):
        return self.session.query(RenterAndApartment).filter_by(RentId=RentId).first() is not None

    def exists_by_ApartmentId(self, apartmentId):
        return self.session.query(RenterAndApartment).filter_by(apartmentId=apartmentId).first() is not None
