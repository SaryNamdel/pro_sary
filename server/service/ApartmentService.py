from exceptions.exceptions import MissingFieldException, ItemAlreadyExistsException, ItemNotFoundException
from models.Apartment import Apartment


class ApartmentService:
    def __init__(self, repo):
        self.repo = repo

    def add_apartment(self, dto):
        if not dto.CityId:
            raise MissingFieldException(dto.CityId)
        if self.repo.exists_by_city(dto.CityId):
            raise ItemAlreadyExistsException(dto.CityId)
        self.repo.add(Apartment(description=dto.selfDescription,
                                numBeds=dto.numBeds,
                                cityId=dto.cityId,
                                apartmentId=dto.apartmentId,
                                park=dto.park,
                                elevator=dto.elevator,
                                numRooms=dto.numRooms,
                                floor=dto.numFloor,
                                porch=dto.porch,
                                accessibleness=dto.accessibleness,
                                address=dto.address,
                                lan=dto.lan,
                                lat=dto.lat,
                                air_conditioning=dto.air_conditioning,
                                protected_space=dto.protected_space,
                                priceToBed=dto.priceToBed,
                                trampoline=dto.trampoline,
                                hammock=dto.hammock,
                                woodenBench=dto.woodenBench,
                                SittingArea=dto.SittingArea,
                                isPool=dto.isPool
                                ))

    def get_all_apartments(self):
        # שליפה של רשימת הדירות
        listApartment = self.repo.get_all()
        # # שליפה של רשימת התמונות
        # listImg = ImagesRepository.ImagesRepository.get_all
        # # איחוד הרשימות והחזרה לקונטרולר
        # newList = listAper+listImg
        return listApartment

    def get_apartment_by_id(self, apartment_id):
        apartment = self.repo.get_by_id(apartment_id)
        if not apartment:
            raise ItemNotFoundException(apartment_id)
        return apartment

    def get_apartment_by_Item(self, item):
        apartment = self.repo.get_by_id(item)
        if not apartment:
            raise ItemNotFoundException(item)
        return apartment

    def update_apartment(self, apartment_id, dto):
        apartment = self.repo.update(apartment_id, Apartment(description=dto.selfDescription,
                                                             numBeds=dto.numBeds,
                                                             cityId=dto.cityId,
                                                             apartmentId=dto.apartmentId,
                                                             park=dto.park,
                                                             elevator=dto.elevator,
                                                             numRooms=dto.numRooms,
                                                             floor=dto.numFloor,
                                                             porch=dto.porch,
                                                             accessibleness=dto.accessibleness,
                                                             address=dto.address,
                                                             lan=dto.lan,
                                                             lat=dto.lat,
                                                             air_conditioning=dto.air_conditioning,
                                                             protected_space=dto.protected_space,
                                                             priceToBed=dto.priceToBed,
                                                             trampoline=dto.trampoline,
                                                             hammock=dto.hammock,
                                                             woodenBench=dto.woodenBench,
                                                             SittingArea=dto.SittingArea,
                                                             isPool=dto.isPool
                                                             ))
        if not apartment:
            raise ItemNotFoundException(apartment_id)
        return apartment

    def delete_apartment(self, apartment_id):
        apartment = self.repo.delete(apartment_id)
        if not apartment:
            raise ItemNotFoundException(apartment_id)
