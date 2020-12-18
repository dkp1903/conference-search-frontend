import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import ConferenceTile from "./components/ConferenceTile";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [confData, setConfData] = useState([]);
  let [filteredConfData, setFilteredConfData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState([]);
  const url = `https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences#`
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setConfData(result.data.paid.concat(result.data.free));
      setFilteredConfData(result.data.paid.concat(result.data.free));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  filteredConfData = confData.filter((conf) =>
    conf.confName.toLowerCase().includes(search)
  );

  return (
    <div className="container">
      <Header />
      <SearchBar getSearch={(q) => setSearch(q)}/>
      <section className="bg">
        <ConferenceTile
          isLoading={isLoading}
          confData={filteredConfData}
          search={search}
        />
      </section>
    </div>
  );
};

export default App;
