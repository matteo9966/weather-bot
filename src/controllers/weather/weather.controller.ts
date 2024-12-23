import { RequestHandler } from "express";
import { weatherService } from "../../core/services/weather.service";
export const getCurrentWeatherController:RequestHandler = async (req,res,next)=>{
     const params = req.params;
     const q = params.q;
     if(!q) throw new Error("Invalid City");
    try {
        const weather = await weatherService.getCurrentWeather(q);
        if(!weather) throw new Error("Weather not found");
        res.status(200).json(weather);
    } catch (error) {
        next(error);
    }
};