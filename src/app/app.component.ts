import { Component } from '@angular/core';
import { ApiService } from './services/api.services';
import { IRoot } from './interfaces/root.interface';
import { ApiGeolocationService } from './services/api-geolocation.services';
import { IForecast } from './interfaces/forecast/forecast.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{

  climateCurrent: IRoot = {} as IRoot;
  forecast: IForecast = {} as IForecast;

  constructor(
    private apiService: ApiService,
    private apiGeolocation: ApiGeolocationService,
  ){}

  onSearch(search: {nameLocation?: string, coords?: boolean}){
      if(search.nameLocation){
        this.getClimateCurrentByName(search.nameLocation);
        this.getForecast5days(search.nameLocation)
      }else if(search.coords){
        this.getClimateCurrentByUserCoords()
      }
  }

  getClimateCurrentByUserCoords(){

    this.apiGeolocation.getCurrentLocation().then(
      positon => {
       
        this.getClimateCurrentByLatLon(positon.coords.latitude, positon.coords.longitude)

        this.getForecast5daysBYCoords(positon.coords.latitude, positon.coords.longitude)

      }
    ).catch(
      error => {
        console.error('Error ao obter a localização:', error);
    })
  }

  getClimateCurrentByName(location: string){
    console.log('deu get name')
    this.apiService.getWeatherByName(location).subscribe(
      (response) => {
        this.climateCurrent = response;
      },
      (error)=>{
        console.error('Error ao buscar o clima atual da cidade'+location+' ', error);
      }
    )
  }

  getClimateCurrentByLatLon(latitude: number, longitude: number){
    console.log('deu get lat e lon')
    this.apiService.getWeatherByCoords(latitude,longitude).subscribe(
      (response) => {
        this.climateCurrent = response;
      },
      (error)=>{
        console.error('Error ao buscar o clima atual da cidade'+latitude+' e '+longitude, error);
      }
    )
  }

  getForecast5days(location: string){
    this.apiService.getForecastByName(location).subscribe(
      (response)=>{
        this.forecast = response;
        console.log(this.forecast)
      },
      (error)=>{
        console.error('Error ao buscar o clima atual da cidade'+location+' ', error);
      }
    )
  }

  getForecast5daysBYCoords(latitude: number, longitude: number){
    this.apiService.getForecastByCoords(latitude,longitude).subscribe(
      (response)=>{
        this.forecast = response;
        console.log(this.forecast)
      },
      (error)=>{
        console.error('Error ao buscar o clima atual da cidade'+location+' ', error);
      }
    )
  }
  

}
