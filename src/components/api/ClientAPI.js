import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (URL) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(URL);
        setData(response.data);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchData();
  }, [URL]);

  return { data };
};

export default useFetchData;
