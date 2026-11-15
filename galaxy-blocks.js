const BOARD_COLUMNS = 10;
const BOARD_ROWS = 20;
const CELL_SIZE = 28;
const BOARD_LEFT = 42;
const BOARD_TOP = 52;
const BOARD_WIDTH = BOARD_COLUMNS * CELL_SIZE;
const BOARD_HEIGHT = BOARD_ROWS * CELL_SIZE;
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 650;
const WIN_SCORE = 1500;

const PIECES = [
  { shape: [[1, 1, 1, 1]], color: "#49d9ff" },
  { shape: [[1, 1], [1, 1]], color: "#ffd85e" },
  { shape: [[0, 1, 0], [1, 1, 1]], color: "#b88cff" },
  { shape: [[1, 0, 0], [1, 1, 1]], color: "#ff9d59" },
  { shape: [[0, 0, 1], [1, 1, 1]], color: "#668cff" },
  { shape: [[0, 1, 1], [1, 1, 0]], color: "#78f0a2" },
  { shape: [[1, 1, 0], [0, 1, 1]], color: "#ff6d9d" }
];

let settledCells;
let currentPiece;
let activePieceSprites = [];
let pieceBag = [];
let gameStatus = "ready";
let score = 0;
let clearedRows = 0;
let dropTimer = 0;
let lastMoveAt = 0;
let lastSoftDropAt = 0;
let backgroundStars = [];
let restartButton;

function setup() {
  const gameCanvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  gameCanvas.parent("game-canvas");
  frameRate(60);
  world.gravity.y = 0;
  restartButton = document.getElementById("restart-button");
  restartButton.addEventListener("click", startGame);
  backgroundStars = Array.from({ length: 90 }, () => ({
    x: random(CANVAS_WIDTH),
    y: random(CANVAS_HEIGHT),
    size: random(1, 3),
    shine: random(TWO_PI)
  }));
}

function update() {
  drawSpaceBackground();
  drawGameBoard();
  drawScorePanel();

  if (gameStatus === "playing") {
    handleMovement();
    handleFalling();
  } else {
    drawStatusOverlay();
  }
}

function keyPressed() {
  if ([LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, UP_ARROW].includes(keyCode)) {
    return false;
  }
}

function startGame() {
  removeActiveSprites();
  settledCells = Array.from({ length: BOARD_ROWS }, () =>
    Array(BOARD_COLUMNS).fill(null)
  );
  score = 0;
  clearedRows = 0;
  dropTimer = 0;
  lastSoftDropAt = 0;
  pieceBag = [];
  gameStatus = "playing";
  spawnPiece();
  restartButton.textContent = "Restart Game";
}

function drawSpaceBackground() {
  background("#080c20");
  noStroke();
  for (const star of backgroundStars) {
    const glow = 125 + 100 * sin(frameCount * 0.035 + star.shine);
    fill(180, 190, 255, glow);
    circle(star.x, star.y, star.size);
  }

  fill("#d8d6ff");
  textAlign(LEFT, CENTER);
  textSize(20);
  textStyle(BOLD);
  text("GALAXY BLOCKS", BOARD_LEFT, 26);
  textStyle(NORMAL);
}

function drawGameBoard() {
  noStroke();
  fill("#0e1430");
  rect(BOARD_LEFT - 2, BOARD_TOP - 2, BOARD_WIDTH + 4, BOARD_HEIGHT + 4, 8);

  for (let row = 0; row < BOARD_ROWS; row++) {
    for (let column = 0; column < BOARD_COLUMNS; column++) {
      const x = BOARD_LEFT + column * CELL_SIZE;
      const y = BOARD_TOP + row * CELL_SIZE;
      fill("#141b3b");
      rect(x + 1, y + 1, CELL_SIZE - 2, CELL_SIZE - 2, 4);
      if (settledCells && settledCells[row][column]) {
        drawBlock(x, y, settledCells[row][column]);
      }
    }
  }
}

