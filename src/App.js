import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import ConferenceTile from "./components/ConferenceTile";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [confData, setConfData] = useState([]);
  
  let [filteredConfData, setFilteredConfData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState([]);
  const [free, getFree] = useState(false)
  let freeConfData = [];
  const url = `https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences#`
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      const paid = result.data.paid
      const freeConf = result.data.free
      setConfData(paid.concat(freeConf));
      setFilteredConfData(paid.concat(freeConf));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  filteredConfData = confData.filter((conf) => {
    if(search === '')
      return conf
    else if (conf.confName.toLowerCase().includes(search) || conf.city.toLowerCase().includes(search)) {
        return conf
    }
    
  }
  
  );

  freeConfData = confData.filter((conf) => {
    if(conf.entryType == 'Free')
      return conf;
  })

  return (
    <div className="container">
      <Header />
      <SearchBar getSearch={(q) => setSearch(q)}/>
      <div className="filter">
        <form>
          <label style={{margin: '10px'}}>Free only</label>
          <input
            label="free only"
            type="checkbox"
            className="form-control"
            onChange={e => getFree(!free)}
            autoFocus
          />
        </form>
      </div>
      <section className="bg">
        <ConferenceTile
          isLoading={isLoading}
          confData={free? freeConfData: filteredConfData}
          search={search}
        />
      </section>
    </div>
  );
};

export default App;
