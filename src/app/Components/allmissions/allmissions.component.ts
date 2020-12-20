import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilterParams } from 'src/app/Models/mission.model';
import { MissionService } from 'src/app/Services/mission.service';

@Component({
  selector: 'app-allmissions',
  templateUrl: './allmissions.component.html',
  styleUrls: ['./allmissions.component.css']
})
export class AllmissionsComponent implements OnInit {
  allMissions: any;
  originalMissionsList: any;
  yearList:any;
  constructor(private service: MissionService,private spinner: NgxSpinnerService ) { }

  ngOnInit() {
    this.spinner.show();
    this.service.getAllMissions().subscribe(data => {
      this.originalMissionsList = this.allMissions = data;
      this.yearList = [...new Set(data.map((year:any) => year.year))].map( (res: any,i) => { return {id:i, year: res}});
      this.spinner.hide();
    }, error =>{
      this.spinner.hide();
    });
  }

  filterMissions(params:FilterParams){
    this.spinner.show();
    if(params.allMissions){
      this.allMissions = this.originalMissionsList;
      this.spinner.hide();
    }else {
      this.service.getFilteredMissions(params).subscribe(mission =>{
        this.allMissions = mission;
        this.spinner.hide();
      });
    }
    

  }
}
