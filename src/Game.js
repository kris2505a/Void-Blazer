import { context, gameCanvas } from "./Renderer.js";
import { Player } from "./Player.js";
import { keys, initInputs } from "./Input.js";
import { Enemy } from "./Enemy.js";

export class Game {
    constructor() {
        initInputs();
        this.player = new Player();
        this.enemy = [];
        this.score = 0;
        this.enemyWave = 1;
        this.createEnemy(this.enemyWave);
    }

    createEnemy(lines) {
        
        let enemyY = 10;
        for(let i = 0 ; i < lines ; i++) {
            let enemyX = 100;
            for (let j = 0 ; j < 17 ; j++) {
                this.enemy.push(new Enemy(enemyX, enemyY));
                enemyX += 100;
            }
            enemyY+= 100;
        }
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
        for(let i of this.enemy) {
            i.render();
        }
        console.log(this.score);
    }

    update() {
        this.enemy = this.enemy.filter(enemy => !enemy.destroyed);
        
        if(this.enemy.length === 0){
            if (this.enemyWave >= 4) 
                this.enemyWave = 0;
            else 
                this.enemyWave++;
            this.createEnemy(this.enemyWave);
        }
        this.player.update();
        for(let i of this.enemy) {
            i.update();
            if(this.player.hit(i))  {
                i.destroyed = true;
                this.score++;
            }
        }
    }

    handleInput() {
        this.player.handleInput();
    }
}
