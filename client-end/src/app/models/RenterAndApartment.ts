export class RenterAndApartment {
    renterAndApartmentId: number = 0
    apartmentId: number = 0
    custId: number = 0
    rentId: number = 0
    dateRentId: number = 0

    constructor(renterAndApartmentId: number, apartmentId: number, custId: number, rentId: number, dateRentId: number) {
        this.renterAndApartmentId = renterAndApartmentId
        this.apartmentId = apartmentId
        this.rentId = rentId
        this.custId= custId
        this.dateRentId = dateRentId
    }
}
