import "./MenuPageFace.css";

export default function MenuPageFace({ id, type, src }) {
    return (
        <div id={id} className={`menu-page-face ${type}`}>
            <img src={src} alt="Page menu" />
        </div>
    )
}