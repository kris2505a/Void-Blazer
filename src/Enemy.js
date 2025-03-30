import { context, gameCanvas } from "./Renderer.js";
import { keys, initInputs } from "./Input.js";
import { Bullet } from "./Bullet.js";
import { Vec2D } from "./Vec2D.js";
import { Collider } from "./Collider.js";

export class Enemy {
    constructor(xPos, yPos) {
        this.position = new Vec2D(xPos, yPos);
        this.speed = 5;
        const image = new Image();
        image.src = "resources/enemy.png";
        this.texture = image;
        this.size = new Vec2D(image.width, image.height);
        this.destroyed = false;
        this.moveTimer = 0;
        this.collider = new Collider(this.position, this.size);
    }

    render() {
        context.drawImage(this.texture, this.position.x, this.position.y, this.size.x, this.size.y);
    }

    update() {
        if(this.moveTimer == 120) {
            this.position.y += this.speed;
            this.moveTimer= 0;
        }
        else 
            this.moveTimer++;
    }
}