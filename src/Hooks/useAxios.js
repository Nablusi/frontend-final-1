import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url, method = "GET", postData = null) => {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: method,
          url: url,
          data: postData, // Include the data in the request
        });
        setRes(response.data);
      } catch (e) {
        setError(e);
      }
    };

    fetchData();
  }, [url, method, postData]);

  return { res, error };
};

export default useAxios;
