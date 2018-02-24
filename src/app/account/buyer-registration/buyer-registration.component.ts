import { Component,OnInit, Input, OnChanges }                   from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators , NgForm} from '@angular/forms';
import {Registration} from './buyer-registration.model';
import {AccountService} from '../account.service'
 
@Component({
  selector: 'app-buyer-registration',
  templateUrl: './buyer-registration.component.html',
  styleUrls: ['./buyer-registration.component.css']
})
export class BuyerRegistrationComponent implements OnInit {
  buyerRegisterForm: FormGroup;
  constructor(private fb: FormBuilder, private accountService : AccountService) { }
  registrationModel : Registration;
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.buyerRegisterForm = this.fb.group({
      firstName: ['', Validators.required ],
      middleName: [''],
      lastName: ['', Validators.required ],
      emailId: ['', Validators.required],
      phoneNumber: ['', Validators.required ],
      billingAddress: ['', Validators.required ],
      shippingAddress: ['', Validators.required ],
      userName: ['', Validators.required ],
      password: ['', Validators.required ],
      securityQuestion: ['', Validators.required ],
      securityAnswer: ['', Validators.required ],
      city: ['', Validators.required ],
      state: ['', Validators.required ]
    });
  }

  registerSubmit(buyerRegisterForm:FormGroup)  
  {  
    this.registrationModel= new Registration(
    buyerRegisterForm.controls.firstName.value,
    buyerRegisterForm.controls.middleName.value,
    buyerRegisterForm.controls.lastName.value,
    buyerRegisterForm.controls.emailId.value,
    buyerRegisterForm.controls.phoneNumber.value,
    buyerRegisterForm.controls.userName.value,
    buyerRegisterForm.controls.password.value,
    buyerRegisterForm.controls.billingAddress.value,
    buyerRegisterForm.controls.shippingAddress.value,
    buyerRegisterForm.controls.securityQuestion.value,
    buyerRegisterForm.controls.securityAnswer.value,
    buyerRegisterForm.controls.city.value,
    buyerRegisterForm.controls.state.value,
    );
    console.log(this.registrationModel); 

    this.accountService.registerBuyer(this.registrationModel).subscribe(data => {
              console.log(data);
    }, error => {
      console.log(error);
    });

  }
}
