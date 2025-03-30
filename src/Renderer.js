export const gameCanvas = document.querySelector("canvas");
export const context = gameCanvas.getContext("2d");

gameCanvas.width = innerWidth;
gameCanvas.height = innerHeight;