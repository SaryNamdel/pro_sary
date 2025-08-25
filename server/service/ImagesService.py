from exceptions.exceptions import MissingFieldException, ItemAlreadyExistsException, ItemNotFoundException
from models.Images import Images


class ImagesService:
    def __init__(self, repo):
        self.repo = repo

    def add_image(self, dto):
        if not dto.imgName:
            raise MissingFieldException(dto.imgName)
        if self.repo.exists_by_title(dto.imgName):
            raise ItemAlreadyExistsException(dto.imgName)
        self.repo.add(Images(imgName=dto.imgName))

    def get_all_images(self):
        return self.repo.get_all()

    def get_image_by_id(self, image_id):
        image = self.repo.get_by_id(image_id)
        if not image:
            raise ItemNotFoundException(image_id)
        return image

    def update_image(self, image_id, dto):
        image = self.repo.update(image_id, Images(imgName=dto.imgName))
        if not image:
            raise ItemNotFoundException(image_id)
        return image

    def delete_image(self, image_id):
        image = self.repo.delete(image_id)
        if not image:
            raise ItemNotFoundException(image_id)