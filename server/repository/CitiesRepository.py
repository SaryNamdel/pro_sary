# from models.city import City
from config import Session
from models.Cities import City


class CityRepository:
    def __init__(self):
        self.session = Session()

    def add(self, city: City):
        self.session.add(city)
        self.session.commit()


    def get_all(self):
        return self.session.query(City).all()

    def get_by_id(self, cityId):
        return self.session.query(City).get(cityId)

    # def update(self, cityId, new_data: City):
    #     city = self.get_by_id(cityId)
    #     if city:
    #         city.cityId = new_data.cityId
    #         city.areaId = new_data.areaId
    #         city.cityName = new_data.cityName
    #     return city