import { context, gameCanvas } from "./Renderer.js";
import { keys, initInputs } from "./Input.js";
import { Bullet } from "./Bullet.js";
import { Vec2D } from "./Vec2D.js";
import { Collider } from "./Collider.js";

export class Player {
    constructor() {
        this.speed = 5;
        const image = new Image();
        image.src = "resources/player.png";
        this.texture = image;
        this.size = new Vec2D(image.width, image.height);
        this.position = new Vec2D((gameCanvas.width - this.size.x) / 2, (gameCanvas.height - this.size.y) - 50);
        this.ammo = [];
        this.coolDown = 0;
        this.collider = new Collider(this.position, this.size);

    }

    render() {
        context.drawImage(this.texture, this.position.x, this.position.y, this.size.x, this.size.y);
        for(let i of this.ammo) {
            i.render();
        }
    }

    update() {
        this.ammo = this.ammo.filter(bullet => bullet.position.y > 0 && !bullet.hit);
        for(let i of this.ammo) {
            i.update();
        }
        if(this.coolDown > 0)
            this.coolDown--;
    }

    handleInput() {

        if (keys.a.pressed || keys.ArrowLeft.pressed)
            this.position.x -= this.speed;
        
        if (keys.d.pressed || keys.ArrowRight.pressed)
            this.position.x += this.speed;

        if (keys[" "].pressed && this.coolDown === 0) {
            var bulletPos = new Vec2D(this.position.x, this.position.y);
            bulletPos.x += this.size.x / 2 - 6;
            this.ammo.push(new Bullet(bulletPos));
            this.coolDown = 40;

        }

    }
}
