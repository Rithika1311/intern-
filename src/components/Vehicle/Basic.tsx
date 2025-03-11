import { InputBox } from "../Shared/InputBox";
import "../../styles/Vehicle/Vehicle.css";
import { IoCloudUpload } from "react-icons/io5";
import Profile from "./Profile";
import { useState } from "react";

interface BasicProps {
  vehicleData: {
    vehicleId: string;
    vehicleNo: string;
    type: string;
    department: string;
    makeModel: string;
    yearOfMake: string;
    fuelType: string;
    engineNo: string;
    chassisNo: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Basic: React.FC<BasicProps> = ({ vehicleData, handleChange }) => {
  return (
    <>
      <div className="inputs-container">
        <div className="container-profile">
          <Profile />
        </div>
        <div className="inputs">
          <div className="row">
            <InputBox
              name="vehicleId"
              label="Vehicle Id"
              value={vehicleData.vehicleId}
              onChange={handleChange}
              maxLength={8}
              placeholder="Unique ID"
              required
            />
            <InputBox
              name="vehicleNo"
              label="Vehicle No"
              value={vehicleData.vehicleNo}
              onChange={handleChange}
              maxLength={10}
              placeholder="XX 00 XX 0000"
              required
            />
            <InputBox
              name="type"
              label="Type"
              value={vehicleData.type}
              onChange={handleChange}
              maxLength={8}
              placeholder="Type"
              required
            />
          </div>
          <div className="row">
            <InputBox
              name="department"
              label="Department"
              value={vehicleData.department}
              onChange={handleChange}
              maxLength={8}
              placeholder="Department"
              required
            />
            <InputBox
              name="makeModel"
              label="Make & Model"
              value={vehicleData.makeModel}
              onChange={handleChange}
              maxLength={8}
              placeholder="Make & Model"
              required
            />
            <InputBox
              name="yearOfMake"
              label="Year Of Make"
              value={vehicleData.yearOfMake}
              onChange={handleChange}
              maxLength={8}
              placeholder="DD/MM/YYYY"
              required
            />
          </div>
          <div className="row">
            <InputBox
              name="fuelType"
              label="Fuel Type"
              value={vehicleData.fuelType}
              onChange={handleChange}
              maxLength={8}
              placeholder="Fuel Type"
              required
            />
            <InputBox
              name="engineNo"
              label="Engine No"
              value={vehicleData.engineNo}
              onChange={handleChange}
              maxLength={8}
              placeholder="Engine No"
              required
            />
            <InputBox
              name="chassisNo"
              label="Chassis No"
              value={vehicleData.chassisNo}
              onChange={handleChange}
              maxLength={8}
              placeholder="Chassis No"
              required
            />
          </div>
        </div>
      </div>
      <div className="button">
        <button className="cancel-btn">Cancel</button>
        <button className="next-btn">Next</button>
      </div>
    </>
  );
};
interface OwnerProps {
  vehicleData: {
    ownerName: string;
    contactNumber: string;
    ownershipType: string;
    registrationDate: string;
    rcNumber: string;
    odometer: string;
    purchaseDate: string;
    price: string;
    paymentType: string;
    insuranceNumber: string;
    expireDate: string;
    insuranceCompany: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Owner: React.FC<OwnerProps> = ({ vehicleData, handleChange }) => {
  return (
    <>
      <div className="inputs-container">
        <div className="inputs">
          <div className="row">
            <InputBox
              name="ownerName"
              label="Owner Name"
              value={vehicleData.ownerName}
              onChange={handleChange}
              maxLength={8}
              placeholder="Owner Name"
              required
            />
            <InputBox
              name="contactNumber"
              label="Contact Number"
              value={vehicleData.contactNumber}
              onChange={handleChange}
              maxLength={8}
              placeholder="Contact Number"
              required
            />
            <InputBox
              name="ownershipType"
              label="Ownership Type"
              value={vehicleData.ownershipType}
              onChange={handleChange}
              maxLength={8}
              placeholder="Ownership Type"
              required
            />
          </div>
          <div className="row">
            <InputBox
              name="registrationDate"
              label="Registration Date"
              value={vehicleData.registrationDate}
              onChange={handleChange}
              maxLength={8}
              placeholder="DD/MM/YYYY"
              required
            />
            <InputBox
              name="rcNumber"
              label="RC Number"
              value={vehicleData.rcNumber}
              onChange={handleChange}
              maxLength={8}
              placeholder="RC Number"
              required
            />
            <InputBox
              name="odometer"
              label="Odometer"
              value={vehicleData.odometer}
              onChange={handleChange}
              maxLength={8}
              placeholder="Odometer"
              required
            />
          </div>
          <div className="row">
            <InputBox
              name="purchaseDate"
              label="Purchase Date"
              value={vehicleData.purchaseDate}
              onChange={handleChange}
              maxLength={8}
              placeholder="DD/MM/YYYY"
              required
            />
            <InputBox
              name="price"
              label="Price"
              value={vehicleData.price}
              onChange={handleChange}
              maxLength={8}
              placeholder="Price"
              required
            />
            <InputBox
              name="paymentType"
              label="Payment Type"
              value={vehicleData.paymentType}
              onChange={handleChange}
              maxLength={8}
              placeholder="Payment Type"
              required
            />
          </div>
          <div className="row">
            <InputBox
              name="insuranceNumber"
              label="Insurance Number"
              value={vehicleData.insuranceNumber}
              onChange={handleChange}
              maxLength={8}
              placeholder="Insurance Number"
              required
            />
            <InputBox
              name="expireDate"
              label="Expire Date"
              value={vehicleData.expireDate}
              onChange={handleChange}
              maxLength={8}
              placeholder="DD/MM/YYYY"
              required
            />
            <InputBox
              name="insuranceCompany"
              label="Insurance Company"
              value={vehicleData.insuranceCompany}
              onChange={handleChange}
              maxLength={8}
              placeholder="Insurance Company"
              required
            />
          </div>
        </div>
      </div>
      <div className="button">
        <button className="cancel-btn">Cancel</button>
        <button className="next-btn">Next</button>
      </div>
    </>
  );
};

interface DocumentsProps {
  vehicleData: {
    rcDocument: File | null;
    insuranceDocument: File | null;
    vehicleImage: File | null;
  };
  handleFileUpload: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "rcDocument" | "insuranceDocument" | "vehicleImage"
  ) => void;
}

const Documents: React.FC<DocumentsProps> = ({ vehicleData, handleFileUpload }) => {
  const [previewUrls, setPreviewUrls] = useState<{
    rcDocument: string | null;
    insuranceDocument: string | null;
    vehicleImage: string | null;
  }>({
    rcDocument: null,
    insuranceDocument: null,
    vehicleImage: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: "rcDocument" | "insuranceDocument" | "vehicleImage") => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Generate a preview URL
      const previewUrl = URL.createObjectURL(file);
      setPreviewUrls((prev) => ({ ...prev, [field]: previewUrl }));

      // Call the parent handler
      handleFileUpload(e, field);
    }
  };

  return (
    <>
      <div className="documents-container">
        <div className="upload-docs">
          {/* RC Document Upload */}
          <p className="text-of-docs">Upload RC Document</p>
          <label className="row-docs" htmlFor="rcDocument">
            <IoCloudUpload style={{ marginRight: "6px" }} />
            <span>{vehicleData.rcDocument ? vehicleData.rcDocument.name : "Upload RC Document"}</span>
          </label>
          <input
            id="rcDocument"
            type="file"
            className="documents-file-input"
            accept="image/*,application/pdf"
            onChange={(e) => handleFileChange(e, "rcDocument")}
            style={{ display: "none" }}
          />

          {/* Insurance Document Upload */}
          <p className="text-of-docs">Upload Insurance Document</p>
          <label className="row-docs" htmlFor="insuranceDocument">
            <IoCloudUpload style={{ marginRight: "6px" }} />
            <span>{vehicleData.insuranceDocument ? vehicleData.insuranceDocument.name : "Upload Insurance Document"}</span>
          </label>
          <input
            id="insuranceDocument"
            type="file"
            className="documents-file-input"
            accept="image/*,application/pdf"
            onChange={(e) => handleFileChange(e, "insuranceDocument")}
            style={{ display: "none" }}
          />

          {/* Vehicle Image Upload */}
          <p className="text-of-docs">Upload Vehicle Image</p>
          <label className="row-docs" htmlFor="vehicleImage">
            <IoCloudUpload style={{ marginRight: "6px" }} />
            <span>{vehicleData.vehicleImage ? vehicleData.vehicleImage.name : "Upload Vehicle Image"}</span>
          </label>
          <input
            id="vehicleImage"
            type="file"
            className="documents-file-input"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "vehicleImage")}
            style={{ display: "none" }}
          />
        </div>

        {/* File Preview Section */}
        <div className="preview-docs">
          <h3>Preview Document</h3>
          {previewUrls.rcDocument && (
            <div>
              <p>RC Document:</p>
              {previewUrls.rcDocument.endsWith(".pdf") ? (
                <embed src={previewUrls.rcDocument} width="100%" height="200px" />
              ) : (
                <img src={previewUrls.rcDocument} alt="RC Preview" width="200" />
              )}
            </div>
          )}
          {previewUrls.insuranceDocument && (
            <div>
              <p>Insurance Document:</p>
              {previewUrls.insuranceDocument.endsWith(".pdf") ? (
                <embed src={previewUrls.insuranceDocument} width="100%" height="200px" />
              ) : (
                <img src={previewUrls.insuranceDocument} alt="Insurance Preview" width="200" />
              )}
            </div>
          )}
          {previewUrls.vehicleImage && (
            <div>
              <p>Vehicle Image:</p>
              <img src={previewUrls.vehicleImage} alt="Vehicle Preview" width="200" />
            </div>
          )}
        </div>
      </div>

      <div className="button">
        <button className="cancel-btn">Cancel</button>
        <button className="next-btn">Next</button>
      </div>
    </>
  );
};


export {Basic, Owner, Documents};


