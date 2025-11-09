import express from 'express';
import { Cache } from '../cache/cache.js';
import { Constants } from '../constants.js';
const router = express.Router();

/**
 * @returns {WeatherData}
 */
function weatherData() {
    return Cache.read(Constants.cacheKeys.weatherData) || {};
}

router.get('/', (req, res) => {
    return res.json(weatherData());
});

router.get('/current', (req, res) => {
    return res.json(weatherData().current);
});

router.get('/current/:field', (req, res) => {
    const currentData = weatherData().current;
    if (!currentData[req.params.field]) {
        return res.status(404).send('Field not found');
    }
    return res.json(currentData[req.params.field]);
});

export default router;