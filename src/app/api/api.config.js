import { env_variables } from '../config';

const current_env = process.env.REACT_APP_ENV ? process.env.REACT_APP_ENV : 'dev';
const SAWO_API_KEY = env_variables[current_env].sawo_api_key;
const IP_GEO_API_KEY = env_variables[current_env].ip_geo_api_key;
const IP_GEO_API_PATH = env_variables[current_env].ip_geo_api_path;

const GEO_API_PATH = `${IP_GEO_API_PATH}?apiKey=${IP_GEO_API_KEY}`;

const sawoConfig = {
  identifierType: 'phone_number_sms',
  apiKey: SAWO_API_KEY,
  containerHeight: '300px',
};

export { sawoConfig, GEO_API_PATH };
