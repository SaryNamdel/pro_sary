from flask import Blueprint, request, jsonify
from dto.RentersDTO import RentersDTO
from repository.RentersRepository import RentersRepository

from service.RentersService import RentersService

repo = RentersRepository()
service = RentersService(repo)

renters_blueprint = Blueprint('renters', __name__)


@renters_blueprint.route('', methods=['POST'])
def add_renters():
    dto = RentersDTO(**request.get_json())
    service.add(dto)
    return jsonify({'message': 'Renters added'}), 201


@renters_blueprint.route('', methods=['GET'])
def get_renters():
    renters = service.get_all()
    return jsonify([{'id': r.rentId, 'apartmentId': r.apartmentId,
                     'lastName': r.lastName, 'firstName': r.firstName,
                     'phone': r.phone, 'email': r.email,'pwd': r.pwd}
                    for r in renters])


@renters_blueprint.route('/<int:rentId>', methods=['GET'])
def get_renters_by_id(renters_id):
    renters = service.get_by_id(renters_id)
    return jsonify({'id': renters.rentId, 'apartmentId': renters.apartmentId,
                    'lastName': renters.lastName, 'firstName': renters.firstName,
                    'phone': renters.phone, 'email': renters.email,'pwd': renters.pwd})


@renters_blueprint.route('/<int:rentId>', methods=['PUT'])
def update_renters(rentId):
    dto = RentersDTO(**request.get_json())
    renters = service.update(rentId, dto)
    return jsonify({'message': 'Renters updated'})


@renters_blueprint.route('/<int:rentId>', methods=['DELETE'])
def delete_renters(rentId):
    service.delete(rentId)
    return jsonify({'message': 'renters deleted'})
