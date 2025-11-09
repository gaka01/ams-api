import { WebsiteParse } from "./website-parse.js"
import { Constants } from "../constants.js";
import { Cache } from "../cache/cache.js";
import { safeInvoke } from "../utils/function-utils.js";

function updateWeatherCache() {
    return safeInvoke(() => {
        WebsiteParse.getData().then(weatherData => {
            if (!!weatherData) {
                Cache.write(Constants.cacheKeys.weatherData, weatherData);
                console.log('Weather data updated');
            }
        }).catch(error => {
            console.error("Error updating weather data", error);
        });
    });
}

function register() {
    updateWeatherCache();
    setInterval(() => {
        updateWeatherCache();
    }, 900000) //15 mins
}

export const dataPoller = {
    register: register
}