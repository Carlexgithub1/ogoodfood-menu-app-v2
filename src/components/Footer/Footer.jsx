import "./Footer.css";
import Wrapper from "../Wrapper/Wrapper";
import Button from "../Button/Button";
import NavButton from "../NavButton/NavButton";


export default function Footer({ currentPage, pageCount, onPrevBtnClicked, onNextBtnClicked, onResetBtnClicked }) {
  const PrevButtonClicked = () => {
    onPrevBtnClicked();
    console.log("Previous button clicked");
  }

  const NextButtonClicked = () => {
    onNextBtnClicked();
    console.log("Next button clicked");
  }

  const CloseButtonClicked = () => {
    onResetBtnClicked();
    console.log("Close button clicked");
  }

  const isDisabled = {
    prev: () => { return currentPage <= 1; },
    next: () => { return currentPage >= pageCount + 1 }
  }

  return (
    <>
      <footer className="footer">
        <Wrapper>
          <NavButton
            type={"prev"}
            disabled={isDisabled.prev()}
            onClick={PrevButtonClicked} />

          <Button
            id={"btn-reset"}
            className={"btn-reset"}
            onClick={CloseButtonClicked}
          >
            <svg className="icon-reset" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" /></svg>
            {/* <span className="material-symbols-outlined ">
              undo
            </span> */}
          </Button>

          <NavButton
            type={"next"}
            disabled={isDisabled.next()}
            onClick={NextButtonClicked} />
        </Wrapper>
      </footer>
    </>
  );
}
