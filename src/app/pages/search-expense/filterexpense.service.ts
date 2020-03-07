import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {configUrls} from '../../sharedservices/config';
@Injectable({
  providedIn: 'root'
})
export class FilterexpenseService {

  constructor(private http:HttpClient) { }

  findDates(body){
    return this.http.post(configUrls.filterExpenseURL ,body)
  }

  findDataByCategories(cat){
    return this.http.get(configUrls.filterByCatURL + '/' + cat)
  }

}
