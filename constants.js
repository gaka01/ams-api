export const Constants = {
    amsUrl: 'http://46.35.176.12/Weather_Summary_Vantage_Pro_Plus.htm',
    dataTimezone: 'UTC+02:00',
    cacheKeys: {
        weatherData: 'weather-data'
    },
    metadata: {
        units: {
            temperature: {
                name: "celsius",
                displayText: "°C"
            },
            humidity: {
                name: "relative humidity percentage",
                displayText: "%"
            },
            pressure: {
                name: "hectopascal",
                displayText: "hPa"
            },
            windSpeed: {
                name: "meters per second",
                displayText: "m/s"
            },
            rainAmmount: {
                name: "milimeters (1mm = 1 liter / sq m)",
                displayText: "mm"
            },
            rainIntensity: {
                name: "milimeters per hour",
                displayText: "mm/h"
            },
            sunRadiation: {
                name: "watts per square meter",
                displayText: "W/m²"
            }
        }
    }
}