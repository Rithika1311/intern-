import "../../styles/Shared/Details.css";

const Details = () => {
  return (
    <div className="view-info">
      <h2 className="view-info-main-heading">Truck</h2>
      <div className="view-info-contents">
        <div className="view-info-row">
          <div className="view-info-values">
            <span className="view-info-heading">Vehicle Id</span>
            <span className="view-info-value">#V001</span>
          </div>
          <hr className="view-info-line" />
          <div className="view-info-values">
            <span className="view-info-heading">Vehicle No</span>
            <span className="view-info-value">TN 33 BC 1300</span>
          </div>
          <hr className="view-info-line" />
          <div className="view-info-values">
            <span className="view-info-heading">Type</span>
            <span className="view-info-value">Truck</span>
          </div>
          <hr className="view-info-line" />
          <div className="view-info-values">
            <span className="view-info-heading">Department</span>
            <span className="view-info-value">Interior</span>
          </div>
          <hr className="view-info-line" />
          <div className="view-info-values">
            <span className="view-info-heading">Make</span>
            <span className="view-info-value">Tata</span>
          </div>
          <hr className="view-info-line" />
          <div className="view-info-values">
            <span className="view-info-heading">Year of Make</span>
            <span className="view-info-value">2020</span>
          </div>
          <hr className="view-info-line" />
          <div className="view-info-values">
            <span className="view-info-heading">Model</span>
            <span className="view-info-value">XXX XXX XXX</span>
          </div>
          <hr className="view-info-line" />
          <div className="view-info-values">
            <span className="view-info-heading">Fuel Type</span>
            <span className="view-info-value">Petrol</span>
          </div>
          <hr className="view-info-line" />
        </div>
        <div className="view-info-row">
          <div className="view-info-values">
            <span className="view-info-heading">Engine Number</span>
            <span className="view-info-value">123456789789456123</span>
          </div>
          <hr className="view-info-line" />
          <div className="view-info-values">
            <span className="view-info-heading">Chassis Number</span>
            <span className="view-info-value">123456789987654321</span>
          </div>
          <hr className="view-info-line" />
          <div className="view-info-values">
            <span className="view-info-heading">RC Number</span>
            <span className="view-info-value">123456789</span>
          </div>
          <hr className="view-info-line" />
          <div className="view-info-values">
            <span className="view-info-heading">Odometer</span>
            <span className="view-info-value">123456789</span>
          </div>
          <hr className="view-info-line" />
          <div className="view-info-values">
            <span className="view-info-heading">Owner Name</span>
            <span className="view-info-value">Ragul</span>
          </div>
          <hr className="view-info-line" />
          <div className="view-info-values">
            <span className="view-info-heading">Owner Contact No</span>
            <span className="view-info-value">8778879866</span>
          </div>
          <hr className="view-info-line" />
          <div className="view-info-values">
            <span className="view-info-heading">Insurance Number</span>
            <span className="view-info-value">123456789</span>
          </div>
          <hr className="view-info-line" />
          <div className="view-info-values">
            <span className="view-info-heading">Next Service Date</span>
            <span className="view-info-value">17-12-2025</span>
          </div>
          <hr className="view-info-line" />
        </div>
      </div>
    </div>
  );
};

const HistroyTable = ({ col1 }: { col1: string }) => {
  const tripHistory = [
    { id: "#A001", status: "Active" },
    { id: "#A002", status: "Idle" },
    { id: "#A003", status: "Idle" },
    { id: "#A004", status: "Idle" },
    { id: "#A005", status: "Active" },
    { id: "#A006", status: "Idle" },
    { id: "#A007", status: "Idle" },
    { id: "#A008", status: "Active" },
    { id: "#A009", status: "Active" },
    { id: "#A010", status: "Active" },
  ];

  return (
    <table className="trip-history-table">
      <thead>
        <tr>
          <th>No</th>
          <th>{col1}</th>
          <th>Pickup</th>
          <th>Drop-off</th>
          <th>Duration</th>
          <th>Date</th>
          <th>Purpose</th>
          <th>Status </th>
        </tr>
      </thead>
      <tbody>
        {tripHistory.map((trip, index) => (
          <tr key={trip.id}>
            <td>{index + 1}</td>
            <td>{trip.id}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ProfileContainer = () => {
  return <div className="view-profile-container">Profile</div>;
};

export { Details, HistroyTable, ProfileContainer };
