# server/service/apartmentService.py
from typing import List, Dict, Optional
from exceptions.exceptions import (
    MissingFieldException,
    ItemAlreadyExistsException,
    ItemNotFoundException,
)
from models.Apartment import Apartment


class ApartmentService:
    def __init__(self, repo):
        """
        repo צריך לספק את הממשק הבא:
        - exists_by_city(city_id: int) -> bool         (אופציונלי)
        - add(entity: Apartment) -> Apartment
        - get_all() -> List[Apartment]
        - get_by_id(apartment_id: int) -> Optional[Apartment]
        - update(apartment_id: int, entity: Apartment) -> Optional[Apartment]
        - delete(apartment_id: int) -> Optional[Apartment]
        """
        self.repo = repo

    # ---------- helpers ----------

    def _to_dict(self, a: Apartment) -> Dict:
        """ממיר אובייקט Apartment ל־dict יציב ל־JSON/UI."""
        return {
            "apartmentId": a.apartmentId,
            "cityId": a.cityId,
            "park": bool(a.park),
            "elevator": bool(a.elevator),
            "numRooms": int(a.numRooms) if a.numRooms is not None else 0,
            "numBeds": int(a.numBeds) if a.numBeds is not None else 0,
            "numFloor": int(a.numFloor) if a.numFloor is not None else 0,
            "porch": bool(a.porch),
            "mangal": bool(a.mangal),
            "accessibleness": bool(a.accessibleness),
            "selfDescription": a.selfDescription or "",
            "address": a.address or "",
            "lan": float(a.lan) if a.lan is not None else 0.0,
            "lat": float(a.lat) if a.lat is not None else 0.0,
            "protected_space": bool(a.protected_space),
            "trampoline": bool(a.trampoline),
            "hammock": bool(a.hammock),
            "woodenBench": bool(a.woodenBench),
            "SittingArea": bool(a.SittingArea),
            "isPool": bool(a.isPool),
            "priceToBed": float(a.priceToBed) if a.priceToBed is not None else 0.0,
        }

    def _validate_new(self, dto):
        # ודאי שקיים cityId (לרוב חובה בגלל FK)
        if not hasattr(dto, "cityId") or dto.cityId is None:
            raise MissingFieldException("cityId")

        # אם בריפו שלך יש בדיקה לעיר — השאירי; אם לא, אפשר להסיר
        if hasattr(self.repo, "exists_by_city") and self.repo.exists_by_city(dto.cityId):
            raise ItemAlreadyExistsException(f"cityId={dto.cityId}")

    def _from_dto(self, dto) -> Apartment:
        """בונה אובייקט ORM מתוך DTO/Body שנכנס מהלקוח/קונטרולר."""
        return Apartment(
            apartmentId=getattr(dto, "apartmentId", None),
            cityId=getattr(dto, "cityId", None),
            park=bool(getattr(dto, "park", False)),
            elevator=bool(getattr(dto, "elevator", False)),
            numRooms=int(getattr(dto, "numRooms", 0) or 0),
            numBeds=int(getattr(dto, "numBeds", 0) or 0),
            numFloor=int(getattr(dto, "numFloor", 0) or 0),
            porch=bool(getattr(dto, "porch", False)),
            mangal=bool(getattr(dto, "mangal", False)),
            accessibleness=bool(getattr(dto, "accessibleness", False)),
            selfDescription=(getattr(dto, "selfDescription", "") or ""),
            address=(getattr(dto, "address", "") or ""),
            lan=float(getattr(dto, "lan", 0.0) or 0.0),
            lat=float(getattr(dto, "lat", 0.0) or 0.0),
            protected_space=bool(getattr(dto, "protected_space", False)),
            trampoline=bool(getattr(dto, "trampoline", False)),
            hammock=bool(getattr(dto, "hammock", False)),
            woodenBench=bool(getattr(dto, "woodenBench", False)),
            SittingArea=bool(getattr(dto, "SittingArea", False)),
            isPool=bool(getattr(dto, "isPool", False)),
            priceToBed=float(getattr(dto, "priceToBed", 0.0) or 0.0),
        )

    # ---------- API ----------

    def add_apartment(self, dto) -> Apartment:
        self._validate_new(dto)
        entity = self._from_dto(dto)
        return self.repo.add(entity)

    def get_all_apartments(self) -> List[Apartment]:
        """מחזיר אובייקטים של ORM (לשימוש פנימי)."""
        return self.repo.get_all()

    def get_apartments(self) -> List[Dict]:
        """מחזיר דירות מוכנות ל־JSON (ל־Controllers/בוט)."""
        return [self._to_dict(a) for a in self.repo.get_all()]

    # אליאס נח ל־bot/Controllers שלא רוצים להתעסק בשמות:
    def get_apartments_data(self) -> List[Dict]:
        return self.get_apartments()

    def get_apartment_by_id(self, apartment_id: int) -> Apartment:
        a = self.repo.get_by_id(apartment_id)
        if not a:
            raise ItemNotFoundException(apartment_id)
        return a

    def get_apartment_by_Item(self, item: int) -> Apartment:
        a = self.repo.get_by_id(item)
        if not a:
            raise ItemNotFoundException(item)
        return a

    def update_apartment(self, apartment_id: int, dto) -> Apartment:
        entity = self._from_dto(dto)
        updated = self.repo.update(apartment_id, entity)
        if not updated:
            raise ItemNotFoundException(apartment_id)
        return updated

    def delete_apartment(self, apartment_id: int) -> Apartment:
        deleted = self.repo.delete(apartment_id)
        if not deleted:
            raise ItemNotFoundException(apartment_id)
        return deleted
