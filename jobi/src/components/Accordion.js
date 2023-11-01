'use client';
import { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const Accordion = ({ accordionData }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function onTitleClick(index) {
    setActiveIndex(index);
    setIsOpen((prevState) => !prevState);
  }

  const renderedItems = accordionData.map((item, index) => {
    const open = index === activeIndex ? 'open' : '';

    return (
      <li className="accordion" key={item.id}>
        <div className="flex title" onClick={() => onTitleClick(index)}>
          <h6 className="about-text-h6  mt-30">{item.title}</h6>
          {open === 'open' && isOpen ? (
            <RiArrowDropUpLine />
          ) : (
            <RiArrowDropDownLine />
          )}
        </div>
        <div className={open === 'open' && isOpen ? 'open' : 'content'}>
          <p className="mb-3">{item.content}</p>
        </div>
        <hr />
      </li>
    );
  });

  return (
    <div className="accordion">
      <ul>{renderedItems}</ul>
    </div>
  );
};

export default Accordion;
