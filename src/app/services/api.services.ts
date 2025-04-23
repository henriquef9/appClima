import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRoot } from '../interfaces/root.interface';
import { IForecast } from '../interfaces/forecast/forecast.interface';
import { IList } from '../interfaces/forecast/list.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private key = '57bbaf1ec2b6c90f49e405d389b181f3';

  constructor(private http: HttpClient) { }

  // Método para obter dados da API
  getWeatherByName(location: string): Observable<IRoot> {
    return this.http.get<IRoot>(this.apiUrl+'weather?',
        {params: {
            q: location,
            appid: this.key,
            units: 'metric',
            lang: 'pt_br'
        }
    });
  }

  getWeatherByCoords(latitude: number, longitude: number): Observable<IRoot> {
    return this.http.get<IRoot>(this.apiUrl+'weather?',
        {params: {
            lat: latitude,
            lon: longitude,
            appid: this.key,
            units: 'metric',
            lang: 'pt_br'
        }
    });
  }

  getForecastByName(location: string): Observable<IForecast> {
    return this.http.get<IForecast>(this.apiUrl+'forecast?',
      {params: {
          q: location,
          appid: this.key,
          units: 'metric',
          lang: 'pt_br'
      }
    })
  }

  getForecastByCoords(latitude: number, longitude: number): Observable<IForecast> {
    return this.http.get<IForecast>(this.apiUrl+'forecast?',
        {params: {
            lat: latitude,
            lon: longitude,
            appid: this.key,
            units: 'metric',
            lang: 'pt_br'
        }
    });
  }

 

}
