import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FilterParams } from '../Models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  allmissionsUrl = 'https://api.spacexdata.com/v3/launches?limit=100'
  constructor(private http: HttpClient) { }
  getAllMissions() {
    return this.http.get(this.allmissionsUrl).pipe(map((missions: any) => {
      return this.formatMission(missions);
    }));
  }

getFilteredMissions(req: any){
  let params = new HttpParams();
  Object.keys(req).forEach(
    (key:string) => req[key] && (params = params.append(key, req[key]))
  );
return this.http.get(this.allmissionsUrl, {params: params}).pipe(map((missions: any) => {
  return this.formatMission(missions);
}));
}

formatMission(missions: any){
  return missions.map((m: any) => {
    return {
      id: m?.flight_number,
      name: m?.mission_name,
      launch: m?.launch_success,
      missionIds: m?.mission_id,
      year: m?.launch_year,
      url: m?.links?.mission_patch_small,
      landing: m?.rocket?.first_stage?.cores[0]?.land_success ? m?.rocket?.first_stage?.cores[0]?.land_success : false ,
    }
  });
}
}
