import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl: string = 'http://localhost:8094/api/products';

  constructor(private http : HttpClient) {
  }

  getAllProducts():Observable<any>{
    // on a pas de BD mais normalement ici ou on va envoyer une req vers la base de données pour récuperer les données
    return this.http.get("http://localhost:8094/api/products");
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
