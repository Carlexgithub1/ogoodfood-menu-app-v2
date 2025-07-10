import "./MenuPage.css";
import MenuPageFace from "../MenuPageFace/MenuPageFace";

export default function MenuPage({ id, images, device = "mobile" }) {
  const MenuPageId = `menu-page-${device}-${id}`;
  return (
    <div id={MenuPageId} className="menu-page">
      {!Array.isArray(images) ? (
        <>
          <MenuPageFace
            id={MenuPageId + images.id}
            type={"front"}
            src={images.url}
          />
          <MenuPageFace
            id={MenuPageId + "blank"}
            type={"back"}
            src={"/menu/image1.jpg"}
          />
        </>
      ) : (
        <>
          <MenuPageFace
            id={MenuPageId + images[0].id}
            type={"front"}
            src={images[0].url}
          />
          <MenuPageFace
            id={MenuPageId + images[1].id}
            type={"back"}
            src={images[1].url}
          />
        </>
      )}
    </div>
  );
}
