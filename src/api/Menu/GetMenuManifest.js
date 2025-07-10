import axios from "axios";

export async function GetMenuManifest() {
    // const manifest = {
    //     path: "/menu",
    //     images: [
    //         { id: 1, url: "image1.jpg" },
    //         { id: 2, url: "image2.jpg" },
    //         { id: 3, url: "image3.jpg" },
    //         { id: 4, url: "image4.jpg" },
    //         { id: 5, url: "image5.jpg" },
    //         { id: 6, url: "image6.jpg" }
    //     ],
    //     blank: { id: 999, url: "blank.jpg" }
    // }

    const response = axios.get("/menu/manifest.json");
    const manifest = (await response).data;
    return manifest;
}