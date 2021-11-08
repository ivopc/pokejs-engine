import Phaser from "phaser";

function preload () {};

function create () {};

function update () {
    //console.log(this);
};

const config = {
    type: Phaser.WEBGL,
    parent: "poke-js",
    width: 800,
    height: 600,
    scene: { preload, create, update }
};

function init () {
    new Phaser.Game(config);
};

document.addEventListener("DOMContentLoaded", init);