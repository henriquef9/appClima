import { IClouds } from "../clouds.interface"
import { IMain } from "../main.interface"

import { ISys } from "../sys.interface"
import { IWeather } from "../weather.interface"
import { IWind } from "../wind.interface"

export interface IList {
    dt: number
    main: IMain
    weather: IWeather[]
    clouds: IClouds
    wind: IWind
    visibility: number
    pop: number
    sys: ISys
    dt_txt: string
  }