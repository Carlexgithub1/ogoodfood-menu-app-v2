import "./MenuPage.css";
import MenuPageFace from "../MenuPageFace/MenuPageFace";
import GetZIndexFromId from "../../utils/GetZIndexFromId";

export default function MenuPage({ id, deviceMode = "mobile", images, defaultImage, flipped = false }) {

  const menuPageId = `menu-page-${deviceMode}-${id}`;

  return (
    <div
      id={menuPageId}
      className={`menu-page ${flipped ? "flipped" : ""}`}
      style={{ zIndex: GetZIndexFromId(id) }}
    >

      {!Array.isArray(images) ? (
        <>
          <MenuPageFace
            menuPageId={menuPageId}
            image={images}
            type={"front"}
          />
          <MenuPageFace
            menuPageId={menuPageId}
            image={defaultImage}
            type={"back"}
          />
        </>
      ) : (
        <>
          <MenuPageFace
            menuPageId={menuPageId}
            image={images[0]}
            type={"front"}
          />
          <MenuPageFace
            menuPageId={menuPageId}
            image={images[1]}
            type={"back"}
          />
        </>
      )}
    </div>
  );
}
