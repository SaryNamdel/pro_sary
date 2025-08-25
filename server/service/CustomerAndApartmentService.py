from exceptions.exceptions import MissingFieldException, ItemAlreadyExistsException
from models.CustomerAndApartment import CustomerAndApartment


class CustomerAndApartmentService:
    def __init__(self, repo):
        self.repo = repo

    def add_customerAndApartment(self, dto):
        if not dto.pwd:
            raise MissingFieldException(dto.pwd)
        if self.repo.exists_by_title(dto.title):
            raise ItemAlreadyExistsException(dto.title)
        self.repo.add(CustomerAndApartment(customerAndApartmentId=dto.customerAndApartmentId,
                                           apartmentId=dto.apartmentId,
                                           custId=dto.custId,
                                           rentId=dto.rentId,
                                           dateIncoming=dto.dateIncoming,
                                           dateExit=dto.dateExit))

    def get_all_customerAndApartments(self):
        return self.repo.get_all()

    def get_customerAndApartment_by_id(self, customerAndApartmentId):
        customerAndApartment = self.repo.get_by_id(customerAndApartmentId)
        if not customerAndApartment:
            raise ItemAlreadyExistsException(customerAndApartmentId)
        return customerAndApartment

    def update_customerAndApartment(self, customerAndApartmentId, dto):
        customerAndApartment = self.repo.update(customerAndApartmentId,
                                                CustomerAndApartment(customerAndApartmentId=dto.customerAndApartmentId,
                                                                     apartmentId=dto.apartmentId,
                                                                     custId=dto.custId,
                                                                     rentId=dto.rentId,
                                                                     dateIncoming=dto.dateIncoming,
                                                                     dateExit=dto.dateExit))
        if not customerAndApartment:
            raise ItemAlreadyExistsException(customerAndApartmentId)
        return customerAndApartment

    def delete_customerAndApartment(self, customerAndApartmentId):
        customerAndApartment = self.repo.delete(customerAndApartmentId)
        if not customerAndApartment:
            raise ItemAlreadyExistsException(customerAndApartmentId)
