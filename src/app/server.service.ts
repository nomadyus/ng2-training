import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {

  constructor(private http:Http) { }

  get(url:string) {
    return this.http.get(url).map(res => res.json());
  }

  post(url:string, data) {
    return this.http.post(url, data);
  }

  put() {}

  delete() {}

}
