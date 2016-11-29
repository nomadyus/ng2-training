import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  users = {};

  constructor(private serverService: ServerService) { }

  getUsers() {
    this.serverService.get('https://jsonplaceholder.typicode.com/users')
      .map(users => {
        return users.map(this.normalizesUser);
      })
      .subscribe(users => { this.users = users });
  }

  normalizesUser(user) {
    return Object.assign({}, user, {});
  }

  getUser(id) {
    this.serverService.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe(user => { this.users[id] = user });
  }

}
