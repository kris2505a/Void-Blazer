import { Vec2D } from "./Vec2D.js";

export class Collider {
    constructor(entity) {
        this.entity = entity; // Store reference
    }

    isCollided(target) {
        return (
            this.entity.position.x < target.entity.position.x + target.entity.size.x &&
            this.entity.position.x + this.entity.size.x > target.entity.position.x &&
            this.entity.position.y < target.entity.position.y + target.entity.size.y &&
            this.entity.position.y + this.entity.size.y > target.entity.position.y
        );
    }
}
