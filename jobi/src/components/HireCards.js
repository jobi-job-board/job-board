import React from "react";

const HireCards = ({ peopleToHire }) => {
  return (
    <div className="hire-img-div flex-col">
      <ul className="hire-cards">
        {peopleToHire?.map((person) => (
          <li key={person.id} className="flex">
            <div className="flex hire-col-left">
              <div>
                <img src={person.avatar} alt="Avatar of a person" />
              </div>
              <div className="hire-job-col">
                <p className="p-strong">{person.name}</p>
                <p>{person.job}</p>
              </div>
            </div>
            <div className="flex-col hire-col-right">
              <button className="btn-square-outline">HIRE ME</button>
              <p>
                <span className="p-opacity">From </span>{" "}
                <span className="p-strong">{person.from}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HireCards;
