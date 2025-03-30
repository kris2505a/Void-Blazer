import { Vec2D } from "./Vec2D.js";

export class Collider {
    constructor(pos, size) {
        this.position = new Vec2D(pos.x, pos.y);
        this.size = new Vec2D(size.x, size.y);
    }

    isCollided(target) {
        return (
            this.position.x < target.position.x + target.size.x &&
            this.position.x + this.size.x > target.position.x &&
            this.position.y < target.position.y + target.size.y &&
            this.position.y + this.size.y > target.position.y
        );
    }
}
