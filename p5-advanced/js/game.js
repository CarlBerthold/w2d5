class Game {

	constructor() {
		// this.background = new Background();
		// this.player = new Player();
		this.backgrounImages = [];
		this.playerImage = null;
	}

	setup() {
		this.background = new Background();
		this.player = new Player();
	}

	preloadGame() {
		this.backgroundImages = [
			{ src: loadImage('../assets/background/plx-1.png'), x: 0, speed: 0 },
			{ src: loadImage('../assets/background/plx-2.png'), x: 0, speed: 1 },
			{ src: loadImage('../assets/background/plx-3.png'), x: 0, speed: 2 },
			{ src: loadImage('../assets/background/plx-4.png'), x: 0, speed: 3 },
			{ src: loadImage('../assets/background/plx-5.png'), x: 0, speed: 4 },
		];
		this.playerImage = loadImage('../assets/player/bb8.gif');
	}

	draw() {
		// here all the objects are drawn that the game needs
		clear();
		// this draws the background
		this.background.draw();
		// this draws the player
		this.player.draw();
	}
}
