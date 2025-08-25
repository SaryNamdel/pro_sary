class RenterAndApartmentDTO:
    def __init__(self, rentersAndApartmentId, ApartmentId, custId, dateIncoming, dateExit, rentId):
        self.rentersAndApartmentId = rentersAndApartmentId
        self.ApartmentId = ApartmentId
        self.custId = custId
        self.rentId = rentId
        self.dateIncoming = dateIncoming
        self.dateExit = dateExit
