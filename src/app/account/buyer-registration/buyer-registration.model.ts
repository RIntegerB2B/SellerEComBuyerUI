export class Registration{

    firstName: string;
    middleName: string;
    lastName:string;
    emailId: string;
    phoneNumber: number;
    userName:string;
    password:string;
    billingAddress:string;
    shippingAddress:string;
    isActive: Boolean;
    approvedBySeller:Boolean;
    createdDate: Date;
    securityQuestion : string;
    securityAnswer:string;
    city: string;
    state:string;

    constructor(firstName: string,
        middleName: string,
        lastName:string,
        emailId: string,
        phoneNumber: number,
        userName:string,
        password:string,
        billingAddress:string,
        shippingAddress:string,
        securityQuestion : string,
        securityAnswer:string,
        city: string,
        state:string) {
        this.firstName= firstName;
    this.middleName= middleName;
    this.lastName=lastName;
    this.emailId= emailId;
    this.phoneNumber= phoneNumber;
    this.userName=userName;
    this.password=password;
    this.billingAddress=billingAddress;
    this.shippingAddress=shippingAddress;
    this.securityQuestion = securityQuestion;
    this.securityAnswer=securityAnswer;
    this.city= city;
    this.state=state
        
    }
}
    