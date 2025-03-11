import { Details, HistroyTable, ProfileContainer } from "../Shared/Details";
import { CancelButton, SaveButton } from "../Shared/InputBox";
import { BackButton } from "../Shared/ViewBox";

function Information() {
  return (
    <div className="information-container">
      <BackButton />
      <div className="information-container-header">
        <h1
          style={{
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "20px",
            letterSpacing: "0%",
          }}
        >
          Vehicle Information
        </h1>
        <div className="view-container-button">
          <CancelButton title="Remove" />
          <SaveButton title="Save" />
        </div>
      </div>
      <div className="view-information-container">
        <ProfileContainer />
        <div className="details-view-container">
          <Details />
        </div>
      </div>
      <div className="view-trip-history-container">
        <h3
          style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "20px",
            letterSpacing: "0%",
          }}
        >
          Trip History
        </h3>
        <HistroyTable col1="Vehicle Id" />
      </div>
    </div>
  );
}

export default Information;
