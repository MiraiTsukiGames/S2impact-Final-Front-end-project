import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (URL) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let response = await axios.get(URL);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [URL]);

  return { data, error, loading };
};

export default useFetchData;
