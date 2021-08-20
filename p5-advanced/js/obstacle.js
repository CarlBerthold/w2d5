class Obstacle {
	constructor(image) {
		this.image = image;
		this.x = width;
		this.y = (Math.random() * height) / 2.5;
		this.width = 50;
		this.height = 50;
	}

	draw() {
		this.x--;
		image(this.image, this.x, this.y, this.width, this.height);
	}

	// this function returns true if we have a collision between an obstacle 
	// and the player and false if we don't
	collision(playerInfo) {
		// console.log('collision', playerInfo);
		// get the middle of the obstacle 
		let obstacleX = this.x + this.width / 2;
		let obstacleY = this.y + this.height / 2;
		// get the middle of the player
		let playerX = playerInfo.x + playerInfo.width / 2;
		let playerY = playerInfo.y + playerInfo.height / 2;

		// https://p5js.org/reference/#/p5/dist
		// dist(x1, y1, x2, y2);
		if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
			return false
		} else {
			// here we have a collision
			game.player.score += 10;
			console.log(game.player.score);
			return true;
		}
	}
}
