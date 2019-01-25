import { Component, OnInit } from '@angular/core';
import { HttpClientModule , HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.getEmployeeData("").then((res=>{
      console.log(JSON.parse(JSON.stringify(res)));
      this.employeeData=JSON.parse(JSON.stringify(res));
    }));
  }

  taskHeading=[{
    "title":"First Name"
  },{
    "title":"Last name"
  },{
    "title":"User name"
  },{
    "title":"Phone No"
  },{
    "title":"Email-address"
  },{
    "title":"Designation"  
  }]
  employeeData=[];

//Sart of get Employee
  getEmployeeData(userName=""){
    var promises=new Promise((resolve,reject)=>{
this.http.get(`http://localhost:3000/employee/${userName}`).subscribe(res=>{
  if(res)
  console.log(res);
  resolve(res)
},(err)=>{
  reject("Error in Getting");
})
    })
    return promises;
  }
  //End of Get Employee

  

}
