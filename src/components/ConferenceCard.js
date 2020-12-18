import React from "react";

const ConferenceCard = ({ data }) => {
  let imageURL = data.imageURL.replace('"', "").replace('"', "")
  return (
    <a href={data.confURl} className="card">
      
      <img src={imageURL} alt="" />
      <div className="confData" >
        <button className="confDate">{data.confStartDate}</button>
        <div style={{ width: "4em", height: "2em" }} className={data.entryType}>
        {data.entryType}
      </div>
        <div className="confName">{data.confName}</div>
        
        <button class="btn click">
          <a href={data.confUrl}>View</a>
        </button>
      </div>
    </a>
  );
};

export default ConferenceCard;
