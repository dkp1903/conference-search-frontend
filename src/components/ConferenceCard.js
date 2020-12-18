import React from "react";

const ConferenceCard = ({ data }) => {
  let imageURL = data.imageURL.replace('"', "").replace('"', "")
    
  
  return (
    <a href={data.confURl} className="card">
      <div style={{ width: "2em", height: "1em" }} className={data.entryType}>
        {data.entryType}
      </div>
      <img src={imageURL} alt="" />
      <div className="confData" >
        <button className="confDate">{data.confStartDate}</button>
        <span className="confName">{data.confName}</span>
        <button class="btn click">
          <a href={data.confUrl}>View</a>
        </button>
      </div>
    </a>
  );
};

export default ConferenceCard;
