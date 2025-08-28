export interface Renters{
    rentId:number
    apartmentId:number
    lastName:string 
    firstName:string 
    phon:string
    email:string
    pwd:string
}

  
  export interface LoginDto {
    username: string;
    pwd: string;
  }
  
  export interface RegisterDto {
    username: string;
    pwd: string;
    // שדות נוספים לטופס הרשמה: phone, email, ...
  }