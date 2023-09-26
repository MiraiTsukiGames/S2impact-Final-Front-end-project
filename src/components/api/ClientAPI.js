import axios from "axios";
import { useState, useEffect } from "react";
export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading };
};

