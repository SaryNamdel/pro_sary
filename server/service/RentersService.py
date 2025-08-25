from models.Renters import Renters
from dto.RentersDTO import RentersDTO


class RentersService:
    def __init__(self, repo):
        self.repo = repo
        self.session = repo.session

    def add(self, dto):
        self.repo.add(dto)

    def get_all(self):
        return self.repo.get_all()

    def get_by_id(self, renters_id):
        return self.repo.get_by_id(renters_id)

    def update(self, renters_id, new_data: RentersDTO):
        renters = self.get_by_id(renters_id)
        if renters:
            renters.rentId = new_data.rentId
            renters.apartmentId = new_data.apartmentId
            renters.lastName = new_data.lastName
            renters.firstName = new_data.firstName
            renters.phone = new_data.phone
            renters.email = new_data.email
            renters.pwd = new_data.pwd
            self.session.commit()
        return renters

    def delete(self, renters_id):
        renters = self.get_by_id(renters_id)
        if renters:
            self.session.delete(renters)
            self.session.commit()
        return renters

    def exists_by_title(self, lastName):
        return self.session.query(Renters).filter_by(lastName=lastName).first() is not None
