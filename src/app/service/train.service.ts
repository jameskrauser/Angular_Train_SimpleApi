import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, Customer } from '../model/train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  //get api from your .net web api , make sure port as same as your .net project
  apiUrl: string = 'http://localhost:5103/api/TrainApp/';

  constructor(private http: HttpClient) { }


  getAllStations(){
     return this.http.get(`${this.apiUrl}GetAllStations`);
  }

  getTrainsSearch( from:number, to:number, date:string ){
    return this.http.get(`${this.apiUrl}GetTrainsBetweenStations?departureStationId=${from}&arrivalStationId=${to}&departureDate=${date}`);
  }

  //click Register button
  createNewCustomer(obj: Customer){
    return this.http.post<APIResponse>(`${this.apiUrl}AddUpdatePassengers`,obj);
  }

  onLogin(obj: any){
    return this.http.post<APIResponse>(`${this.apiUrl}login`,obj);
  }


}
