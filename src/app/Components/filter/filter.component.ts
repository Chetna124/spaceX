import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FilterParams } from 'src/app/Models/mission.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() yearList: any;
  @Output() filterParams = new EventEmitter<FilterParams>();
  selectedYear: any;
  launchSuccess!: boolean | undefined;
  landSuccess!: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  setYear(id: any) {
    this.selectedYear = this.yearList.filter((y: any) => y.id === id)[0];
    this.filterMission();
  }

  setLaunchSuccess(event: any) {
    this.launchSuccess = event.target.value;
    this.filterMission();
  }

  setLandSuccess(event: any) {
    this.landSuccess = event.target.value;
    this.filterMission();
  }

  filterMission(allMissions?: boolean) {
    const filterReq: FilterParams = {
      launch_year: this.selectedYear ? this.selectedYear.year : null,
      launch_success: this.launchSuccess,
      land_success: this.landSuccess,
    }
    if(allMissions){
      filterReq.allMissions = true;
    }
    this.filterParams.emit(filterReq);
  }

  getAllMissions() {
    this.landSuccess = this.launchSuccess = this.selectedYear = undefined;
    this.filterMission(true);
  }
}
