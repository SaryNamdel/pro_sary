from exceptions.exceptions import ItemAlreadyExistsException, MissingFieldException, ItemNotFoundException
from models.Area import Area


class AreaService:
    def __init__(self, repo):
        self.repo = repo

    def add_area(self, dto):
        if not dto.araeName:
            raise MissingFieldException()
        if self.repo.exists_by_areaName(dto.araeName):
            raise ItemAlreadyExistsException(dto.araeName)
        self.repo.add(Area(areaName=dto.areaName))

    def get_all_areas(self):
        return self.repo.get_all()

    def get_area_by_id(self, area_id):
        area = self.repo.get_by_id(area_id)
        if not area:
            raise ItemNotFoundException(area)
        return area

    def update_area(self, area_id, dto):
        area = self.repo.update(area_id, Area(areaName=dto.areaName))
        if not area:
            raise ItemNotFoundException(area_id)
        return area

    def delete_area(self, area_id):
        area = self.repo.delete(area_id)
        if not area:
            raise ItemNotFoundException(area_id)