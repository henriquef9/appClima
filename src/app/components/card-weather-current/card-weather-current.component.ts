import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRoot } from '../../interfaces/root.interface';

@Component({
  selector: 'app-card-weather-current',
  templateUrl: './card-weather-current.component.html',
  styleUrl: './card-weather-current.component.scss'
})
export class CardWeatherCurrentComponent {

  @Input({required: true}) weatherCurrent: IRoot = {} as IRoot;
  
  @Output('reload') reloadEmitt = new EventEmitter<string>();

  dateCurrent: Date = new Date();

  round(value: number){
    return Math.round(value);
  }

  onClickReload(){

    let location = this.weatherCurrent.name+','+this.weatherCurrent.sys.country

    this.reloadEmitt.emit(location);
  }


}
