import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule , HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private http:HttpClient){}

  ngOnInit() {


  }

  empData=[
    {
      emp:{},
    skill:[{}]
  }

];
postData=[];

postPromises=[];

// Start of submit
  sub(){


    var dat={};
    for(let i=0;i<this.empData.length;i++){
      dat=Object.assign({},this.empData[i].emp)
      let restdat={
        skills:this.empData[i].skill.map(val=>{return val['name']})
      }
      dat['others']=restdat;
      this.postData.push(dat);


    }
    // End of loop

console.log(this.postData);
alert("data submitted");

dat=null;


// Start of promises

for(let data of this.postData){
this.postPromises.push(this.postJsonData(data));
}

Promise.all(this.postPromises).then((res)=>{
  console.log(res);
},(err)=>{
  console.log(err);
})

// End of promises

// this.postJsonData(this.postData[0]).then((res)=>{
//     console.log(res);
//   },(err)=>{
//     console.log(err);
//   })

}
// End of submit data



postJsonData(data){
  return this.http.post("http://localhost:3000/users/signUp", data).toPromise();
}





}
