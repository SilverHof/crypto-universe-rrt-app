import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = `1a83edf3cb01414abeb8a5b91bcf3a87`;
const baseUrl: string = `https://newsapi.org/v2/`;

export const exampleApi = createApi({
   reducerPath: 'exampleApi',
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
      getExample: builder.query({
         query: (topic) => `everything?q=${topic}&apiKey=${API_KEY}`
      }),
   })   
});

export const { useGetExampleQuery } = exampleApi;