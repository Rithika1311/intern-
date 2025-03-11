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

function List() {
  return (
    <>
      <div className="container">
        <div className="tables-contents">
          <div className="inside-nav">
            <BackButton />
            <div className="view-boxes">
              <ViewBox heading="All Vehiles" paragraph="100" color="#000000" />
              <ViewBox
                heading="Active Vehicles"
                paragraph="56"
                color="#13DA01"
              />
              <ViewBox
                heading="Inactive Vehicles"
                paragraph="44"
                color="#DA0101"
              />
            </div>
            <div className="contents">
              <Heading title="Vehicle Details" />
              <SearchBox />
              <div className="filter">
                <FilterBox />
              </div>
              <AddButton title="Vehicle" />
            </div>
            <DriverTable
              col1="Vehicle Id"
              col2="Vehicle No"
              col3="Owner Name"
              col4="Department"
              col5="Vehicle Type"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
