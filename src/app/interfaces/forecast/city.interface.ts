import { ICoord } from "../coord.interface"

export interface ICity {
    id: number
    name: string
    coord: ICoord
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
  }