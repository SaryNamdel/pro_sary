from exceptions.exceptions import MissingFieldException, ItemAlreadyExistsException, ItemNotFoundException
from models.RentersAndApartment import RenterAndApartment


class RentAndApartmentService:
    def __init__(self, repo):
        self.repo = repo

    def add_renterAndApartment(self, dto):
        if not dto.dateRentId:
            raise MissingFieldException(dto.dateRentId)
        if self.repo.exists_by_dateRentId(dto.dateRentId):
            raise ItemAlreadyExistsException(dto.dateRentId)
        self.repo.add(RenterAndApartment(Id=dto.rentersAndApartmentId,
                                         ApartmentId=dto.ApartmentId,
                                         custId=dto.custId,
                                         rentId=dto.rentId,
                                         dateIncoming=dto.dateIncoming,
                                         dateExit=dto.dateExit))

    def get_all_renterAndApartment(self):
        return self.repo.get_all()

    def get_renterAndApartment_by_id(self, rentersAndApartmentId):
        renterAndApartment = self.repo.get_by_id(rentersAndApartmentId)
        if not renterAndApartment:
            raise ItemNotFoundException(rentersAndApartmentId)
        return renterAndApartment

    def update_renterAndApartment(self, rentersAndApartmentId, dto):
        renterAndApartment = self.repo.update(rentersAndApartmentId, RenterAndApartment(rentersAndApartmentId=dto.rentersAndApartmentId,
                                                                                        apartmentId=dto.apartmentId,
                                                                                        custId=dto.custId,
                                                                                        rentId=dto.rentId,
                                                                                        dateIncoming=dto.dateIncoming,
                                                                                        dateExist=dto.dateExist))
        if not renterAndApartment:
            raise ItemNotFoundException(rentersAndApartmentId)
        return renterAndApartment

    def delete_renterAndApartment(self, rentersAndApartmentId):
        renterAndApartment = self.repo.delete(rentersAndApartmentId)
        if not renterAndApartment:
            raise ItemNotFoundException(rentersAndApartmentId)
