import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
   'X-RapidAPI-Key': '9cf9405d3dmsh623c46317dd3951p1b59c9jsn6ba5389fdac0',
	'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
}

const baseUrl: string = `https://coinranking1.p.rapidapi.com`;
`https://coinranking1.p.rapidapi.com/search-suggestions?referenceCurrencyUuid=yhjMzLPhuIDl&query=bitcoin`

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
   reducerPath: 'cryptoApi',
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
      getCrypto: builder.query({
         query: () => createRequest(`/coins?limit=500`)
      }),
      getCryptoDetails: builder.query({
         query: (cryptoId) => createRequest(`/coin/${cryptoId}`)
      }),
      getCryptoHistory: builder.query({
         query: ({ cryptoId, timePeriod }) => createRequest(`coin/${cryptoId}/history?timeperiod=${timePeriod}`),
      }),
      getCryptoSearch: builder.query({
         query: (query) => createRequest(`search-suggestions?referenceCurrencyUuid=yhjMzLPhuIDl&query=${query}`),
      }),
   })
});

export const { useGetCryptoQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetCryptoSearchQuery } = cryptoApi;
