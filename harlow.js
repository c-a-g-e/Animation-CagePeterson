class Harlow {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./harlow-walking.png"), 14, 0, 109.5, 61, 6, 0.25);

        this.x = 0;
        this.y = 250;
        this.speed = 100;
    }

    update() {
        this.x += this.speed*this.game.clockTick;
        if (this.x > 700) this.x = 0;
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
}