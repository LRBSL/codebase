import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestResolverService {

  constructor(private http: HttpClient) { }

  // POST request sending function
  realizarHttpPost(url: string, bodyObject: Object) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(url, bodyObject, {
      headers: headers
    });
  }

  // GET request sending function
  realizarHttpGet(url: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.get(url, {
      headers: headers
    });
  }
}
