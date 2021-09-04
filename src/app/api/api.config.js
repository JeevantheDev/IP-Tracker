import { env_variables } from '../config';

const current_env = process.env.REACT_APP_ENV ? process.env.REACT_APP_ENV : 'dev';
const SAWO_API_KEY = env_variables[current_env].sawo_api_key;
const MAP_BOX_TOKEN = env_variables[current_env].mapbox_token;
const IP_GEO_API_KEY = env_variables[current_env].ip_geo_api_key;
const IP_GEO_API_PATH = env_variables[current_env].ip_geo_api_path;

const GEO_API_PATH = `${IP_GEO_API_PATH}?apiKey=${IP_GEO_API_KEY}`;

const sawoConfig = {
  identifierType: 'phone_number_sms',
  apiKey: SAWO_API_KEY,
  containerHeight: '230px',
};

// {   user_id: "6793720e-3acd-4127-8806-18d913cfc686",
//     created_on: "2021-05-28T15:23:14.810000Z",
//     identifier: "+918895464757",
//     identifier_type: "phone_number_sms",
//     verification_token: "AuW5RtyE4xmIrCWCjwr3WmiFWpW3gwixFA2V"
// }

export { sawoConfig, MAP_BOX_TOKEN, GEO_API_PATH };
