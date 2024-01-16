import React, { useState } from "react";
import Axios from "axios";

const ShowData = () => {
  const [err, setErr] = useState("");
  try {
    (async function fetchData() {
      const data = await Axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      ).then((res) => res);
      console.log(data);
    })();
  } catch (error) {
    setErr(error);
  }

  return <div>{err === "" ? <p className="text-red">{err}</p> : ""}</div>;
};

export default ShowData;
