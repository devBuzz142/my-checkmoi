import { useLocation } from 'react-router-dom';

const useQueries = () => {
  const queries: { [x: string]: string } = {};
  useLocation()
    .search.slice(1)
    .split('&')
    .forEach((q) => {
      const [key, val] = q.split('=');

      queries[key] = val;
    });

  return queries;
};

export default useQueries;
