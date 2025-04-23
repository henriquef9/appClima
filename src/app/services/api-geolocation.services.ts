import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ApiGeolocationService {

  
    constructor(){}

    getCurrentLocation(): Promise<GeolocationPosition>{
        return new Promise((resolve, reject) => {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(resolve,reject);
            }else{
                reject('Geolocalização não é suportada por este navegador.');
            }
        });
    }

}