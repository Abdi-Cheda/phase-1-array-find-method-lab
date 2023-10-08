function superbowlWin(record) {
    const win = record.find(game => game.result === "W"); // Find a game where the result is a win ("W")
    if (win) {
        return win.year; // If a win is found, return the year
    } else {
        return undefined; // If no win is found, return undefined
    }
}
const record = [
    { year: 1998, result: "W" },
    { year: 2005, result: "L" },
    { year: 2013, result: "W" },
    // ... more game objects ...
];

const winningYear = superbowlWin(record);
console.log(winningYear); // Output: 1998 (or undefined if there are no wins in the record)

