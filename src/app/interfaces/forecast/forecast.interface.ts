import { ICity } from "./city.interface"
import { IList } from "./list.interface"

export interface IForecast {
    cod: string
    message: number
    cnt: number
    list: IList[]
    city: ICity
  }