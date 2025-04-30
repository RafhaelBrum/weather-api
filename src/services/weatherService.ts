import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;

export async function getWeather(city: string): Promise<any> {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ city }?key=${ API_KEY }&unitGroup=metric`;
    const response = await axios.get(url);
    return response.data;
};