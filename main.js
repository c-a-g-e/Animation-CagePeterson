const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./harlow-walking.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	//gameEngine.addEntity(new Background());
	gameEngine.addEntity(new Harlow(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
