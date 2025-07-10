import "./Footer.css";
import Wrapper from "../Wrapper/Wrapper";
import { Button, NavButton } from "../Button/Button";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Wrapper>
          <NavButton type={"prev"} />
          <Button id={"btn-reset"} className={"btn-reset"}>
            <span className="material-symbols-outlined icon-reset">
              undo
            </span></Button>
          <NavButton type={"next"} disabled={false} />
        </Wrapper>
      </footer>
    </>
  );
}
