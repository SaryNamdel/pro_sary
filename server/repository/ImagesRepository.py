
from config import Session
from models.Images import Images


class ImagesRepository:
    def __init__(self):
        self.session = Session()

    def get_all(self):
        return self.session.query(Images).all()
