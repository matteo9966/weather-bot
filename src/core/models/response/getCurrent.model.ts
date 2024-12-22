import { BaseResponse } from "../server/BaseResponse";

export interface GetCurrentResponse {
    location: Location
    current: Current
  }
  
  export interface Location {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
  }
  
  export interface Current {
    last_updated_epoch: number
    last_updated: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: Condition
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    windchill_c: number
    windchill_f: number
    heatindex_c: number
    heatindex_f: number
    dewpoint_c: number
    dewpoint_f: number
    vis_km: number
    vis_miles: number
    uv: number
    gust_mph: number
    gust_kph: number
  }
  
  export interface Condition {
    text: string
    icon: string
    code: number
  }
  
  export type GetCurrentResponseBody = BaseResponse<GetCurrentResponse> ;

  /* 
  {
    "location": {
        "name": "Lecce",
        "region": "Puglia",
        "country": "Italy",
        "lat": 40.3833,
        "lon": 18.1833,
        "tz_id": "Europe/Rome",
        "localtime_epoch": 1734805774,
        "localtime": "2024-12-21 19:29"
    },
    "current": {
        "last_updated_epoch": 1734804900,
        "last_updated": "2024-12-21 19:15",
        "temp_c": 9.7,
        "temp_f": 49.5,
        "is_day": 0,
        "condition": {
            "text": "Clear",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
            "code": 1000
        },
        "wind_mph": 18.8,
        "wind_kph": 30.2,
        "wind_degree": 324,
        "wind_dir": "NW",
        "pressure_mb": 1020.0,
        "pressure_in": 30.12,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 62,
        "cloud": 8,
        "feelslike_c": 6.2,
        "feelslike_f": 43.1,
        "windchill_c": 6.2,
        "windchill_f": 43.1,
        "heatindex_c": 9.7,
        "heatindex_f": 49.5,
        "dewpoint_c": 2.9,
        "dewpoint_f": 37.2,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 0.0,
        "gust_mph": 28.8,
        "gust_kph": 46.4
    }
}
  
  */