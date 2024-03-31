import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private getAllProducts = 'http://localhost:9000/product/getAllProducts';
  private  deleteProducts ='http://localhost:9000/product/deleteProduct';
  private addProducts ='http://localhost:9000/product/addProduct';
  private getProductsById ='http://localhost:9000/product/getProductByid';
  private updateProducts ='http://localhost:9000/product/updateProduct';
  private AddProductimage ='http://localhost:9000/product/addProductImage';
  private search ='http://localhost:9000/product/getProductsByClosestColor';

  constructor(private http : HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }

    GetAllProducts():Observable<any[]>{
      return this.http.get<any[]>(this.getAllProducts,this.httpOptions);
    }
    Search(r: any , g: any , b: any):Observable<any[]>{
      return this.http.get<any[]>(`${this.search}/${r}/${g}/${b}`);
    }
    DeleteProducts(id : number):Observable<any>{
      return this.http.delete<any>(`${this.deleteProducts}/${id}`);
    }

      AddProducts(product : Product ):Observable<Object>{
    return this.http.post(`${this.addProducts}`,product);
  }
  GetProductsByID(id : number):Observable<any>{
    return this.http.get<any>(`${this.getProductsById}/${id}`,this.httpOptions);
  }
  UpdateProducts(product : Product , id : number):Observable<Object>{
    product.id_product = id;
     return this.http.put(this.updateProducts,product);
   }

   uploadImage(id : number , img : any):Observable<any>{
    return this.http.post<any>(`${this.AddProductimage}/${id}`,img);
  }


}
