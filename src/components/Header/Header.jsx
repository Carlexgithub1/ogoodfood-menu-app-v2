import "./Header.css";
import Wrapper from "../Wrapper/Wrapper";

export default function Header() {
  return (
    <>
      <header className="header">
        <Wrapper>
          <div className="title">
            <h1>O'Good Food </h1>
            <h1 className="span">Yaounde</h1>
          </div>
        </Wrapper>
      </header>
    </>
  );
}
