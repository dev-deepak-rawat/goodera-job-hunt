import "components/popup/Popup.css";

export default function Popup({ children, handleClose }) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        {children}
      </div>
    </div>
  );
}
