import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  credentials = {
    email: 'admin@gmail.com',
    password: '123456'
  }
  constructor() { }
  isAuthenticated(obj) {
    return (obj.email === this.credentials.email) && (obj.password === this.credentials.password)
  }
}
