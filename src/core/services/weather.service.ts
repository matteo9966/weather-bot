import { GetCurrentResponse } from "../models/response/getCurrent.model";
import { HttpService,httpService } from "./http.service";
import api from '../../../config/api.json';
class WeatherService {
    constructor(private httpService:HttpService){
    }

    async getCurrentWeather(city:string):Promise<GetCurrentResponse|null>{
        try {
            return this.httpService.get<GetCurrentResponse>(api.weatherApi.current.replace('{q}',city));            
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

export const weatherService = new WeatherService(httpService);