function drawScorePanel() {
  const panelX = 360;
  fill("#a9a5d6");
  textAlign(LEFT, TOP);
  textSize(12);
  text("SCORE", panelX, 76);
  fill("#ffffff");
  textSize(30);
  text(score.toLocaleString(), panelX, 96);

  fill("#a9a5d6");
  textSize(12);
  text("ROWS CLEARED", panelX, 148);
  fill("#ffffff");
  textSize(22);
  text(String(clearedRows), panelX, 168);

  fill("#a9a5d6");
  textSize(12);
  text("CONSTELLATION GOAL", panelX, 220);
  drawProgressBar(panelX, 246, 190, 10);
  fill("#d8d6ff");
  textSize(14);
  text(`${Math.min(score, WIN_SCORE).toLocaleString()} / ${WIN_SCORE.toLocaleString()}`, panelX, 266);

  fill("#b8bdd9");
  textSize(13);
  text("← →  Move", panelX, 326);
  text("↓  Soft drop", panelX, 350);
}

function drawProgressBar(x, y, width, height) {
  noStroke();
  fill("#252b50");
  rect(x, y, width, height, 5);
  fill("#8d72ff");
  const progress = constrain(score / WIN_SCORE, 0, 1);
  rect(x, y, width * progress, height, 5);
}

function drawBlock(x, y, colorValue) {
  noStroke();
  fill(colorValue);
  rect(x + 3, y + 3, CELL_SIZE - 6, CELL_SIZE - 6, 5);
  fill(255, 255, 255, 65);
  rect(x + 5, y + 5, CELL_SIZE - 10, 4, 2);
}

function drawStatusOverlay() {
  noStroke();
  fill(5, 8, 24, 205);
  rect(BOARD_LEFT, BOARD_TOP + 194, BOARD_WIDTH, 160, 12);
  textAlign(CENTER, CENTER);
  fill("#ffffff");
  textStyle(BOLD);
  textSize(24);

  if (gameStatus === "ready") {
    text("Ready for liftoff?", BOARD_LEFT + BOARD_WIDTH / 2, BOARD_TOP + 242);
    textStyle(NORMAL);
    fill("#c8c9e6");
    textSize(14);
    text("Press Start Game to begin", BOARD_LEFT + BOARD_WIDTH / 2, BOARD_TOP + 280);
  } else if (gameStatus === "won") {
    text("Constellation charted!", BOARD_LEFT + BOARD_WIDTH / 2, BOARD_TOP + 242);
    textStyle(NORMAL);
    fill("#c8c9e6");
    textSize(14);
    text("You reached the score goal.", BOARD_LEFT + BOARD_WIDTH / 2, BOARD_TOP + 280);
  } else {
    text("The galaxy is full", BOARD_LEFT + BOARD_WIDTH / 2, BOARD_TOP + 242);
    textStyle(NORMAL);
    fill("#c8c9e6");
    textSize(14);
    text("No room for the next fragment.", BOARD_LEFT + BOARD_WIDTH / 2, BOARD_TOP + 280);
  }
  textStyle(NORMAL);
}

function handleMovement() {
  const now = millis();
  if (now - lastMoveAt < 115) return;

  if (keyIsDown(LEFT_ARROW) && canPlace(currentPiece, currentPiece.x - 1, currentPiece.y)) {
    currentPiece.x--;
    lastMoveAt = now;
    syncActiveSprites();
  } else if (keyIsDown(RIGHT_ARROW) && canPlace(currentPiece, currentPiece.x + 1, currentPiece.y)) {
    currentPiece.x++;
    lastMoveAt = now;
    syncActiveSprites();
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (now - lastSoftDropAt >= 70) {
      lastSoftDropAt = now;
      dropTimer = 0;
      movePieceDown();
    }
  }
}

