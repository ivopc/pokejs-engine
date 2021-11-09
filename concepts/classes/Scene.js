import Phaser from "phaser";
import Runtime from "./scenes/Runtime";

class Scene extends Phaser.Scene {
    constructor () {
        super({ key: "a123" });
        /**
         * @type {Runtime}
         */
        this.runtime = new Runtime(this);
    }
};

export default Scene;