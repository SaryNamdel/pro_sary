export class CustomerAndApartment {
    detailsRentId: number = 0
    ApartmentId: number = 0
    custId: number = 0
    dateIncoming:Date=new Date()
    dateExit:Date=new Date()
    rentId:number=0


    constructor(detailsRentId: number,rentId:number, ApartmentId: number, custId: number
        ,dateIncoming:Date, dateExit:Date) {
        this.detailsRentId = detailsRentId
        this.ApartmentId = ApartmentId
        this.custId = custId
        this.rentId = rentId
        this.dateIncoming = dateIncoming
        this.dateExit = dateExit
    }
}
