import React from "react";

const ConferenceCard = ({ data }) => {
  let imageURL = data.imageURL.replace('"', "").replace('"', "")
  return (
    <a href={data.confURl} className="card">
      
      <img src={imageURL} alt="" />
      <div className="confData" >
        <button className="confDate">{data.confStartDate}</button>
        <button className="confType">
        {data.entryType}
      </button>
      <div>
          <div className="confName">{data.confName}</div>
          
          <button class="btn click">
            <a href={data.confUrl}>View</a>
          </button>
        </div>
      </div>
    </a>
  );
};

export default ConferenceCard;
