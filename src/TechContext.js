import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TechContext = createContext();

export const TechContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "d3a68d3a93a54948a016a1553bc4d20c";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=610aa56640124effb62074d59d089698`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <TechContext.Provider value={{ data }}>
      {props.children}
    </TechContext.Provider>
  );
};