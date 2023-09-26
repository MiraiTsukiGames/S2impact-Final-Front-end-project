import axios from "axios";
import { useState, useEffect } from "react";


export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        let response = await axios.get(url);
        setData(response.data);
        setIsLoading(false);
      } catch(error) {
        setIsLoading(false);
        throw new Error(error);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading };
};

