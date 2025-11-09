import weatherApi from './weather-api.js';
import metadataApi from './metadata-api.js';

/**
 * @param {Express} app 
 */
function register(app) {
    app.use('/weather', weatherApi);
    app.use('/metadata', metadataApi)
}

export const api = {
    register: register
}
