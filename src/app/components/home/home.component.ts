import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataservice: DataServiceService) { }
  dailyconfirmed: 0;
  dailydeceased: 0;
  dailyrecovered: 0;
  date: Date;
  dateymd: 0;
  totalconfirmed:0;
  totaldeceased: 0;
  totalrecovered: 0;
  allStatesData:any;
  ngOnInit(): void {
    this.dataservice.getGlobalData()
    .subscribe(resulta=>{
      this.allStatesData=resulta['statewise'];
      console.log(this.allStatesData);
    });
  }

}
