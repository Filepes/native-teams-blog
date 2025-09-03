// previous implementation using axios, diverged since fetch provides revalidation that is built in nextjs

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   headers: {
//     'x-api-key': process.env.NEXT_PUBLIC_NEWS_API_KEY,
//   },
// });

// export const newsApi = {
//   getAllNews: () =>
//     api.get('/everything', {
//       params: {
//         q: 'apple',
//         page: 1,
//         pageSize: 100,
//       },
//     }),
//   getPaginatedNews: (page: number, pageSize: number) =>
//     api.get('/everything', {
//       params: {
//         q: 'apple',
//         page,
//         pageSize,
//       },
//     }),
// };

export const api = async (
  endpoint: string,
  options: RequestInit & { revalidate?: number } = {},
) => {
  const { revalidate, ...rest } = options;

  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...rest,
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_NEWS_API_KEY as string,
      ...(rest.headers || {}),
    },
    next: revalidate ? { revalidate } : undefined,
  });
};

export const newsApi = {
  getAllNews: async () => {
    const res = await api('/everything?q=apple&page=1&pageSize=100', {
      revalidate: 300,
    });
    return res.json();
  },

  getPaginatedNews: async (page: number, pageSize: number) => {
    const res = await api(
      `/everything?q=apple&page=${page}&pageSize=${pageSize}`,
      {
        revalidate: 300,
      },
    );
    return res.json();
  },

  getArticleContent: async (pageUrl: string) => {
    const res = await fetch(`/api/extract-content`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: pageUrl }),
      next: { revalidate: 300 },
    });
    return res.json();
  },
};
