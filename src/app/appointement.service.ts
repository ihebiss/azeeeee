import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointements } from './Appointement.model';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {
  private getAllAppointements = 'http://localhost:9000/Appointment/getAllAppointement';
  private  deleteAppointements ='http://localhost:9000/Appointment/deleteAppointementById';
  private addAppointements ='http://localhost:9000/Appointment/addAppointement';
  private getAppointementById ='http://localhost:9000/Appointment/getAppointementByID';
  private updateAppointement ='http://localhost:9000/Appointment/updateAppointement';
  private pdf ='http://localhost:9000/Appointment/appointements/pdf';





  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }

    GetAllAppointements():Observable<any[]>{
      return this.http.get<any[]>(this.getAllAppointements,this.httpOptions);
    }
    DeleteAppointements(id : number):Observable<any>{
      return this.http.delete<any>(`${this.deleteAppointements}/${id}`);
    }
    PDF(): Observable<Blob> {
      console.log('PDF function called');
      return this.http.get(this.pdf, {
        responseType: 'blob' // Spécifie le type de réponse attendue
      });
    }

    AddAppointements(appointements : Appointements , id : number,ids : number):Observable<Object>{
      return this.http.post(`${this.addAppointements}/${id}/${ids}`,appointements);
    }
    GetAppointementByID(id : number):Observable<any>{
      return this.http.get<any>(`${this.getAppointementById}/${id}`,this.httpOptions);
    }
    UpdateAppointement(appointement : Appointements , id : number):Observable<Object>{
      appointement.id_appointement = id;
       return this.http.put(this.updateAppointement,appointement);
     }
   




}
