import { context, gameCanvas } from "./Renderer.js";
import { Vec2D } from "./Vec2D.js";
import { Collider } from "./Collider.js";

export class Bullet {
    constructor(pos) {
        this.position = new Vec2D(pos.x, pos.y);
        this.speed = 10;
        this.texture = null;
        const image = new Image();
        image.src = "resources/bullet.png";
        image.onload = () => { this.texture = image; };
        this.size = new Vec2D(image.width, image.height);
        this.hit = false;
        this.collider = new Collider(this);
    }
    
    render() {
        if(!this.texture)
            return;
        context.drawImage(this.texture, this.position.x, this.position.y, this.size.x, this.size.y);
    }

    update() {
        this.position.y -= this.speed;
    }
}
