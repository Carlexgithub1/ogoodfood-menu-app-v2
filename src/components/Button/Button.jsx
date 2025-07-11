import "./Button.css";
import { v4 as uuidv4 } from "uuid";

export default function Button({ id, type, className, disabled = false, onClick, children }) {
  const buttonId = id || uuidv4();
  return (
    <button
      id={buttonId}
      className={`btn ${type ? type : ""} ${disabled ? "disabled" : ""} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

