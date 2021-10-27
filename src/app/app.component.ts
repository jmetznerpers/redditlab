import { Component } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Reddit } from './reddit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redditdblab';
  posts? : Reddit;


constructor(private http: HttpClient){}

 getPosts(){
   this.http.get<any>('https://www.reddit.com/r/aww/.json?limit=100').subscribe( 
     (result: Reddit) =>{
       this.posts = result;
       console.log(result); 
     }
   );
 }
}