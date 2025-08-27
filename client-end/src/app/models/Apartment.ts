
export class Apartment {

    apartmentId?: number = 0
    cityId?: number = 0
    park: boolean = false
    elevator: boolean = false
    numRooms: number = 0
    numBeds: number = 0
    numFloor: number = 0
    porch: boolean = false
    mangal: boolean = false
    accessibleness: boolean = false
    selfDescription: string = ''
    address: string = ''
    lan: number = 0.0//לבדוק איך מגדירים מספר עשרוני
    lat: number = 0.0//לבדוק איך מגדירים מספר עשרוני
    protected_space: boolean = false
    trampoline: Boolean = false
    hammock: Boolean = false
    woodenBench: Boolean = false
    SittingArea: Boolean = false
    isPool: Boolean = false
    priceToBed: number = 0.0
    // מוסיפים לשימוש בצד לקוח
    images?: string[];


    // constructor(selfDescription: string, address: string, numBeds: number,
    //     CostId: number, CityId: number, park: boolean, elevator: boolean, numRooms: number, porch: boolean,
    //     accessibleness: boolean, lan: number, lat: number, numFloor: number,priceToBed:number,
    //     protected_space: boolean, trampoline: Boolean,
    //     hammock: Boolean,
    //     woodenBench: Boolean,
    //     SittingArea: Boolean,
    //     isPool: Boolean = false) {
    //     this.selfDescription = selfDescription
    //     this.numBeds = numBeds
    //     this.CostId = CostId
    //     this.CityId = CityId
    //     this.park = park
    //     this.elevator = elevator
    //     this.numRooms = numRooms
    //     this.numFloor = numFloor
    //     this.porch = porch
    //     this.accessibleness = accessibleness
    //     this.address = address
    //     this.lan = lan
    //     this.lat = lat
    //     this.protected_space = protected_space
    //     this.trampoline = trampoline
    //     this.hammock = hammock
    //     this.woodenBench = woodenBench
    //     this.SittingArea = SittingArea
    //     this.isPool = isPool
    //     this.priceToBed= priceToBed
    // }


}