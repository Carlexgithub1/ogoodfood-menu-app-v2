import "./MenuPageFace.css";

export default function MenuPageFace({ menuPageId, type, image }) {
    return (
        <div id={menuPageId + image.id} className={`menu-page-face ${type}`}>
            <img src={image.url} alt="Page menu" loading="lazy" />
        </div>
    )
}