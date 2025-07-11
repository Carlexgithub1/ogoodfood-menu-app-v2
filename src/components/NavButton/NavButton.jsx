import "./NavButton.css";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";

export default function NavButton({ type, disabled = false, onClick }) {
  const buttonId = uuidv4();
  var className = `btn-nav btn-${type}`;

  const isPrev = type === "prev";
  const isNext = type === "next";



  return (
    <>
      <Button
        id={buttonId}
        className={className}
        disabled={disabled}
        onClick={onClick}

      // onClick={onClick[type]()}
      >
        {isPrev && (
          <>
            <span className="material-symbols-outlined icon-arrow-left">
              arrow_back_ios
            </span>
            Précédent
          </>
        )}

        {isNext && (
          <>
            Suivant
            <span className="material-symbols-outlined icon-arrow-right">
              arrow_forward_ios
            </span>
          </>
        )}

      </Button >
    </>
  )
}
