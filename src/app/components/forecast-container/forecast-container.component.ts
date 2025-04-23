import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IList } from '../../interfaces/forecast/list.interface';

@Component({
  selector: 'app-forecast-container',
  templateUrl: './forecast-container.component.html',
  styleUrl: './forecast-container.component.scss'
})
export class ForecastContainerComponent implements OnChanges {

    @Input({required: true}) weatherList: IList[] = [];

    dates: string[] = [];

    filterWeatherList: IList[] = []

    itemActive: number = 0;

    ngOnChanges(changes: SimpleChanges){

      if(changes['weatherList'] && this.weatherList.length > 0){
        this.dates = [... new Set(this.weatherList.map(item => item.dt_txt.split(" ")[0]))];

        this.itemActive = 0;
        this.filterForecastByDate(this.dates[0]);

        console.log(this.dates, this.filterWeatherList)
      }
    }

    onClickItemFilter(date: string, index: number){
      this.filterForecastByDate(date);
      this.itemActive = index;
    }

    filterForecastByDate(date: string){

      this.filterWeatherList = this.weatherList.filter(item => {
        const dateItem = item.dt_txt.split(" ")[0];
        return dateItem === date;
      })

    }
}
