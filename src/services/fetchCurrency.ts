import axios from 'axios';

const fetchExchangeRates = async () => {
  try {
    // Replace with your actual API URL
    const response = await axios.get('https://api.coinbase.com/v2/exchange-rates?currency=EUR');
    
    // Extracting currency and rates from the response
    const { currency, rates } = response.data.data;

    console.log(`Currency: ${currency}`);
    console.log('Rates:', rates);
    
    // Here you can process the rates as needed
    return rates; // or any other data you need
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
  }
};

export default fetchExchangeRates;