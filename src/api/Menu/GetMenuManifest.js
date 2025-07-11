import axios from "axios";

export async function GetMenuManifest(next) {
    console.log("Retrieving menu manifest...");

    const response = await axios.get("/menu/manifest.json");
    const manifest = response.data;
    if (next) return next(manifest);
    return manifest;
}