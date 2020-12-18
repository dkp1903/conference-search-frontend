import React from "react";
import ConferenceCard from "./ConferenceCard";
import Loader from "./Loader";

const ConferenceTile = ({ confData, isLoading }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <section className="wrapper">
      {confData.map((data) => (
        <ConferenceCard key={data.id} data={data} />
      ))}
    </section>
  );
};

export default ConferenceTile;
