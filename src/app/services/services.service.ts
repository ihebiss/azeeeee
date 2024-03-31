import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Service } from '../Service.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private getAllServices = 'http://localhost:9000/service/getAllService';
  private  deleteService ='http://localhost:9000/service/deleteService';
private addService ='http://localhost:9000/service/addService';
private getServiceById ='http://localhost:9000/service/getServiceByID';
private updateService ='http://localhost:9000/service/updateService';
private addImage ='http://localhost:9000/service/addImages';
private likes ='http://localhost:9000/service/likeService';
private dislikes ='http://localhost:9000/service/dislikeService'
private bestService ='http://localhost:9000/service/bestservices';



  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }

    GetAllServices():Observable<any[]>{
      return this.http.get<any[]>(this.getAllServices,this.httpOptions);
    }

    BestService(): Observable<any>{
      return this.http.get(this.bestService,this.httpOptions);
    }

    DeleteService(id : number):Observable<any>{
      return this.http.delete<any>(`${this.deleteService}/${id}`);
    }
    uploadImage(id : number , img : any):Observable<any>{
      return this.http.put<any>(`${this.addImage}/${id}`,img);
    }
    
    LikeService(serviceId: number, userId: number): Observable<Service> {
      const url = `${this.likes}/${serviceId}/${userId}`;
      return this.http.post<Service>(url,this.httpOptions);
    }
    DislikeService(serviceId: number, userId: number): Observable<Service> {
      const url = `${this.dislikes}/${serviceId}/${userId}`;
      return this.http.post<Service>(url,this.httpOptions);
    }


   
   AddService(service : Service , id : number):Observable<Object>{
    return this.http.post(`${this.addService}/${id}`,service);
  }

  getServiceByID(id : number):Observable<any>{
    return this.http.get<any>(`${this.getServiceById}/${id}`,this.httpOptions);
  }

  UpdateService(service : Service , id : number):Observable<Object>{
   service.id_service = id;
    return this.http.put(this.updateService,service);
  }

}
