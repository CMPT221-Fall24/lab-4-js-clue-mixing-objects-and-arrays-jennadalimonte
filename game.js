// Suspects Array
const suspectsArray = ["Mrs. Peacock", "Mr. Green", "Colonel Mustard", "Professor Plum", "Miss Scarlet", "Mrs. White"];

// Weapons Array
const weaponsArray = ["Candlestick", "Dagger", "Lead Pipe", "Revolver", "Rope", "Wrench", "Poison", "Bat"];

// Rooms Array
const roomsArray = ["Kitchen", "Ballroom", "Conservatory", "Dining Room", "Library", "Lounge", "Hall", "Study", "Billiard Room", "Cellar"];
function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    };
}
function revealMystery(mystery) {
    return `${mystery.suspect} killed Mr. Marist using the ${mystery.weapon} in the ${mystery.room}!`;
}

// Example usage
const mystery = pickMystery();
console.log(revealMystery(mystery));
function showMystery() {
    console.log("Button clicked"); // Add this for debugging
    const mystery = pickMystery();
    document.getElementById('mystery').innerText = revealMystery(mystery);
}
