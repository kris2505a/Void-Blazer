import { context, gameCanvas } from "./Renderer.js";
import { Player } from "./Player.js";
import { keys, initInputs } from "./Input.js";

export class Game {
    constructor() {
        this.player = new Player();
        this.enemy = [];
        initInputs();
    }

    gameLoop() {

        requestAnimationFrame(() => this.gameLoop());
        context.fillStyle = "#000000";
        context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        
        this.update();
        this.handleInput();
        this.render();
    }

    render() {
        this.player.render();
    }

    update() {
        this.player.update();
    }

    handleInput() {
        this.player.handleInput();
    }
}
