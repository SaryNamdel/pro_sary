from flask import request, jsonify, Blueprint
from dto.ImagesDTO import ImagesDTO
from repository.ImagesRepository import ImagesRepository
from service.ImagesService import ImagesService

repo = ImagesRepository()
service = ImagesService(repo)

images_blueprint = Blueprint('images', __name__)


@images_blueprint.route('', methods=['POST'])
def add_images():
    dto = ImagesDTO(**request.get_json())
    service.add_image(dto)
    return jsonify({'message': 'Images added'}), 201


@images_blueprint.route('', methods=['GET'])
def get_images():
    images = service.get_all_images()
    return jsonify([{'imgId': i.imgId, 'imgName': i.imgName} for i in images])


@images_blueprint.route('/<int:image_id>', methods=['GET'])
def get_images_by_id(images_id):
    images = service.get_image_by_id(images_id)
    return jsonify({'imgId': images.imgId, 'imgName': images.imgName, 'apartmentId': images.apartmentId})


@images_blueprint.route('/<int:images_id>', methods=['PUT'])
def update_images(images_id):
    dto = ImagesDTO(**request.get_json())
    images = service.update_image(images_id, dto)
    return jsonify({'message': 'Images updated'})


@images_blueprint.route('/<int:images_id>', methods=['DELETE'])
def delete_images(images_id):
    service.delete_image(images_id)
    return jsonify({'message': 'Images deleted'})
