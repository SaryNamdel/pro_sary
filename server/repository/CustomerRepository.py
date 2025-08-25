from config import Session
from models.Customer import Customer


class CustomerRepository:
    def __init__(self):
        self.session = Session()

    def add(self, customer: Customer):
        self.session.add(customer)
        self.session.commit()

    def get_all(self):
        return self.session.query(Customer).all()

    def get_by_id(self, customer_id):
        return self.session.query(Customer).get(customer_id)

    def update(self, customer_id, new_data: Customer):
        customer = self.get_by_id(customer_id)
        if customer:
            customer.custId = new_data.custId
            customer.cityId = new_data.cityId
            customer.lastName = new_data.lastName
            customer.firstName = new_data.firstName
            customer.phone = new_data.phone
            customer.email = new_data.email
            customer.pwd = new_data.pwd
            self.session.commit()
        return customer

    def delete(self, customer_id):
        customer = self.get_by_id(customer_id)
        if customer:
            self.session.delete(customer)
            self.session.commit()
        return customer

