import axios from 'axios';
const baseUrlDomain = 'https://min-api.cryptocompare.com/data/';
const coinPriceParam = 'pricemulti?fsyms=';
const getAllCoinsParam = 'all/coinlist'
const responseCurrencies =  '&tsyms=BTC,USD,EUR';

export {getCoin};
function getCoin(coin){
  console.log("Making axios getcoin call");
  return axios.get(baseUrlDomain +coinPriceParam + coin  + responseCurrencies)
  .then(response => response.data)
  .catch(error => {alert(JSON.stringify(error))})
}

export {getAllCoins};
function getAllCoins(){
  return axios.get(baseUrlDomain + getAllCoinsParam)
  .then(response => response.data)
}
