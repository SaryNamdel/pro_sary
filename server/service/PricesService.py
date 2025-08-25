from exceptions.exceptions import ItemAlreadyExistsException, MissingFieldException, ItemNotFoundException
from models.Prices import Price


class PriceService:
    def __init__(self, repo):
        self.repo = repo

    def get_price_by_id(self, price_id):
        price = self.repo.get_by_id(price_id)
        if not price:
            raise ItemNotFoundException(price)
        return price

    def update_price(self, price_id, dto):
        price = self.repo.update(price_id, Price(typeOfPrice=dto.typeOfPrice))
        if not price:
            raise ItemNotFoundException(price_id)
        return price

    def delete_price(self, price_id):
        price = self.repo.delete(price_id)
        if not price:
            raise ItemNotFoundException(price_id)
