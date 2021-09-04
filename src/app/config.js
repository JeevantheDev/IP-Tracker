/* eslint-disable no-undef */
export const env_variables = {
  dev: {
    env_name: process.env.REACT_APP_ENV,
    mapbox_token: process.env.REACT_APP_MAP_BOX_TOKEN,
    sawo_api_key: process.env.REACT_APP_SAWO_API_KEY,
    sawo_secret_key: process.env.REACT_APP_SAWO_SECRET_KEY,
    ip_geo_api_key: process.env.REACT_APP_IP_GEO_API,
    ip_geo_api_path: process.env.REACT_APP_GEO_API_PATH,
  },
  prod: {
    env_name: process.env.REACT_APP_ENV,
    mapbox_token: process.env.REACT_APP_MAP_BOX_TOKEN,
    sawo_api_key: process.env.REACT_APP_SAWO_API_KEY,
    sawo_secret_key: process.env.REACT_APP_SAWO_SECRET_KEY,
    ip_geo_api_key: process.env.REACT_APP_IP_GEO_API,
    ip_geo_api_path: process.env.REACT_APP_GEO_API_PATH,
  },
};
