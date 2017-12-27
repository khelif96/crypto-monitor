import axios from 'axios';
const baseUrlDomain = 'https://min-api.cryptocompare.com/data/';
const coinPriceParam = 'pricemulti?fsyms=';
const getAllCoinsParam = 'all/coinlist'
const responseCurrencies =  '&tsyms=BTC,USD,EUR';

export {getCoin};
function getCoin(coin){
  return axios.get(baseUrlDomain +coinPriceParam + coin  + responseCurrencies)
  .then(response => response.data)
}

export {getAllCoins};
function getAllCoins(){
  return axios.get(baseUrlDomain + getAllCoinsParam)
  .then(response => response.data)
}
