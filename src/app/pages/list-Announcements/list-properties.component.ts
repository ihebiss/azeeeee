import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/Services/announcement.service';
import { search } from 'src/app/model/search.model';
import { Post } from 'src/app/models/post.model';
import { ForumService } from 'src/app/services/forum.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.scss',
              './list-properties.component.css']
})
export class ListPropertiesComponent implements OnInit{

  Announcements : any ;
  search : search = new search();
  city : any = "";
  maxbudget : any;
  minbudget : any;
  type : any = "";

  post:any[]= [];

  constructor(private announcementService: AnnouncementService,
    private postService:PostService) {
  }

  filter(){
    var id = Number(localStorage.getItem('id'));
    if(this.city == "" && this.type == "" && (this.maxbudget == null || this.maxbudget == "0.0") && (this.minbudget == null || this.minbudget == "0.0")){
     this.announcementService.GetAllAnnouncements()
     .subscribe(data => {
       this.Announcements = data
     });
  
    }else{
      if(this.maxbudget == null ){
          this.maxbudget = "0.0";
      }
      if(this.minbudget == null  ){
        this.minbudget = "0.0";
    }
      this.announcementService.FilterAnnouncements(this.type,this.city,this.maxbudget,this.minbudget).subscribe(data => {
        this.Announcements = data
     });

     if(this.city != ""){
      this.search.searchPhrase = this.city;
      this.announcementService.addsearch(this.search,id).subscribe();
     }

    }
  }


  ngOnInit(){

    this.announcementService.GetAllAnnouncements()
    .subscribe(data => {
      this.Announcements = data
    });
 
  this.postService.getBoostedPost().subscribe(
      data=>{
        console.log(data);
        this.post=data;
       
      } ,
      error => console.log(error)
    )
    console.log(this.post);
    
  }
}
