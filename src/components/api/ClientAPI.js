import axios from "axios";
import { useState, useEffect } from "react";


const useFetchData = (url) => {
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

export const useCo2FetchData = () => {
  const { data: co2Data, isLoading: co2Loading } = useFetchData(
          "https://global-warming.org/api/co2-api",
        );
        
  return { co2Data, co2Loading };
};

export const useMethaneFetchData = () => {
  const { data: methaneData, isLoading: methaneLoading } = useFetchData(
          "https://global-warming.org/api/methane-api",
        ); 
  return { methaneData, methaneLoading };
};

export const useNo2FetchData = () => {
  const { data: no2Data, isLoading: no2Loading } = useFetchData(
          "https://global-warming.org/api/nitrous-oxide-api",
        );
  return { no2Data, no2Loading };
};

export const useArcticFetchData = () => {
  const { data: polarIceData, isLoading: polarIceLoading } = useFetchData(
          "https://global-warming.org/api/arctic-api",
        );
   return { polarIceData, polarIceLoading };
};

export const useTemperatureFetchData = () => {
  const { data: temperatureData, isLoading: temperatureLoading } = useFetchData(
          "https://global-warming.org/api/temperature-api",
        );
  return { temperatureData, temperatureLoading };
};
