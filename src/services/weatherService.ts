import axios from "axios";
import dotenv from 'dotenv';
import client from "../config/redisClient";

dotenv.config();
const API_KEY = process.env.API_KEY;
const redisClient = client;

export async function getWeather(city: string): Promise<any> {
    const cachedData = await redisClient.get(city);
    if (cachedData) {
        return JSON.parse(cachedData);
    }
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ city }?key=${ API_KEY }&unitGroup=metric`;
    const response = await axios.get(url);

    await redisClient.set(city, JSON.stringify(response.data), { EX: 3600 });

    return response.data;
};