from config import Session
from models.CustomerAndApartment import CustomerAndApartment


class CustomerAndApartmentRepository:
    def __init__(self):
        self.session = Session()

    def add(self, customerAndApartment: CustomerAndApartment):
        self.session.add(customerAndApartment)
        self.session.commit()

    def get_all(self):
        return self.session.query(CustomerAndApartment).all()

    def get_by_id(self, customerAndApartmentId):
        return self.session.query(CustomerAndApartment).get(customerAndApartmentId)

    def update(self, customerAndApartmentId, new_data: CustomerAndApartment):
        customerAndApartment = self.get_by_id(customerAndApartmentId)
        if customerAndApartment:
            customerAndApartment.customerAndApartmentId = new_data.customerAndApartmentId
            customerAndApartment.apartmentId = new_data.apartmentId
            customerAndApartment.custId = new_data.custId
            customerAndApartment.rentId = new_data.rentId
            customerAndApartment.dateIncoming = new_data.dateIncoming
            customerAndApartment.dateExit = new_data.dateExit
            self.session.commit()
        return customerAndApartment

    def delete(self, customerAndApartmentId):
        customerAndApartment = self.get_by_id(customerAndApartmentId)
        if customerAndApartment:
            self.session.delete(customerAndApartment)
            self.session.commit()
        return customerAndApartment

    def exists_by_dateIncome(self, dateIncome):
        return self.session.query(CustomerAndApartment).filter_by(dateIncome=dateIncome).first() is not None

    def exists_by_dateExit(self, dateExit):
        return self.session.query(CustomerAndApartment).filter_by(dateExit=dateExit).first() is not None
