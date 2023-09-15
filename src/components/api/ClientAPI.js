import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (URL) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(URL);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw new Error(error);
      }
    };
    fetchData();
  }, [URL]);

  return { data, isLoading };
};

export default useFetchData;
