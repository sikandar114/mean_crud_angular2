import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service'
import { Employee } from '../employee'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public empService:EmpService
  ) { }

  ngOnInit() {
    this.getEmployees();
  }
  employees:Employee;
  getEmployees(){
    this.empService.getEmployees()
        .subscribe(employees=>{
          this.employees = employees;
        })
  }
  deleteEmployee(id){
    this.empService.deleteEmployee(id)
      .subscribe(()=>{
        this.getEmployees();
      });
  }
}
