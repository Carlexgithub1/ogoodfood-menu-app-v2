import "./Menu.css";
import MenuPage from "../MenuPage/MenuPage";

export default function Menu({ deviceMode, manifest, menuLoaded }) {
  const GetMenuPagesDesktop = () => {
    const pages = [];

    for (let i = 0; i < manifest.images.length; i += 2) {
      // console.log("Get menu pages desktop");
      pages.push(
        <MenuPage
          key={i}
          id={(i / 2) + 1}
          images={[manifest.images[i], manifest.images[i + 1]]}
          deviceMode={deviceMode}
          defaultImage={manifest.blank}
        />
      );
    }

    return pages;
  };

  const GetMenuPagesMobile = () => {
    const pages = [];
    manifest.images.map((image, index) => {
      pages.push(
        <MenuPage
          key={index}
          id={index + 1}
          images={image}
          deviceMode={deviceMode}
          defaultImage={manifest.blank}
        />
      );
    });
    pages.push(
      <img
        key={manifest.blank.id}
        className="blank-image"
        src={manifest.blank.url}
      />
    );

    return pages;
  };

  const GetLoadingPage = () => {
    return (
      <div className="loading-screen hidden">
        Menu en cours de chargement...
      </div>
    );
  };

  if (!manifest) return GetLoadingPage();
  return (
    <>
      <div className={`loading-screen ${menuLoaded ? "hidden" : ""}`}>
        <img width={"64px"} src="/favicon.ico" alt="iconne ogood food" />
        Menu en cours de chargement...
      </div>
      <section className={`menu-container ${deviceMode}`}>
        {deviceMode === "desktop" && GetMenuPagesDesktop()}
        {deviceMode === "mobile" && GetMenuPagesMobile()}
      </section>
    </>
  );
}
