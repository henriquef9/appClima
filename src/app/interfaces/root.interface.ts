import { IClouds } from "./clouds.interface"
import { ICoord } from "./coord.interface"
import { IMain } from "./main.interface"
import { ISys } from "./sys.interface"
import { IWeather } from "./weather.interface"
import { IWind } from "./wind.interface"

export interface IRoot {
    coord: ICoord
    weather: IWeather[]
    base: string
    main: IMain
    visibility: number
    wind: IWind
    clouds: IClouds
    dt: number
    sys: ISys
    id: number
    name: string
    cod: number
  }

  
  
