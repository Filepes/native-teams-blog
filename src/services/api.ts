import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_NEWS_API_KEY,
  },
});

export const newsApi = {
  getAllNews: () =>
    api.get('/everything', {
      params: {
        q: 'apple',
        page: 1,
        pageSize: 100,
      },
    }),
  getPaginatedNews: (page: number, pageSize: number) =>
    api.get('/everything', {
      params: {
        q: 'apple',
        page,
        pageSize,
      },
    }),
};
