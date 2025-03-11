import "../../styles/NavBar.css";
import companyLogo from "../../Icons/company-logo.png";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="header">
      <div className="display">
        <img src={companyLogo} className="main-logo" />
        <h1 className="header-heading">SAKTHI INFRA TEX</h1>
      </div>
      <div className="btn">
        <CgProfile
          style={{
            width: "25px",
            height: "25px",
            color: "#fff",
            marginTop: "7px",
          }}
        />
        <button className="header-btn">Admin</button>
      </div>
    </header>
  );
};

export default Header;
