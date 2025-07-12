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
            <svg className="icon-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
            {/* <span className="material-symbols-outlined ">
              arrow_back_ios
            </span> */}
            Précédent
          </>
        )}

        {isNext && (
          <>
            Suivant
            <svg className="icon-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
            {/* <span className="material-symbols-outlined icon-arrow-right">
              arrow_forward_ios
            </span> */}
          </>
        )}

      </Button >
    </>
  )
}
