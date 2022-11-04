import React, { useEffect, useState } from "react";

import useConfig from "../../components/useConfig";
import logo from "../logo.svg";
import ConfigContext from "../../components/ConfigContext";

export default function MainPage() {
  const { api } = useConfig();

  const [u, su] = useState([])
  useEffect(() => {
    fetch(api.URL)
      .then(r =>  r.json())
      .then((r) => su(r))
  }, [])

  return (
    <div className="App">
      {
        u.length &&
        u.map((user) => {
          // @ts-ignore
          return (<div>{user?.name}</div>)
        })
      }
    </div>
  );
}
