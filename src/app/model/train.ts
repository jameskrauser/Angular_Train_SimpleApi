export interface IStation {
        stationID: number;
        stationName:string;
        stationCode:string;
    
}

export interface APIResponse {
        message: number;
        result:boolean;
        data:any;
}

export class Customer {
        passengerID: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        password: string;

        constructor(){
                this.passengerID = 0;
                this.firstName = '';
                this.lastName = '';
                this.email= '';
                this.phone = '';
                this.password = '';

        }
 }



 
      

export class Search {
        fromStationId: number;
        toStationId:number;
        dateOfTravel:string;

        constructor(){
                this.fromStationId = 0;
                this.toStationId = 0;
                this.dateOfTravel = '';
        }
    
}



export interface ITrain {
        stationID: number;
        stationName:string;
        stationCode:string;
        departureTime:string;
        departureStationName:string;
}