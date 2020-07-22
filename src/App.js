import React, {useEffect, useRef, useState} from 'react';
import {useInterval} from './useInterval';
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
} from './constants';

const App = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0,-1]);
  const [speed, setSpeed] = useState();
  const [gameOver, setGameOver] = useState(false);
  
  const startGame = () => {

  };

  const endGame = () => {

  };

  const moveSnake = () => {

  };

  const createApple = () => {

  };

  const collideCollision = () => {

  };

  const checkAppleCollison = () => {

  };

  const gameLoop = () => {

  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0,0,CANVAS_SIZE[0], CANVAS_SIZE[1]);
    context.fillStyle = "blue";
    snake.forEach(([x,y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "red";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  return (
    <div role="button" tab="0" onKeyDown={e => moveSnake(e)}>
      <canvas
        style={{ border: "1px solid black"}}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      {gameOver && <div>GAME OVER!</div>}
      <button onClick={startGame} >Start Game</button>
    </div>
  )
}

export default App;
