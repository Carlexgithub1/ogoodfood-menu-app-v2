import "./Menu.css";
import MenuPage from "../MenuPage/MenuPage";

export default function Menu() {
  const images = [{
    id: 1, url: "/menu/image1.jpg"
  }, {
    id: 2, url: "/menu/image2.jpg"
  }]
  return (
    <>
      <section className="menu-container">
        <MenuPage id={1} images={images} device="mobile" />
      </section>
    </>
  );
}
