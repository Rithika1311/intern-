import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Basic, Documents, Owner } from "../components/Vehicle/Basic";
import VehicleNav from "../components/Vehicle/VehicleNav";

const VehicleForm = () => {

  const [vehicleData, setVehicleData] = useState({
    vehicleId: "",
    vehicleNo: "",
    type: "",
    department: "",
    makeModel: "",
    yearOfMake: "",
    fuelType: "",
    engineNo: "",
    chassisNo: "",
    ownerName: "",
    contactNumber: "",
    ownershipType: "",
    registrationDate: "",
    rcNumber: "",
    odometer: "",
    purchaseDate: "",
    price: "",
    paymentType: "",
    insuranceNumber: "",
    expireDate: "",
    insuranceCompany: "",
    rcDocument: null as File | null,
    insuranceDocument: null as File | null,
    vehicleImage: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "rcDocument" | "insuranceDocument" | "vehicleImage"
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setVehicleData({ ...vehicleData, [field]: e.target.files[0] });
    }
  };

  const handleSubmit = () => {
    console.log(vehicleData);
  };

  return (
    <>
      <VehicleNav />
      <Routes>
        <Route path="basic" element={<Basic vehicleData={vehicleData} handleChange={handleChange} />} />
        <Route path="owner" element={<Owner vehicleData={vehicleData} handleChange={handleChange} />} />
        <Route path="documents" element={<Documents vehicleData={vehicleData} handleFileUpload={handleFileUpload} />} />
        <Route path="*" element={<Navigate to="basic" replace />} />
      </Routes>
      <div className="button">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default VehicleForm;
