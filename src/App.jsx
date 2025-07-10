import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

import { GetMenuManifest } from "./api/Menu/GetMenuManifest";

async function foo() {
  const MenuManifest = await GetMenuManifest();
  console.log("Manifest: ", MenuManifest);
}

foo();

// const MenuManifest = GetMenuManifest();

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
