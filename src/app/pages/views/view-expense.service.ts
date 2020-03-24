import { Injectable } from '@angular/core';
import {configUrls} from '../../sharedservices/config'
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ViewExpenseService {

  constructor(private http:HttpClient) { }
//this function will get all the data
  getListOfExpense(emailquery){
    return this.http.get(configUrls.getAllExpenseURL +'/?email=' + emailquery)
    .pipe(
      catchError(this.handleError)
    )
  }

  //this funciton will find monthly expense of the user

  getCurrentMonthlyExpense(userEmail){
    return this.http.get(configUrls.getCurrMonthURL + '/?email=' + userEmail)
    .pipe(catchError(this.handleError))
  }
  //this will handle the error
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      console.log(error,'error from client side')
      //errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      console.log('server side error')
      //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    return throwError(errorMessage);
  }

  //this will delete the record
  deleteExpense(body){
    return this.http.post(configUrls.deleteExpenseURL,body)
    .pipe(
      catchError(this.handleError)
    )
  }

  //this will update the record
  updateExpense(body){
    return this.http.post(configUrls.updateExpenseURL,body)
    .pipe(
      catchError(this.handleError)
    )
  }
}
