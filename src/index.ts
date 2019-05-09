import * as Phaser from "phaser";
import HomeScene from './scene/HomeScene';
const config: GameConfig = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [HomeScene]
};

const game = new Phaser.Game(config);


