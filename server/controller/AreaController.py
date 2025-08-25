from flask import Blueprint, request, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dto.AreaDTO import AreaDTO
from models.Area import Base
from repository.AreaRepository import AreaRepository
from service.AreaService import AreaService


repo = AreaRepository()
service = AreaService(repo)

area_blueprint = Blueprint('area', __name__)


@area_blueprint.route('', methods=['POST'])
def add_area():
    dto = AreaDTO(**request.get_json())
    service.add_area(dto)
    return jsonify({'message': 'Area added'}), 201


@area_blueprint.route('', methods=['GET'])
def get_areas():
    areas = service.get_all_areas()
    return jsonify([{'areaId': a.areaId, 'areaName': a.areaName} for a in areas])

"""
@area_blueprint.route('/<int:area_id>', methods=['GET'])
def get_area(area_id):
    area = service.get_area_by_id(area_id)
    return jsonify({'areaId': area.id, 'araeName': area.areaName})



@area_blueprint.route('/<int:area_id>', methods=['PUT'])
def update_area(areaId):
    dto = AreaDTO(**request.get_json())
    area = service.update_area(areaId, dto)
    return jsonify({'message': 'Area updated'})
    


@area_blueprint.route('/<int:area_id>', methods=['DELETE'])
def delete_area(area_id):
    service.delete_area(area_id)
    return jsonify({'message': 'Area deleted'})
    """
