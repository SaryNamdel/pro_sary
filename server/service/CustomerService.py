
from exceptions.exceptions import ItemAlreadyExistsException, MissingFieldException, ItemNotFoundException, pwdNotTrue
from models.Customer import Customer


class CustomerService:
    def __init__(self, repo):
        self.repo = repo

    def add_customer(self, dto):
        if self.repo.exists_by_pwd(dto.title):
            raise ItemAlreadyExistsException(dto.pwd)
        self.repo.add(Customer(custId=dto.custId,
                               cityId=dto.cityId,
                               lastName=dto.lastName,
                               firstName=dto.firstName,
                               phone=dto.phone,
                               email=dto.email,
                               pwd=dto.pwd)),

    def get_all_customers(self):
        return self.repo.get_all()
    def get_customer_by_id_pwd(self,customer_id,pwd):
        customer = self.repo.get_by_id(customer_id)
        if not customer:
            raise ItemNotFoundException(customer_id)
        if customer.pwd!=pwd:
            raise pwdNotTrue(customer_id)
        return customer

    def get_customer_by_id(self, customer_id):
        customer = self.repo.get_by_id(customer_id)
        if not customer:
            raise ItemNotFoundException(customer_id)
        return customer

    def update_customer(self, customer_id, dto):
        customer = self.repo.update(customer_id, Customer(custId=dto.custId,
                                                          cityId=dto.cityId,
                                                          lastName=dto.lastName,
                                                          firstName=dto.firstName,
                                                          phone=dto.phone,
                                                          email=dto.email,
                                                          pwd=dto.pwd))
        if not customer:
            raise ItemNotFoundException(customer_id)
        return customer

    def delete_customer(self, customer_id):
        customer = self.repo.delete(customer_id)
        if not customer:
            raise ItemNotFoundException(customer_id)
