import './CryptoChart.scss'
import { CryptoChartLine } from './CryptoChartLine';
import { useGetCryptoHistoryQuery } from '../../../redux/api/cryptoApi';
import { useEffect, useState } from 'react';

export const CryptoChart = ({ cryptoId }) => {

   const [timePeriod, setTimePeriod] = useState<string>('7d');

   const { data: cryptoHistory, isFetching: isFetchHistory} = useGetCryptoHistoryQuery({ cryptoId, timePeriod });
   const history = cryptoHistory?.data.history;
   

   return (
      <div className="crypto-chart">
         { !isFetchHistory && <CryptoChartLine history={history}/>}
         <div className="crypto-chart__buttons">
            <button 
               className="crypto-chart__button"
               onClick={() => setTimePeriod('24h')}
            >
               24h
            </button>
            <button 
               className="crypto-chart__button"
               onClick={() => setTimePeriod('7d')}
            >
               7d
            </button>
            <button 
               className="crypto-chart__button"
               onClick={() => setTimePeriod('30d')}
            >
               30d
            </button>
            <button 
               className="crypto-chart__button"
               onClick={() => setTimePeriod('3m')}
            >
               3m
            </button>
            <button 
               className="crypto-chart__button"
               onClick={() => setTimePeriod('1y')}
            >
               1y
            </button>
            <button 
               className="crypto-chart__button"
               onClick={() => setTimePeriod('5y')}
            >
               5y
            </button>
         </div>
      </div>
   )
}
