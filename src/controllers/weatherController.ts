import { Request, Response } from "express";
import { getWeather } from "../services/weatherService";

export async function getWeatherHandler(req: Request, res: Response) {
    try {
        const cityRaw = req.query.city;
        if (!cityRaw) {
            res.status(400).json({ error: 'City query parameter is required' });
            return;
        }
        const city = String(cityRaw);
        const data = await getWeather(city);
        console.log(data);

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};