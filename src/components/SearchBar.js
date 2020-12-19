import React, { useState } from "react";
import { getQueriesForElement } from "@testing-library/react";

const SearchBar = ({ getSearch, getFreeConf }) => {
  const [text, setText] = useState("");

  const filterFree =() => {
    getFreeConf()
  }
  
  const onChange = (q) => {
    setText(q);
    getSearch(q);
  };

  return (
    
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Name/City(search in lowercase)"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
      {/* <form>
        <input
          label="free only"
          type="checkbox"
          className="form-control"
          value={text}
          onChange={e => filterFree()}
          autoFocus
        />
      </form> */}
    </section>
    

  );
};

export default SearchBar;
