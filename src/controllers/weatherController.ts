import { Request, Response } from "express";

export async function getWeatherHandler(req: Request, res: Response) {
    try {
        const cityRaw = req.query.city;
        if (!cityRaw) {
            res.status(400).json({ error: 'City query parameter is required' });
            return;
        }
        const city = String(cityRaw);

        res.status(200).json({ message: `Searching ${ city } climate` });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};