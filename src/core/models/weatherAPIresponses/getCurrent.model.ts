export interface GetCurrentResponse {
  location: Location;
  current: Current;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface GetCurrentErrorResponse {
  error: {
    code: number;
    message: string;
  };
}

export type GetCurrent = GetCurrentResponse | GetCurrentErrorResponse;

// export type GetCurrentResponseBody = BaseResponse<GetCurrentResponse>;

/* 

{
    "error": {
        "code": 1006,
        "message": "No matching location found."
    }
}
    
{
    "location": {
        "name": "Lecce",
        "region": "Puglia",
        "country": "Italy",
        "lat": 40.3833,
        "lon": 18.1833,
        "tz_id": "Europe/Rome",
        "localtime_epoch": 1735059000,
        "localtime": "2024-12-24 17:50"
    },
    "current": {
        "last_updated_epoch": 1735058700,
        "last_updated": "2024-12-24 17:45",
        "temp_c": 8.8,
        "condition": {
            "text": "Precipitazioni piovose deboli",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/353.png"
        },
        "wind_kph": 24.8,
        "wind_degree": 335,
        "wind_dir": "NNW",
        "precip_mm": 0.32,
        "humidity": 75,
        "cloud": 80
    }
}
  
  */
