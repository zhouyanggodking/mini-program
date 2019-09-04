import alcoholStocks from 'stocks/alcoholStocks';
import assuranceStocks from 'stocks/assuranceStocks';
import securityStocks from 'stocks/securityStocks';

const getTradeCenter = (code) => {
  if (/^[023]/.test(code)) {
    return 'sz';
  }
  return 'sh';
};

// kType:  min, daily, weekly, monthly
const getKChartUrl = (code, kType) => {
  const tradeCenter = getTradeCenter(code);
  return `http://image.sinajs.cn/newchart/${kType}/n/${tradeCenter}${code}.gif`;
}

const getStocksBySector = (sector) => {
  let stocks = [];
  if (sector === 'alcohol') {
    stocks = alcoholStocks;
  } else if (sector === 'assurance') {
    stocks = assuranceStocks;
  } else if (sector === 'security') {
    stocks = securityStocks;
  } 

  // process stock data
  return stocks.map(stock => {
    return {
      name: stock.name,
      code: stock.code,
      minK: getKChartUrl(stock.code, 'min'),
      dailyK: getKChartUrl(stock.code, 'daily'),
      weeklyK: getKChartUrl(stock.code, 'weekly'),
      monthlyK: getKChartUrl(stock.code, 'monthly'),
    };
  });
}

export default {
  getStocksBySector
}
