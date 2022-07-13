import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";

const createRequest = (options: AxiosRequestConfig) => {
  const defaultOptions: AxiosRequestConfig = {};
  return axios.create(Object.assign({}, defaultOptions, options));
};

export default function useRequestWithState() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const request = createRequest({});

  const api = (url: string, param: string) => {
    setLoading(true);
    return request(url + param)
      .then((data) => {
        return data.data;
      })
      .catch((e) => {
        if (e.response) {
          console.log("Data", e.response.data);
          console.log("status", e.response.status);
          console.log("headers", e.response.headers);
        } else if (e.request) {
          console.log(e.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", e.message);
        }
        console.log(e.config);
        // console.log(e.request.status);

        return setError(e.message);
      })
      .finally(() => setLoading(false));
  };

  return {
    loading,
    api,
    error,
  };
}

// export const useRequest = () => {
//     const request = createRequest({});
//     return request;
//   }
