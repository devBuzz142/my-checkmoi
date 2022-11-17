import { useLocation } from 'react-router-dom';

const useQueries = () => {
  const queries: { [x: string]: string } = {};
  const loc = useLocation();

  loc.search
    .slice(1)
    .split('&')
    .forEach((q) => {
      const [key, val] = q.split('=');

      queries[key] = val;
    });

  return { loc, queries };
};

export default useQueries;
