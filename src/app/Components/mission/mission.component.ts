import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
@Input() allMissions:any;

  constructor() { }

  ngOnInit(): void {
  }

}
