import { Component, OnInit } from '@angular/core';

import {FilterexpenseService} from '../filterexpense.service';
import {HomeserviceService} from '../../home/homeservice.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { promise } from 'protractor';
@Component({
  selector: 'app-searchexpense',
  templateUrl: './searchexpense.component.html',
  styleUrls: ['./searchexpense.component.css']
})
export class SearchexpenseComponent implements OnInit {
  expense:any={}
  
 
  
  constructor(private service : FilterexpenseService, 
    private catService:HomeserviceService,
    private router :Router) { }

  ngOnInit() {
    this.getCategories()
  }
  //search result by categories
  searchByCategory(val){
    console.log(val)
  }
//get ccategories 
  categories:any
  getCategories(){
    this.catService.getAllCategories()
    .subscribe((response)=>{
      this.categories=response
      this.categories=this.categories.response
      
      console.log(this.categories)
      
    },(error)=>{
      console.log(error)
    })
  }

 dateFilterResult:any
search(){
  
  
  //formating the from date ...
  let date =this.expense.fromdate 
  let dates = new Date(date).toISOString();
  //console.log(dates)
  let fromDate = dates.split('T')
  let userFromDate = fromDate[0]
  //console.log(userFromDate)

  //formating the end date ...
  let endDate =this.expense.todate 
  let getEndDate = new Date(endDate).toISOString();
  //console.log(endDate)
  let splitDate = getEndDate.split('T')
  let userEndDate = splitDate[0]
  //console.log(userEndDate)

  let dateData:any={}
  dateData.fromDate = userFromDate
  dateData.endDate= userEndDate

  console.log(dateData)
  this.service.findDates(dateData)
  .subscribe((response)=>{

    this.dateFilterResult=response
    this.dateFilterResult=this.dateFilterResult.response
    console.log(this.dateFilterResult)

    this.dateFilterResult.reduce((a,b)=>{
      this.sum = {price : a.price + b.price}
      this.sum= JSON.stringify(this.sum)
       return this.sum
    });

    if(this.dateFilterResult.length ==0){
      Swal.fire('No result found, try with some other dates')
    }
  },(error)=>{
    console.log(error)
  })
}
expenseDetails:any={}
goToHome(){
  this.router.navigate(['/home/expenses'])
}
sum:any=0
searchByCat(item){
  
  console.log(item,' this is the item ')
  this.service.findDataByCategories(item)
  .subscribe((response)=>{
    this.dateFilterResult=response
    this.sum = this.dateFilterResult.sum[0].sum
    console.log(this.sum,'this is sum')
    this.dateFilterResult=this.dateFilterResult.response
    
  },(error)=>{
    console.log(error)
  })

}
}
