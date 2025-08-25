from flask import request, jsonify, Blueprint
from dto.ApartmentDTO import ApartmentDTO
from repository.ApartmentRepository import ApartmentRepository
from service.ApartmentService import ApartmentService

repo = ApartmentRepository()
service = ApartmentService(repo)

apartment_blueprint = Blueprint('apartments', __name__)


@apartment_blueprint.route('', methods=['POST'])
def add_apartment():
    dto = ApartmentDTO(**request.get_json())
    service.add_apartment(dto)
    return jsonify({'message': 'apartment added'}), 201


@apartment_blueprint.route('', methods=['GET'])
def get_apartments():
    apartments = service.get_all_apartments()
    return jsonify(
        [{'apartmentId': a.apartmentId,
          'selfDescription': a.selfDescription,
          'numBeds': a.numBeds,
          'park': a.park,
          'elevator': a.elevator,
          'numRooms': a.numRooms,
          'numFloor': a.numFloor,
          'porch': a.porch,
          'mangal': a.mangal,
          'accessibleness': a.accessibleness,
          'address': a.address,
          'lan': a.lan,
          'lat': a.lat,
          'protected_space': a.protected_space,
          'cityId': a.cityId,
          'trampoline': a.trampoline,
          'hammock': a.hammock,
          'woodenBench': a.woodenBench,
          'SittingArea': a.SittingArea,
          'isPool': a.isPool,
          'priceToBed': a.priceToBed

          } for a in apartments])


@apartment_blueprint.route('/<int:apartment_id>', methods=['GET'])
def get_apartment(apartment_id):
    a = service.get_apartment_by_id(apartment_id)
    return jsonify(
        {'apartmentId': a.apartmentId,
         'selfDescription': a.selfDescription,
         'numBeds': a.numBeds,
         'park': a.park,
         'elevator': a.elevator,
         'numRooms': a.numRooms,
         'numFloor': a.numFloor,
         'porch': a.porch,
         'mangal': a.mangal,
         'accessibleness': a.accessibleness,
         'address': a.address,
         'lan': a.lan,
         'lat': a.lat,
         'protected_space': a.protected_space,
         'cityId': a.cityId,
         'trampoline': a.trampoline,
         'hammock': a.hammock,
         'woodenBench': a.woodenBench,
         'SittingArea': a.SittingArea,
         'isPool': a.isPool,
         'priceToBed': a.priceToBed

         })


@apartment_blueprint.route('/<int:apartment_id>', methods=['PUT'])
def update_apartment(apartment_id):
    dto = ApartmentDTO(**request.get_json())
    apartment = service.update_apartment(apartment_id, dto)
    return jsonify({'message': 'apartment updated'})


@apartment_blueprint.route('/<int:apartment_id>', methods=['DELETE'])
def delete_apartment(apartment_id):
    service.delete_apartment(apartment_id)
    return jsonify({'message': 'apartment deleted'})
