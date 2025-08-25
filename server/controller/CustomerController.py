from flask import request, jsonify, Blueprint
from dto.CustomerDTO import CustomerDTO
from repository.CustomerRepository import CustomerRepository
from service.CustomerService import CustomerService

repo = CustomerRepository()
service = CustomerService(repo)

customer_blueprint = Blueprint('customers', __name__)


@customer_blueprint.route('', methods=['POST'])
def add_customer():
    dto = CustomerDTO(**request.get_json())
    service.add_customer(dto)
    return jsonify({'message': 'Customers added'}), 201


@customer_blueprint.route('', methods=['GET'])
def get_customer():
    customers = service.get_all_customers()
    return jsonify(
        [{'custId': c.custId, 'cityId': c.cityId, 'lastName': c.lastName, 'firstName': c.firstName, 'phone': c.phone,
          'email': c.email, 'pwd': c.pwd}
         for c in customers])


@customer_blueprint.route('/<int:customer_id>/<string:pwd>', methods=['GET'])
def get_customer_by_id(customer_id,pwd):
    customers = service.get_customer_by_id_pwd(customer_id,pwd)
    return jsonify({'custId': customers.custId, 'cityId': customers.cityId,
                    'lastName': customers.lastName, 'firstName': customers.firstName, 'phone': customers.phone,
                    'email': customers.email, 'pwd': customers.pwd})


@customer_blueprint.route('/<int:customer_id>', methods=['PUT'])
def update_customer(customer_id):
    dto = CustomerDTO(**request.get_json())
    service.update_customer(customer_id, dto)
    return jsonify({'message': 'Customers updated'})


@customer_blueprint.route('/<int:customer_id>', methods=['DELETE'])
def delete_customer(customer_id):
    service.delete_customer(customer_id)
    return jsonify({'message': 'Customers deleted'})
