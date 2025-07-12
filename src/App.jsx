import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import { useEffect, useRef, useState } from "react";
import { GetMenuManifest } from "./api/Menu/GetMenuManifest";
import { getDeviceMode } from "./utils/DeviceMode";


function App() {
  const [manifest, setManifest] = useState(null);
  const [deviceMode, setDeviceMode] = useState("mobile");
  const [menuLoaded, setMenuLoaded] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [imageCount, setImageCount] = useState(0);
  // const imageCount = 4;
  const pageCount = deviceMode === "mobile" ? imageCount : Math.ceil(imageCount / 2);

  const loading = useRef(true);

  const updateDeviceMode = () => {
    const newDeviceMode = getDeviceMode();
    console.log("New device mode: ", newDeviceMode);

    if (newDeviceMode !== deviceMode) setDeviceMode(newDeviceMode);
  }

  useEffect(() => {
    if (loading) {

      const fetchMenu = async () => {
        let data = await GetMenuManifest();
        return data;
      }

      fetchMenu().then((data) => {
        setManifest(data);
        setImageCount(data.images.length)
        console.log("Menu manifest", data);
        loading.current = false;
        // updateDeviceMode();
        setTimeout(() => {
          updateDeviceMode();
        }, 1000)
        setTimeout(() => {
          setMenuLoaded(true);
        }, 1100)
      });
    }

  }, [])

  useEffect(() => {
    const checkAndResize = () => {
      closePages();
      updateDeviceMode();
    }
    window.addEventListener("resize", checkAndResize);
    return window.removeEventListener("resize", checkAndResize);
  })

  const goToPrevPage = () => {
    const nextPageNumber = currentPage >= 1 ? currentPage - 1 : currentPage;
    const pageSelector = `#menu-page-${deviceMode}-${nextPageNumber}`;
    const closePageEvent = new CustomEvent("custom:close-page", { detail: { pageSelector } });

    window.dispatchEvent(closePageEvent);
    setCurrentPage(nextPageNumber);
  }

  const goToNextPage = () => {
    const nextPageNumber = currentPage <= pageCount + 1 ? currentPage + 1 : pageCount + 1;
    const pageSelector = `#menu-page-${deviceMode}-${currentPage}`;
    const flipPageEvent = new CustomEvent("custom:flip-page", { detail: { pageSelector } });

    window.dispatchEvent(flipPageEvent);
    setCurrentPage(nextPageNumber);
  }

  const closePages = () => {
    console.log("Closing pages from: ", currentPage, " to: 1");

    for (let i = currentPage; i > 1; i--) {
      console.log("Going to previous page: ", i);

      const page = document.querySelector(`#menu-page-${deviceMode}-${i - 1}`);
      console.log(page);

      const zIndex = Number(page.style.zIndex) * -1;

      page.classList.remove("flipped");
      page.style.zIndex = zIndex;

    }
    setCurrentPage(1);
  }

  return (
    <>
      <div className="container">
        <Header />
        <Menu deviceMode={deviceMode} manifest={manifest} menuLoaded={menuLoaded} />
        <Footer
          currentPage={currentPage}
          pageCount={pageCount}
          onPrevBtnClicked={goToPrevPage}
          onNextBtnClicked={goToNextPage}
          onResetBtnClicked={closePages}
        />
      </div>
    </>
  );
}

export default App;
