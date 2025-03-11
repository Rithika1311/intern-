import "../../styles/NavBar.css";
import "../../styles/Vehicle/Vehicle.css";

const InputBox = ({
  maxLength,
  name,
  label,
  placeholder,
  required = false,
  value,
  onChange,
}: {
  maxLength: number;
  name: string;
  label:string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="input-container">
      <label className="styled-label">
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <input
        type="text"
        name={name}
        className="styled-input"
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const SaveButton = ({ title }: { title: string }) => {
  return <button className="next-btn">{title}</button>;
};

const CancelButton = ({ title }: { title: string }) => {
  return <button className="cancel-btn">{title}</button>;
};

export { InputBox, SaveButton, CancelButton };
