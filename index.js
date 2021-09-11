import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  width: 1024,
  height: 768,
  backgroundAlpha: '#ff00ff',
  antialias: true,
  resolution: 1,
  backgroundColor: 0x23395d
});

// remove browser scroll bars
app.renderer.view.style.position = 'absolute';

// attach renderer to DOM
document.body.appendChild(app.view);

// Step 1: Load asset into texture
const texture = PIXI.Texture.from("./images/bunny.png");
// Step 2: Create PIXI.Sprite from texture
const sprite = new PIXI.Sprite(texture);
// Step 3: Add sprite to stage
app.stage.addChild(sprite);
