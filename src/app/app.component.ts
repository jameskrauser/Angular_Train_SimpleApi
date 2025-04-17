import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APIResponse, Customer } from './model/train';
import { FormsModule } from '@angular/forms';
import { TrainService } from './service/train.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  registerObj: Customer = new Customer();
  trainService = inject(TrainService);
  loginObj:any = {
    "phone":  "",
    "password": ""
  }
  loggedUser: Customer = new Customer();

  constructor(){
    const localData = localStorage.getItem('trainApp');
    if ( localData != null ){
        this.loggedUser = JSON.parse(localData);
    }
  }

  onLogff(){
    this.loggedUser = new Customer();
    localStorage.removeItem("trainApp")
  }

  onRgister(){
    this.trainService.createNewCustomer(this.registerObj).subscribe( (res:APIResponse)=>{
      if(res.result){
        alert("Register success");
        this.closeRegister();
      }else {
        alert("Register fail" + res.message );
      }
    })
  }

  onLogin(){
    this.trainService.onLogin(this.loginObj).subscribe( (res:APIResponse)=>{
      if(res.result){
        alert("Login success");
      
        localStorage.setItem('trainApp',  JSON.stringify(res.data));
        this.loggedUser = res.data;

        alert("res.data= "  + res.data);
        alert("this.loggedUser= " + this.loggedUser);

        this.closeLogin();
       
      }else {
        alert("Login fail" + res.message);
      }
    })
  }


  openRegister(){
    const model = document.getElementById("registerModel");
    if ( model != null ) {
        model.style.display = 'block'
    }
  }

  openLogin(){
    const model = document.getElementById("loginModel");
    if ( model != null ) {
        model.style.display = 'block'
    }

  }

 closeRegister(){
    const model = document.getElementById("registerModel");
    if ( model != null ) {
        model.style.display = 'none'
    }
  }

  closeLogin(){
    const model = document.getElementById("loginModel");
    if ( model != null ) {
        model.style.display = 'none'
    }
  }

}
