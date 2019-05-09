
import * as logo from '../assets/logo.png';
import * as Phaser from 'phaser';
class HomeScene extends Phaser.Scene{
    constructor() {
        super({
            key: 'HomeScene'
        })
    };
    
    init() {
       
    };
    preload() {
      this.load.image("logo", logo + '');
    }
    create() {
      const logo = this.add.image(400, 150, "logo");    
      this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: "Power2",
        yoyo: true,
        loop: -1
      });
    }
}
export default HomeScene;