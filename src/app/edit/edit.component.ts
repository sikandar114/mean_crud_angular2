import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service'
import { Employee } from '../employee'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
     public empService:EmpService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
    this.getEmployee();
  }

  model = new Employee();
  id = this.route.snapshot.params['id'];
  
  getEmployee(){
    this.empService.getEmployee(this.id)
        .subscribe(employee=>{
          this.model = employee;
        })
  }

  updateEmployee(){
    this.empService.updateEmployee(this.id,this.model)
        .subscribe(()=> this.goBack())
  }

   goBack(){
    this.router.navigate(['/home'])
  }
}
