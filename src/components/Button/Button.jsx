import { v4 as uuidv4 } from "uuid";
import "./Button.css";

export function Button({ children, type, disabled = false, id, className }) {
  const buttonId = id || uuidv4();
  return (
    <button
      id={buttonId}
      className={`btn ${type ? type : ""} ${disabled ? "disabled" : ""
        } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export function NavButton({ type, disabled = false }) {
  const buttonId = uuidv4();
  const className = "btn-nav ";
  return (
    <>
      {type === "next" && (
        <>
          <Button
            id={"btn-next-" + buttonId}
            className={className + "btn-next"}
            disabled={disabled}
          >
            Suivant
            <span className="material-symbols-outlined icon-arrow-right">
              arrow_forward_ios
            </span>
          </Button>
        </>
      )}
      {type === "prev" && (
        <>
          <Button
            id={"btn-prev-" + buttonId}
            className={className + "btn-prev"}
            disabled={disabled}
          >
            <span className="material-symbols-outlined icon-arrow-left">
              arrow_back_ios
            </span>
            Précédent
          </Button>
        </>
      )}
    </>
  );
}
