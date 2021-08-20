class Game {

	constructor() {
		// this.background = new Background();
		// this.player = new Player();
		this.backgroundImages = [];
		this.playerImage = null;
		this.obstacles = [];
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
		this.coinImage = loadImage('../assets/coins/tile000.png');
	}

	draw() {
		// here all the objects are drawn that the game needs
		clear();
		// this draws the background
		this.background.draw();
		// this draws the player
		this.player.draw();
		// this will add coins to the obstacles array
		if (frameCount % 120 === 0) {
			this.obstacles.push(new Obstacle(this.coinImage));
			console.log(this.obstacles);
		}
		// we need to iterate over the obstacles array now and call for every object 
		// inside the draw function
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw();
		})
		this.obstacles = this.obstacles.filter((obstacle) => {
			// console.log(this);
			// if we have a collision or the obstacle moves out of the screen 
			if (obstacle.collision(this.player) || (obstacle.x + obstacle.width) < 0) {
				return false
			} else {
				return true
			}
		})
	}
}
