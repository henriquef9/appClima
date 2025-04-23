import { NgModule } from "@angular/core";
import { SearchComponent } from "./search/search.component";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CardWeatherCurrentComponent } from './card-weather-current/card-weather-current.component';
import { ForecastContainerComponent } from './forecast-container/forecast-container.component';

@NgModule({
    declarations:[
        SearchComponent,
        CardWeatherCurrentComponent,
        ForecastContainerComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        DatePipe,
    ],
    exports:[
        SearchComponent,
        CardWeatherCurrentComponent,
        ForecastContainerComponent,
    ],
})

export class ComponentsModule {



}