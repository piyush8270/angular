import { Component, OnInit } from '@angular/core';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

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
  sub(){


    var dat={};
    for(let i=0;i<this.empData.length;i++){
      dat=Object.assign({},this.empData[i].emp)
          this.postData.push(dat);
    }
    // End of loop

console.log(this.postData);




// Start of promises

for(let data of this.postData){

this.postPromises.push(this.postJsonData(data));
window.location.href = "http://localhost:3000/users/dashboard";

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
  return this.http.post("http://localhost:3000/users/signin", data).toPromise();

}

}
