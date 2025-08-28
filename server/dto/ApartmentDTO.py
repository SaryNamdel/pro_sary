
from typing import Optional


class ApartmentDTO:
    apartmentId: int
    cityId: int
    park: Optional[bool]
    elevator: Optional[bool]
    numRooms: Optional[int]
    numBeds: Optional[int]
    numFloor: Optional[int]
    porch: Optional[bool]
    mangal: Optional[bool]
    accessibleness: Optional[bool]
    selfDescription: Optional[str]
    address: Optional[str]
    lat: Optional[float]
    lan: Optional[float]
    protected_space: Optional[bool]
    trampoline: Optional[bool]
    hammock: Optional[bool]
    woodenBench: Optional[bool]
    SittingArea: Optional[bool]
    isPool: Optional[bool]
    priceToBed: Optional[float]
