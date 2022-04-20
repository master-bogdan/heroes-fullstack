import { baseQueryWithParams } from 'utils/redux/baseQuery';

export const heroesServices = baseQueryWithParams('heroes').injectEndpoints({
  endpoints: (build) => ({
    getHeroes: build.query({
      query: () => ({
        method: 'GET',
        url: '/heroes',
      }),
    }),
  }),
});

export const { useGetHeroesQuery } = heroesServices;
