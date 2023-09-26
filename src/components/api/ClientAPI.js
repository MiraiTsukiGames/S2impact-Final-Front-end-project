import axios from "axios";
import { useState, useEffect } from "react";

const useFetchData = (url) => {
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

export const useCo2FetchData = () => {
 const { data: co2Data, isLoading: isCo2Loading } = useFetchData(
          "https://global-warming.org/api/co2-api",
        );
  return { co2Data, isCo2Loading };
};

export const useMethaneFetchData = () => {
const { data: methaneData, isLoading: isMethaneLoading } = useFetchData(
          "https://global-warming.org/api/methane-api",
        );
        
  return { methaneData, isMethaneLoading };
};

export const useNo2FetchData = () => {
  const { data: no2Data, isLoading: isNo2Loading } = useFetchData(
          "https://global-warming.org/api/nitrous-oxide-api",
        );
  return { no2Data, isNo2Loading };
};

export const useArcticFetchData = () => {
  const { data: polarData, isLoading: isPolarIceLoading } = useFetchData(
          "https://global-warming.org/api/arctic-api",
        );
   return { polarData, isPolarIceLoading };
};

export const useTemperatureFetchData = () => {
        const { data:  temperatureData, isLoading: isTemperatureLoading } = useFetchData(
          "https://global-warming.org/api/temperature-api",
        );
  return { temperatureData, isTemperatureLoading };
};

