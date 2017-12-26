import axios from 'axios';
const baseUrlDomain = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=';
const responseCurrencies =  '&tsyms=BTC,USD,EUR';

export {getCoin};
function getCoin(coin){
  return axios.get(baseUrlDomain + coin  + responseCurrencies)
  .then(response => response.data)
}
