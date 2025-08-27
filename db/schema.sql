
CREATE DATABASE SystemApartments
GO
------------------------------------------------------------------------------------

USE SystemApartments

CREATE TABLE Area
(
	areaId int primary key not null,
	areaName nvarchar(30) not null,
)
GO

CREATE TABLE Cities
(
	cityId int primary key not null,
	areaId int  references Area not null ,
	cityName nvarchar(20)not null
)
GO

CREATE TABLE Customers
(
	custId int identity(1,1) primary key not null,
	cityId int  references Cities not null,
	lastName nvarchar(20) not null,
	firstName nvarchar(20) not null,
	phone nvarchar(20) ,
	email nvarchar(50) not null,
	pwd nvarchar(50)
)
GO


CREATE TABLE Apartments
(
	apartmentId int primary key not null IDENTITY,
	cityId int references Cities not null,
	park bit,
	elevator bit,
	numRooms int not null,
	numBeds int not null,
	numFloor int not null,
	porch bit,
	mangal bit,
	accessibleness bit,
	selfDescription nvarchar(50),
    address nvarchar(50),
	lat DECIMAL(9,6),
	lan DECIMAL(9,6),
    protected_space bit,
	trampoline bit,
	hammock bit,
	woodenBench bit,
	SittingArea bit,
	isPool bit,
	priceToBed money
)
GO

CREATE TABLE Images
(
	imgId int identity(1,1) primary key not null, 
	apartmentId int references Apartments not null,
	imgName nvarchar(50)
)
GO

create TABLE Renters 
(
	rentId int identity(1,1) primary key not null,
	apartmentId int  references Apartments not null ,
	lastName nvarchar(20)not null,
	firstName nvarchar(20)not null,
	phone nvarchar(20),
	email nvarchar(50)not null,
	pwd nvarchar(50)
)
GO

CREATE TABLE CustomerAndApartment
(
	customerAndApartmentId int identity(1,1) primary key not null, 
	apartmentId int references Apartments not null,
	custId int references Customers not null,
	rentId int references Renters not null,
	dateIncoming date not null,
	dateExit date not null
)
GO

CREATE TABLE RentersAndApartment
(
	rentersAndApartmentId int identity(1,1) primary key not null, 
	apartmentId int references Apartments not null,
	rentId int references Renters not null,
	custId int references Customers not null,
	dateIncoming date not null,
	dateExit date not null
)
GO


