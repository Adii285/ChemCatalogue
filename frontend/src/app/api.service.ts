import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  backendUrl = '/api/compound';

  constructor(private http: HttpClient) { }


  // to add a compound to the database

  // addCompound(id:any){
  //   return this.http.post<any>(`${this.backendUrl}`)
  // }

  fetchCompounds(page:number, size:number){
    return this.http.get<any>(`${this.backendUrl}?page=${page}&size=${size}`);
  }

  fetchCompoundById(id:any){
    return this.http.get<any>(`${this.backendUrl}/${id}`);
  }

  updateCompound(id:any, updatedData:any){
    return this.http.patch<any>(`${this.backendUrl}/${id}`,updatedData);
  }

  deleteCompound(id:any){
    return this.http.delete<any>(`${this.backendUrl}/${id}`);
  }
}
