//build an axios API to post data to the server

import axios from "axios";

const AxiosPost = (url, data, setPostRes, setSignFlag) => {
  const postData = async () => {
    try {
      const res = await axios.post(url, data, {
        headers: { "Content-Type": "application/json" },
      });
      setSignFlag(1);
      setPostRes(res);
    } catch (err) {
      console.log("err", err);
      setSignFlag(1);
      setPostRes(err);
    }
  };
  postData();
};
export { AxiosPost };
