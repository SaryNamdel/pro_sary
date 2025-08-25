from flask import request, jsonify, Blueprint
from dto.CustomerAndApartment import CustomerAndApartmentDTO
from repository.CustomerAndApartmentRepository import CustomerAndApartmentRepository
from service.CustomerAndApartmentService import CustomerAndApartmentService

repo = CustomerAndApartmentRepository()
service = CustomerAndApartmentService(repo)

customerAndApartment_blueprint = Blueprint('customerAndApartments', __name__)


@customerAndApartment_blueprint.route('/', methods=['POST'])
def add_customerAndApartment():
    dto = CustomerAndApartmentDTO(**request.get_json())
    service.add_customerAndApartment(dto)
    return jsonify({'message': 'apartment added'}), 201


@customerAndApartment_blueprint.route('/', methods=['GET'])
def get_customerAndApartments():
    customerAndApartments = service.get_all_customerAndApartments()
    return jsonify(
        [{'customerAndApartmentId': c.customerAndApartmentId,
          'apartmentId': c.apartmentId,
          'custId': c.custId,
          'rentId': c.rentId,
          'dateIncoming': c.dateIncoming,
          'dateExit': c.dateExit
          } for c in customerAndApartments])


@customerAndApartment_blueprint.route('/<int:apartmentId>', methods=['GET'])
def get_customerAndApartment(apartmentId):
    customerAndApartment = service.get_customerAndApartment_by_id(apartmentId)
    return jsonify(
        [{'customerAndApartmentId': c.customerAndApartmentId,
          'apartmentId': c.apartmentId,
          'custId': c.custId,
          'dateIncoming': c.dateIncoming,
          'dateExit': c.dateExit
          } for c in customerAndApartment])


@customerAndApartment_blueprint.route('/<int:customerAndApartment_id>', methods=['PUT'])
def update_customerAndApartment(customerAndApartment_id):
    dto = CustomerAndApartmentDTO(**request.get_json())
    customerAndApartment = service.update_customerAndApartment(customerAndApartment_id, dto)
    if not customerAndApartment:
        return jsonify({'message': 'apartment not rented'})
    return jsonify({'message': 'apartment rented'})


@customerAndApartment_blueprint.route('/<int:customerAndApartment_id>', methods=['DELETE'])
def delete_customerAndApartment(customerAndApartment_id):
    service.delete_customerAndApartment(customerAndApartment_id)
    return jsonify({'message': 'apartment deleted'})
