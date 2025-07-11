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
            <span className="material-symbols-outlined icon-reset">
              undo
            </span>
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
