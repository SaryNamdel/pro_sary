from flask import Blueprint, request, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dto.CitiesDTO import CityDTO
from models.Cities import Base
from repository.CitiesRepository import CityRepository
from service.CitiesService import CityService

# from models.cities import Base
# engine = create_engine('sqlite:///cities.db')
# Base.metadata.create_all(engine)
# Session = sessionmaker(bind=engine)
# session = Session()

repo = CityRepository()
service = CityService(repo)

cities_blueprint = Blueprint('cities', __name__)


@cities_blueprint.route('', methods=['POST'])
def add_city():
    dto = CityDTO(**request.get_json())
    service.add_city(dto)
    return jsonify({'message': 'city added'}), 201


@cities_blueprint.route('', methods=['GET'])
def get_cities():
    cities = service.get_all_cities()
    return jsonify([{'cityId': c.cityId, 'areaId': c.areaId, 'cityName': c.cityName} for c in cities])


@cities_blueprint.route('/<int:cityId>', methods=['GET'])
def get_city(cityId):
    city = service.get_city_by_id(cityId)
    return jsonify({'cityId': city.cityId, 'areaId': city.areaId, 'cityName': city.cityName})


# @city_blueprint.route('/<int:cityId>', methods=['PUT'])
# def update_city(cityId):
#     dto = CityDTO(**request.get_json())
#     city = service.update_city(cityId, dto)
#     return jsonify({'message': 'City updated'})


# @city_blueprint.route('/<int:cityId>', methods=['DELETE'])
# def delete_city(cityId):
#     service.delete_city(cutyId)
#     return jsonify({'message': 'City deleted'})
