export const getNaverBooks = async ({ query }: { query: string }) => {
  try {
    const res = await fetch(`/v1/search/book.json?query=${query}`, {
      mode: 'cors',
      headers: {
        'X-Naver-Client-Id': process.env.REACT_APP_NAVER_ID as string,
        'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_PASSWORD as string,
      },
    });

    if (res.ok) {
      const { total, display, start, items } = await res.json();

      return { total, display, start, items };
    }

    throw new Error('naver api error');
  } catch (error) {
    console.log(error);
  }
};
