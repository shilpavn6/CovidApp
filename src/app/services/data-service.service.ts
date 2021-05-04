import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { GlobalDataSummary } from '../models/global-data';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private globalUrl = "https://api.covid19india.org/data.json";
  constructor(private http: HttpClient) { }
  getGlobalData() {
    return this.http.get(this.globalUrl);
  }
}
