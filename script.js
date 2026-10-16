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

// 1. Rating label
const placeRating = 4.5;
let ratingLabel = "";

if (placeRating >= 4) {
    ratingLabel = "Highly recommended";
} else if (placeRating >= 2.5) {
    ratingLabel = "Worth a visit";
} else {
    ratingLabel = "Only if you're nearby";
}

const ratingResult = document.getElementById("rating-result");

if (ratingResult) {
    ratingResult.textContent = ratingLabel;
}

// 2. Budget check
const priceLevel = 1;
const isOpen = true;
const isBudgetFriendly = priceLevel <= 2;

const budgetMessage = (isBudgetFriendly && isOpen)
    ? "Good option right now"
    : "Maybe another time";

const budgetResult = document.getElementById("budget-result");

if (budgetResult) {
    budgetResult.textContent = budgetMessage;
}

// 3. Distance note
const isWithinWalkingDistance = true;

const distanceMessage = isWithinWalkingDistance
    ? "Walking distance"
    : "Better to commute";

const distanceResult = document.getElementById("distance-result");

if (distanceResult) {
    distanceResult.textContent = distanceMessage;
}