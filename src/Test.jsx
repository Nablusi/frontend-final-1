import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Test() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  console.log(params);
  return <pre>sdlkjhfksdjf slkdjfhlsd s;dlkfjh</pre>;
}
