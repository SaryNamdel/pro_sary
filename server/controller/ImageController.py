

from flask import request, jsonify, Blueprint

from config import Session
from dto.ImagesDTO import ImagesDTO
from models.Images import Images
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


@images_blueprint.route('/<int:images_id>', methods=['PUT'])
def update_images(images_id):
    dto = ImagesDTO(**request.get_json())
    images = service.update_image(images_id, dto)
    return jsonify({'message': 'Images updated'})


@images_blueprint.route('/<int:images_id>', methods=['DELETE'])
def delete_images(images_id):
    service.delete_image(images_id)
    return jsonify({'message': 'Images deleted'})


@images_blueprint.route('/<int:apartmentId>', methods=["GET"])
def images_by_apartment(apartmentId):
    session = Session()
    try:
        # מביא את כל התמונות של דירה לפי apartmentId
        images = session.query(Images).filter(Images.apartmentId == apartmentId).all()

        # נחזיר JSON כמו: ["home1.jpg", "home2.jpg"]
        return jsonify([img.imgName for img in images])
    finally:
        session.close()

