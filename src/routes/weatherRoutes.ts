import { Router } from "express";
import { getWeatherHandler } from "../controllers/weatherController";

const weatherRouter = Router();

weatherRouter.get('/', getWeatherHandler);

export default weatherRouter;
