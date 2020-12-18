import React from "react";
import ConferenceCard from "./ConferenceCard";
import Spinner from "./Spinner";

const ConferenceTile = ({ confData, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="wrapper">
      {confData.map((data) => (
        <ConferenceCard key={data.id} data={data} />
      ))}
    </section>
  );
};

export default ConferenceTile;
