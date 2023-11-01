import React from "react";
import { peopleToHire, accordionData } from "../constants";
import Accordion from "./Accordion";
import HireCards from "./HireCards";
import hireInputBox from "../assets/homepage-section/hire-input-box.png";

const Hire = () => {
  return (
    <section className="hire">
      <div className="accordion-wrapper flex flex-50 gap">
        <div className="hire-left">
          <HireCards peopleToHire={peopleToHire} />
          <div className="hire-input">
            <img src={hireInputBox} alt="Input Box" />
          </div>
        </div>
        <div className="hire-right">
          <p>FIND FREELANCER</p>
          <h2>Hire top talents</h2>
          <div className="accordion">
            <Accordion accordionData={accordionData} />
            <button className="btn-square">Explorer All</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;
