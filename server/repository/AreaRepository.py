from config import Session
from models.Area import Area


class AreaRepository:
    def __init__(self):
        self.session = Session()

    def add(self, area: Area):
        self.session.add(area)
        self.session.commit()

    def get_all(self):
        return self.session.query(Area).all()

    def get_by_id(self, areaId):
        return self.session.query(Area).get(areaId)

    def get_by_name(self, areaName):
        return self.session.query(Area).get(areaName)

    def update(self, areaId, new_data: Area):
        area = self.get_by_id(areaId)
        if area:
            area.areaId = new_data.areaId
            area.areaName = new_data.areaName
            self.session.commit()
        return area

    def delete(self, areaId):
        area = self.get_by_id(areaId)
        if area:
            self.session.delete(area)
            self.session.commit()
        return area

    def exists_by_areaName(self, areaName):
        return self.session.query(Area).filter_by(areaName=areaName).first() is not None
