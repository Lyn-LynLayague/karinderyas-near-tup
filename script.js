const guideName = "Karinderyas Near TUP";
const currentYear = new Date().getFullYear();

let placeCount = 0;

const guideHeading = document.getElementById("guide-name");

if (guideHeading) {
    guideHeading.textContent = guideName;
}

const copyright = document.getElementById("copyright");

if (copyright) {
    copyright.textContent = `© ${currentYear} ${guideName}`;
}

const places = document.querySelectorAll(".place-card");

placeCount = places.length;

const placeCountDisplay = document.getElementById("place-count");

if (placeCountDisplay) {
    placeCountDisplay.textContent = placeCount;
}

console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Place Count:", placeCount);