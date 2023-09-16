import axios from "axios";
import { useState, useEffect } from "react";


export const useCo2FetchData = () => {
  const [co2Data, setCo2Data] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCo2Data = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://global-warming.org/api/co2-api");
        if (response.ok) {
          setCo2Data(response.data);
        } else {
          throw new Error("No available");
        }
        setLoading(false);
      } catch (error) {
        setLoading(false)
        throw new Error(error);
      }
    };
    fetchCo2Data();
  }, []);
  return { co2Data, isLoading };
}


 export const useMethaneFetchData = () => {
  const [methaneData, setMethaneData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const fetchMethaneData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://global-warming.org/api/methane-api");
      if (response.ok) {
        setMethaneData(response.data);
    } else {
      throw new Error("No available");
    }
      setLoading(false);
    } catch (error) {
      setLoading(false)
      throw new Error(error);
    }
  };
  fetchMethaneData();
  }, []);
  return { methaneData, isLoading };
}

export const useNo2FetchData = () => {
  const [no2Data, setNo2Data] = useState([]);
  const [isLoading, setLoading] = useState(false);
    useEffect(() => {
    const fetchNo2Data = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://global-warming.org/api/nitrous-oxide-api");
      if (response.ok) {
      setNo2Data(response.data);
      } else {
        throw new Error("No available");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false)
      throw new Error(error);
    }
  };
  fetchNo2Data();
  }, []);
  return { no2Data, isLoading };
}

export const useArcticFetchData = () => {
const [polarData, setPolarData] = useState([]); 
const [isLoading, setLoading] = useState(false);
    useEffect(() => {
    const fetchArcticData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://global-warming.org/api/arctic-api");
      if (response.ok) {
        setPolarData(response.data);
      } else {
        throw new Error("No available");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false)
      throw new Error(error);
    }
  };
  fetchArcticData();
  }, []);
  return { polarData, isLoading };
}


export const useTemperatureFetchData = () => {
  const [temperatureData, setTemperatureData] = useState([]); 
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
  const TemperatureFetchData = async () => {
  try {
    setLoading(true);
    const response = await axios.get("https://global-warming.org/api/temperature-api");
    if (response.ok) {
      setTemperatureData(response.data);
    } else {
      throw new Error("No available");
    }
    
    setLoading(false);
  } catch (error) {
    setLoading(false)
    throw new Error(error);
  }
};
TemperatureFetchData();
}, []);
return { temperatureData, isLoading };
}

