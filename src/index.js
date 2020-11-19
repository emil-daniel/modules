import './index.css'
import {
	clearCanvas
} from "./canvas.js";
import {
	drawBricks,
	collisionDetection
} from "./bricks";
import {
	drawBall,
	updateBallPosition
} from "./ball";
import {
	drawPaddle,
	updatePaddlePosition
} from "./paddle";
import {
	drawScore
} from "./score";
import {
	drawLives
} from "./lives";
function draw() {
	
	clearCanvas();

	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
	collisionDetection();

	updateBallPosition();
	updatePaddlePosition();

	requestAnimationFrame(draw);
}

draw();