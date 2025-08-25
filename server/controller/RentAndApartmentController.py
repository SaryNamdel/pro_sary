from flask import request, jsonify, render_template, Blueprint
from dto.RentAndApartmentDTO import RenterAndApartmentDTO
from repository.RentAndApartmentReposiyory import RenterAndApartmentRepository
from service.RentAndApartmentService import RentAndApartmentService


repo = RenterAndApartmentRepository()
service = RentAndApartmentService(repo)

renterAndApartment_blueprint = Blueprint('rentersAndApartment', __name__)


@renterAndApartment_blueprint.route('', methods=['POST'])
def add_renterAndApartment():
    dto = RenterAndApartmentDTO(**request.get_json())
    service.add_renterAndApartment(dto)
    return jsonify({'message': 'enterAndApartment added'}), 201


@renterAndApartment_blueprint.route('', methods=['GET'])
def get_renterAndApartments():
    renterAndApartments = service.get_all_renterAndApartment()
    return jsonify(
        [{'rentersAndApartmentId': c.rentersAndApartmentId,
          'apartmentId': c.apartmentId,
          'custId': c.custId,
          'rentId': c.rentId,
          'DateIncoming': c.dateIncoming,
          'dateExit': c.dateExit
          } for c in renterAndApartments])


@renterAndApartment_blueprint.route('/<int:rentersAndApartmentId>', methods=['GET'])
def get_renterAndApartment(rentersAndApartmentId):
    renterAndApartment = service.get_renterAndApartment_by_id(rentersAndApartmentId)
    return jsonify(
        [{'rentersAndApartmentId': c.rentersAndApartmentId,
          'apartmentId': c.apartmentId,
          'custId': c.custId,
          'rentId': c.rentId,
          'dateIncoming': c.dateIncoming,
          'dateExit': c.dateExit
          } for c in renterAndApartment])


@renterAndApartment_blueprint.route('/<int:rentersAndApartmentId>', methods=['PUT'])
def update_renterAndApartment(rentersAndApartmentId):
    dto = RenterAndApartmentDTO(**request.get_json())
    service.update_renterAndApartment(rentersAndApartmentId, dto)
    return jsonify({'message': 'renterAndApartment updated'})


@renterAndApartment_blueprint.route('/<int:rentersAndApartmentId>', methods=['DELETE'])
def delete_renterAndApartment(rentersAndApartmentId):
    service.delete_renterAndApartment(rentersAndApartmentId)
    return jsonify({'message': 'renterAndApartment deleted'})
