
import React from "react";
import { useState, useEffect } from "react";

function useRequest(url: RequestInfo | URL) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(Boolean);
  const [error, setError] = useState();
  const [method, setMethod]=useState(String)

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);     
        const response = await fetch(url);
        const data = await response.json();
        setData(data);      
        setIsLoading(false);
      
    };
    loadData();
  }, []);

  return [data, isLoading, error];
}

export default useRequest;