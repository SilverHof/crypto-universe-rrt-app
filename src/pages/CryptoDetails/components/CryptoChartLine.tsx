import React from 'react'
import { 
   Chart as ChartJS, 
   CategoryScale, 
   LinearScale, 
   PointElement,
   LineElement
} from "chart.js"
import { Line } from 'react-chartjs-2';
import './CryptoChartLine.scss'

export const CryptoChartLine = ({ history }) => {

   ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement
   )

   const cryptoPrice: (string)[] = [];
   const cryptoTimestamp: (any)[] = [];

   for (let index = 0; index < history?.length; index++) {
      cryptoPrice.push(history[index].price);
      cryptoTimestamp.push(new Date(history[index].timestamp).toLocaleDateString());
   }

   const data = {
      labels: cryptoTimestamp,
      datasets: [
         {
            label: "Price in USD",
            data: cryptoPrice,
            fill: false,
            backgroundColor: "#ffffff",
            borderColor: "#EDEA52"
         }
      ]
   }

   const options: any = {
      scales: {
         yAxes: [
            {
               ticks: {
                  beginAtZero: true
               }
            }
         ]
      }
   }

   return (
      <div className="crypto-chart-line">
         <Line data={data} options={options} />
      </div>
   )
}

