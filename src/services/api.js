import axios from 'axios';

const chartBarAPI  = axios.create({ baseURL: 'https://private-afe609-testefront.apiary-mock.com/anual-result' });
const chartPieAPI  = axios.create({ baseURL: 'https://private-afe609-testefront.apiary-mock.com/anual-percentage' });
const chartLineAPI = axios.create({ baseURL: 'https://private-afe609-testefront.apiary-mock.com/time-data' });

export { chartBarAPI, chartPieAPI, chartLineAPI };