function handleFalling() {
  const dropInterval = Math.max(130, 760 - Math.floor(clearedRows / 5) * 70);
  dropTimer += deltaTime;
  if (dropTimer >= dropInterval) {
    dropTimer = 0;
    movePieceDown();
  }
}

function movePieceDown() {
  if (canPlace(currentPiece, currentPiece.x, currentPiece.y + 1)) {
    currentPiece.y++;
    syncActiveSprites();
  } else {
    lockPiece();
  }
}

function lockPiece() {
  for (const cell of currentPiece.cells) {
    const row = currentPiece.y + cell.row;
    const column = currentPiece.x + cell.column;
    settledCells[row][column] = currentPiece.color;
  }
  removeActiveSprites();
  clearCompletedRows();
  if (score >= WIN_SCORE) {
    gameStatus = "won";
    return;
  }
  spawnPiece();
}

function clearCompletedRows() {
  let rowsToClear = 0;
  for (let row = BOARD_ROWS - 1; row >= 0; row--) {
    if (settledCells[row].every(Boolean)) {
      settledCells.splice(row, 1);
      settledCells.unshift(Array(BOARD_COLUMNS).fill(null));
      rowsToClear++;
      row++;
    }
  }

  if (rowsToClear > 0) {
    const rowScores = [0, 100, 300, 500, 800];
    score += rowScores[rowsToClear] || rowsToClear * 200;
    clearedRows += rowsToClear;
  }
}

function spawnPiece() {
  const pieceData = drawFromBag();
  const cells = [];
  pieceData.shape.forEach((shapeRow, row) => {
    shapeRow.forEach((occupied, column) => {
      if (occupied) cells.push({ row, column });
    });
  });

  currentPiece = {
    cells,
    color: pieceData.color,
    x: Math.floor((BOARD_COLUMNS - pieceData.shape[0].length) / 2),
    y: 0
  };

  if (!canPlace(currentPiece, currentPiece.x, currentPiece.y)) {
    gameStatus = "over";
    return;
  }
  createActiveSprites();
}

function drawFromBag() {
  if (pieceBag.length === 0) {
    pieceBag = [...PIECES];
    for (let index = pieceBag.length - 1; index > 0; index--) {
      const swapIndex = Math.floor(random(index + 1));
      [pieceBag[index], pieceBag[swapIndex]] = [pieceBag[swapIndex], pieceBag[index]];
    }
  }
  return pieceBag.pop();
}

function canPlace(piece, x, y) {
  return piece.cells.every((cell) => {
    const column = x + cell.column;
    const row = y + cell.row;
    return (
      column >= 0 &&
      column < BOARD_COLUMNS &&
      row >= 0 &&
      row < BOARD_ROWS &&
      !settledCells[row][column]
    );
  });
}

function createActiveSprites() {
  removeActiveSprites();
  for (const cell of currentPiece.cells) {
    const sprite = new Sprite(
      cellCenterX(currentPiece.x + cell.column),
      cellCenterY(currentPiece.y + cell.row),
      CELL_SIZE - 6,
      CELL_SIZE - 6
    );
    sprite.collider = "none";
    sprite.physics = "none";
    sprite.color = currentPiece.color;
    sprite.stroke = "#ffffff";
    sprite.strokeWeight = 1;
    activePieceSprites.push(sprite);
  }
}

function syncActiveSprites() {
  currentPiece.cells.forEach((cell, index) => {
    activePieceSprites[index].x = cellCenterX(currentPiece.x + cell.column);
    activePieceSprites[index].y = cellCenterY(currentPiece.y + cell.row);
  });
}

function removeActiveSprites() {
  for (const sprite of activePieceSprites) sprite.remove();
  activePieceSprites = [];
}

function cellCenterX(column) {
  return BOARD_LEFT + column * CELL_SIZE + CELL_SIZE / 2;
}

function cellCenterY(row) {
  return BOARD_TOP + row * CELL_SIZE + CELL_SIZE / 2;
}
