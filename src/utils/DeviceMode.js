export function getDeviceMode() {
    const winWidth = document.body.clientWidth; // get the body width

    const page = document.querySelector(".menu-page-face");
    const pageWidth = Number(page.clientWidth);

    const deviceMode = winWidth < pageWidth * 2 ? "mobile" : "desktop";

    // alert("Win width: " + winWidth + "\nPage width: " + pageWidth * 2);
    return deviceMode;
}