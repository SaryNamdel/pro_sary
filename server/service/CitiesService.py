# from models.city import City
# from exceptions.exceptions import CityAlreadyExistsException, MissingTitleException, CityNotFoundException
from exceptions.exceptions import MissingFieldException, ItemAlreadyExistsException, ItemNotFoundException
from models.Cities import City


class CityService:
    def __init__(self, repo):
        self.repo = repo


    def add_city(self, dto):
        if not dto.cityName:
            raise MissingFieldException()
        if self.repo.exists_by_cityName(dto.cityName):
            raise ItemAlreadyExistsException(dto.cityName)
        self.repo.add(City(title=dto.title, author=dto.author, year=dto.year))

    def get_all_cities(self):
        return self.repo.get_all()

    def get_city_by_id(self, city_id):
        city = self.repo.get_by_id(city_id)
        if not city:
            raise ItemNotFoundException(city_id)
        return city

    # def update_city(self, cityName, dto):
    #     city = self.repo.update(cityId, city(cityName=dto.cityName, areaId=dto.areaId, cityId=cityId))
    #     if not city:
    #         raise CityNotFoundException(cityName)
    #     return city
    #
    # def delete_city(self, cityName):
    #     city = self.repo.delete(cityName)
    #     if not city:
    #         raise CityNotFoundException(cityName)