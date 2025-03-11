import "../../styles/DriverTable.css";
const drivers = [
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

const DriverTable = ({
  col1,
  col2,
  col3,
  col4,
  col5,
}: {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
}) => {
  return (
    <table className="driver-table">
      <thead>
        <tr>
          <th className="no-table">No</th>
          <th>{col1}</th>
          <th>{col2}</th>
          <th>{col3}</th>
          <th>{col4} </th>
          <th>{col5}</th>
          <th>Status </th>
        </tr>
      </thead>
      <tbody>
        {drivers.map((driver, index) => (
          <tr key={driver.id}>
            <td>{index + 1}</td>
            <td>{driver.id}</td>
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

export default DriverTable;
