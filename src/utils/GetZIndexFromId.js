export default function GetZIndexFromId(id) {
    // const zIndex = 1 / Number(id) * 1000;
    const zIndex = id * -1;
    return zIndex;
}