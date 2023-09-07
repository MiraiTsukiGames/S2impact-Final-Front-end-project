import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (URL) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(URL);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [URL])
  
  return { data, error };
};

export default useFetchData;
