import { Component , inject , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStation, ITrain, Search } from '../../model/train';
import { TrainService } from '../../service/train.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [DatePipe , FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  
  activatedRoute = inject(ActivatedRoute);
  trainService = inject(TrainService);
  searchData: Search = new Search();
  trainList: ITrain[] = [];
  stationList: IStation[] = [];
  selectTrain?: ITrain;

  constructor(){
     this.activatedRoute.params.subscribe((res:any)=>{
      
        this.searchData.fromStationId = res.fromStationId;
        this.searchData.toStationId   = res.toStationId;
        this.searchData.dateOfTravel  = res.dateOfTravel;
        this.getSearchTrains()
     })
  }

  ngOnInit(): void {
    this.loadAllStation();
  }
 
  loadAllStation(){
    this.trainService.getAllStations().subscribe((res:any) => {
        this.stationList = res.data;
    } )
  }


  getSearchTrains(){
    this.trainService.getTrainsSearch(this.searchData.fromStationId ,  this.searchData.toStationId ,  this.searchData.dateOfTravel).subscribe((res:any)=>{
 
      this.trainList = res.data;
   })
  }

  open(train: ITrain){
    debugger;
    this.selectTrain = train;
    const model = document.getElementById("myBookModal");
    if ( model != null ) {
        model.style.display = 'block'
    }
  }

  close(){
    const model = document.getElementById("myBookModal");
    if ( model != null ) {
        model.style.display = 'none'
    }
  }

}
