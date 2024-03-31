import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/model/Announcement.model';
import { Appointment } from 'src/app/model/Appointment.model';
import { Property } from 'src/app/model/Property.model';
import { Rating } from 'src/app/model/Rating.model';
import { search } from 'src/app/model/search.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
    private uri = 'http://localhost:9000/';




  /*--------------Get All Announcements--------------*/
GetAllAnnouncements():Observable<any[]>{
  return this.http.get<any[]>(this.uri+'Announcement/getAllAnnouncements',this.httpOptions);
}

GetSuggAnnouncements(id : number):Observable<any[]>{
  return this.http.get<any[]>(`${this.uri}/Announcement/SuggestedAnnouncements/${id}`);
}

GetAllAppointments():Observable<any[]>{
  return this.http.get<any[]>(this.uri+'Appointment/getAllAppointement',this.httpOptions);
}


GetAllAnnouncementsTWO():Observable<any[]>{
  return this.http.get<any[]>(this.uri+'Announcement/getAllAnnouncementsTWO',this.httpOptions);
}
  /*--------------Get All Properties--------------*/
GetAllProperties():Observable<any[]>{
  return this.http.get<any[]>(this.uri+'property/getAllProperties',this.httpOptions);
}
  /*--------------Get Announcement by ID--------------*/
GetAnnouncementByID(id : number):Observable<any[]>
{
  return this.http.get<any[]>(`${this.uri}Announcement/getAnnouncementById/${id}`);
}

  /*--------------Get Announcement by ID--------------*/
  GetAppointmentByID(id : number):Observable<any>
  {
    return this.http.get<any>(`${this.uri}Announcement/getAAppointmentById/${id}`);
  }

    /*--------------Get Announcement by ID--------------*/
    GetAppointmentByPropertyID(id : number):Observable<any[]>
    {
      return this.http.get<any[]>(`${this.uri}Announcement/getAppointementsByProperty/${id}`);
    }

  /*--------------Distance and Duration calculation--------------*/
calculationMapBox(lat : number,lon : number,lat1 : number,lon1 : number):Observable<any>{
  return this.http.get<any>(`${this.uri}map/MapBox/${lat}/${lon}/${lat1}/${lon1}`);
}

  /*--------------Filter--------------*/
FilterAnnouncements(type : any,city : any, maxbudget : any , minbudget : any):Observable<any[]>
{
  return this.http.get<any[]>(`${this.uri}Announcement/Filter?city=${city}&typeAnnouncement=${type}&MaxBudget=${maxbudget}&MinBudget=${minbudget}`);
}

  /*--------------Delete Property--------------*/
  DeleteProperty(id : number):Observable<any>{
    return this.http.delete<any>(`${this.uri}property/deleteProperty/${id}`);
  }

  DeleteAppoint(id : number):Observable<any>{
    return this.http.delete<any>(`${this.uri}Announcement/DeleteAppointement/${id}`);
  }


   /*--------------close Property--------------*/
   closeProperty(id : number):Observable<any>{
    return this.http.put<any>(`${this.uri}property/CloseProperty/${id}`,this.httpOptions);
  }

  /*--------------add Property--------------*/
  AddProperty(prop : Property , id : number):Observable<Object>{
    return this.http.post(`${this.uri}property/addProperty/${id}`,prop);
  }

   /*--------------add Property--------------*/
   Payment(token : any,id : number):Observable<Object>{
    return this.http.post(`${this.uri}Paiment/charge/${id}`,token);
  }

  AddAppoint(appoi : Appointment , iduser : number, id : number):Observable<Object>{
    return this.http.post(`${this.uri}Announcement/addAppointement/${iduser}?id=${id}`,appoi);
  }

    /*--------------Update Property--------------*/
    updateProperty(prop : Property , id : number,idAnn : number):Observable<Object>{
      prop.id_property = id;
      return this.http.put(`${this.uri}property/updateProperty/${idAnn}`,prop);
    }

    updaterating(rat : Rating , id : number):Observable<Object>{
      rat.id_rating = id;
      return this.http.put(this.uri+'Rating/updateRating',rat);
    }

    UpdateAppointment(appoint : Appointment , id : number):Observable<Object>{
      appoint.id_appointement = id;
      return this.http.put(this.uri+'Announcement/updateAppointementProperty',appoint);
    }

      /*--------------Get Property by ID--------------*/
GetPropertyByID(id : number):Observable<Property>
{
  return this.http.get<Property>(`${this.uri}property/getPropertyById/${id}`);
}

/*--------------Get Top Announcements--------------*/
GetTopAnnouncements():Observable<any[]> {
return this.http.get<any[]>(`${this.uri}Announcement/TopAnnouncements`);
}
 /*--------------Delete Image--------------*/
 DeleteImage(id : number):Observable<any>{
  return this.http.delete<any>(`${this.uri}property/deleteImage/${id}`);
}

uploadImage(id : number , img : any):Observable<any>{
  return this.http.post<any>(`${this.uri}property/addImage/${id}`,img);
}
  /*--------------add Property--------------*/
  AddAnnouncement(ann : Announcement , id : number):Observable<Object>{
    return this.http.post(`${this.uri}Announcement/addAnnouncement/${id}`,ann);
  }

    /*--------------Update Property--------------*/
    UpdateAnnouncement(ann : Announcement , id : number):Observable<Object>{
      ann.id_announcement = id;
      return this.http.put(this.uri+'Announcement/updateAnnouncement',ann);
    }


  /*--------------add Rating--------------*/
  addRating(rat : Rating , idann : number , iduser : number):Observable<Object>{
    return this.http.post(`${this.uri}Rating/addRating/${idann}/${iduser}`,rat);
  }

  addsearch(rat : search ,  iduser : number):Observable<Object>{
    return this.http.post(`${this.uri}Announcement/addResearch/${iduser}`,rat);
  }

    /*--------------Get All Properties--------------*/
GetAllRatings():Observable<any[]>{
  return this.http.get<any[]>(this.uri+'Rating/getAllRatings',this.httpOptions);
}

  /*--------------Delete Property--------------*/
  DeleteRating(id : number):Observable<any>{
    return this.http.delete<any>(`${this.uri}Rating/deleteRating/${id}`);
  }

}
