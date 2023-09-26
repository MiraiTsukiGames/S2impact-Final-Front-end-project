import axios from "axios";
import { useState, useEffect } from "react";


export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // Fetches data from the provided URL
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
    fetchData(); // Calls fetchData function when the component mounts or when the URL changes
  }, [url]);

  return { data, isLoading }; // Returns the fetched data and loading state
};

