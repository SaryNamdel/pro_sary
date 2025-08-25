export class Customer{
    custId:number=0
    cityId:number=0
    lastName:string = ''
    firstName:string = ''
    phon:string=''
    email:string=''
    pwd:string=''


    constructor( custId:number,cityId:number ,lastName:string,
        firstName:string,  phon:string ,email:string, pwd:string       ){
            this.custId=custId
            this.cityId=cityId
            this.lastName=lastName
            this.firstName=firstName
            this.phon=phon
            this.email=email
            this.pwd=pwd
}

   

}


