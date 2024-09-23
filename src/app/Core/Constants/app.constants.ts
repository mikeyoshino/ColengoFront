import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstants {
  localStorageKeys = {
    AccessToken: 'ls.accessToken'
  };
  apiEndpoint = 'https://localhost:7193';
}
