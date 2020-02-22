import { Component, OnInit } from '@angular/core';
import {ViewExpenseService} from '../view-expense.service';
import {Router} from '@angular/router';
import {HomeserviceService} from '../../home/homeservice.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  constructor(private service : ViewExpenseService ,private router:Router,
    private categoryService:HomeserviceService
    ) { }

  ngOnInit() {
   this.getAllExpense()
  
  }
  sum:any 
  totalOfExpense(){
    let sumArr=[]
    this.expenses.forEach((elem)=>{
      sumArr.push(elem.price)
    })
     this.sum =sumArr.reduce((a ,b)=> a + b ,0)
  }
expenses
  getAllExpense(){
    this.service.getListOfExpense()
    .subscribe((response)=>{
      this.expenses=response
      this.expenses=this.expenses.response
      console.log(this.expenses)
      this.totalOfExpense()
    },(error)=>{
      console.log(error)
    })
  }
idOfRecord:any={}
  deleteRecord(id){
    this.idOfRecord.id=id
    console.log(id)
    this.service.deleteExpense(this.idOfRecord)
    .subscribe((response)=>{
      console.log(response)
      this.getAllExpense()
    },(error)=>{
      console.log(error)
    })

  }

  returnToHome(){
    this.router.navigate(['/home/expenses'])
  }
  expenseDetails:any={}
categories
  editRecord(recordData:any){
    console.log(recordData,'data of record')
    this.expenseDetails=recordData
    console.log(this.expenseDetails)
   this.categoryService.getAllCategories()
   .subscribe((response)=>{
    this.categories=response 
    this.categories=this.categories.response
    this.expenseDetails.category =recordData.expenseCategory
    console.log(this.categories)
   },(error)=>{
     console.log(error)
   })
    
  }
//this function will update the expense 
udpateExpense(){
  this.expenseDetails.expenseCategory = this.updatedCategory
  console.log(this.expenseDetails,'final expense data');
  this.service.updateExpense(this.expenseDetails)
  .subscribe((response)=>{
    console.log(response)
    Swal.fire('Record Updated Successfully.')
    this.getAllExpense()
  },(error)=>{
    console.log(error)
    Swal.fire('Error Occurred while updating the expense')
  })
}
updatedCategory
changeDetect(val:any) {
// console.log(val)
 this.updatedCategory=val
 console.log(this.updatedCategory)
}
}
