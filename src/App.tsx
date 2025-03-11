import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DriverList from "./Driver/DriverList";
import List from "./Vehicle/List";
import VehicleForm from "./Vehicle/VehicleForm";
import Header from "./components/Shared/NavBar";
import Sidebar from "./components/Shared/Sidebar";
import Information from "./components/Vehicle/Info";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Fixed Header */}
        <div style={{ position: "fixed", width: "100%", zIndex: 1000 }}>
          <Header />
        </div>

        {/* Sidebar & Main Content */}
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            marginTop: "60px",
            height: "calc(100vh - 60px)",
          }}
        >
          {/* Sidebar */}
          <div
            style={{
              width: "250px",
              flexShrink: 0,
              height: "100%",
              overflowY: "auto",
            }}
          >
            <Sidebar />
          </div>

          {/* Main Content */}
          <div
            style={{
              flexGrow: 1,
              padding: "20px",
              overflowY: "auto",
              height: "100%",
            }}
          >
            <Routes>
              <Route path="/dashboard" element={<h2>Dashboard Page</h2>} />
              <Route path="/drivers/list" element={<DriverList />} />
              <Route path="/drivers/add" element={<h2>Driver</h2>} />
              <Route path="/vehicles/list" element={<List />} />
              <Route path="/vehicles/add/*" element={<VehicleForm />} />
              <Route path="/trips/list" element={<h2>Trip List</h2>} />
              <Route path="/trips/assign" element={<h2>Assign Trip</h2>} />
              <Route path="/maintenance" element={<h2>Maintenance</h2>} />
              <Route path="/fuel" element={<h2>Fuel</h2>} />
              <Route path="/notifications" element={<Information />} />
              <Route path="/reports/monthly" element={<p>Monthly Report</p>} />
              <Route path="/security" element={<h2>Security</h2>} />
              {/* Default Redirect */}
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
