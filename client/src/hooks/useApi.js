import { useState, useEffect } from 'react';

export const useApi = (apiCall, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isActive = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await apiCall();
        if (isActive) setData(result);
      } catch (err) {
        if (isActive) setError(err.message);
      } finally {
        if (isActive) setLoading(false);
      }
    };

    fetchData();
    return () => (isActive = false);
  }, dependencies);

  return { data, loading, error };
};