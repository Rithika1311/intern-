import "../../styles/ViewBox.css";
import { useState } from "react";
import "../../styles/NavBar.css";
import leftIcon from "../../Icons/left-arrow.png";
import { CiSearch } from "react-icons/ci";
import { VscAdd } from "react-icons/vsc";

const ViewBox = ({
  heading,
  paragraph,
  color,
}: {
  heading: string;
  paragraph: string;
  color: string;
}) => {
  return (
    <div className="rectangle">
      <h3 className="heading" style={{ color }}>
        {heading}
      </h3>
      <p className="paragraph">{paragraph}</p>
    </div>
  );
};

const SearchBox = () => {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search by" className="search-input" />
      <span className="search-icon">
        <CiSearch style={{ height: "26px", width: "26px" }} />
      </span>
    </div>
  );
};

const FilterBox = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const options = ["All", "Active", "Idle"];
  return (
    <>
      <div className="filter">Filter By</div>
      <div className="filter-box" onClick={() => setIsOpen(!isOpen)}>
        <div className="selected-option">
          {selectedOption}
          <div className="arrow-container">
            <span className="arrow">▼</span>
          </div>
        </div>

        {isOpen && (
          <div className="dropdown-options">
            {options.map((option) => (
              <div
                key={option}
                className="dropdown-item"
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const AddButton = ({ title }: { title: string }) => {
  return (
    <button className="add-btn">
      <span className="plus-icon">
        <VscAdd style={{ width: "16px", height: "16px" }} />
      </span>
      Add {title}
    </button>
  );
};

const BackButton = () => {
  return (
    <button className="back-btn">
      <img src={leftIcon} className="leftIcon" /> Back
    </button>
  );
};

const Heading = ({ title }: { title: string }) => {
  return <div className="heading-of-page">{title}</div>;
};

export { ViewBox, SearchBox, FilterBox, AddButton, BackButton, Heading };
