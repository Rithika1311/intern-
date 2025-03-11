import DriverTable from "../components/Shared/ListTable";
import {
  AddButton,
  BackButton,
  FilterBox,
  Heading,
  SearchBox,
  ViewBox,
} from "../components/Shared/ViewBox";
import "../styles/App.css";

function DriverList() {
  return (
    <>
      <div className="container">
        <div className="tables-contents">
          <div className="inside-nav">
            <BackButton />
            <div className="view-boxes">
              <ViewBox heading="All Drivers" paragraph="100" color="#000000" />
              <ViewBox
                heading="Active Drivers"
                paragraph="56"
                color="#13DA01"
              />
              <ViewBox
                heading="Inactive Drivers"
                paragraph="44"
                color="#DA0101"
              />
            </div>
            <div className="contents">
              <Heading title="Driver Details" />
              <SearchBox />
              <div className="filter">
                <FilterBox />
              </div>
              <AddButton title="Driver" />
            </div>
            <DriverTable
              col1="Driver Id"
              col2="Name"
              col3="Contact"
              col4="Department"
              col5="Work Type"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverList;
