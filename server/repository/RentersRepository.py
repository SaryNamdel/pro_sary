from config import Session
from models.Renters import Renters


class RentersRepository:
    def __init__(self):
        self.session = Session()

    def add(self, renters: Renters):
        self.session.add(renters)
        self.session.commit()

    def get_all(self):
        return self.session.query(Renters).all()

    def get_by_id(self, rentersId):
        return self.session.get(Renters, rentersId)

    def update(self, rentersId, new_data: Renters):
        renters = self.get_by_id(rentersId)
        if renters:
            renters.rentId = new_data.rentId
            self.session.commit()
        return renters

    def delete(self, rentId):
        renters = self.get_by_id(rentId)
        if renters:
            self.session.delete(renters)
            self.session.commit()
        return renters

    def exists_by_id(self, rentersId):
        return self.session.query(Renters).filter_by(rentId=rentersId).first() is not None
