PokeJS.Game;

PokeJS.Scene;
PokeJS.Scene.Raw;
PokeJS.Scene.Preload;
PokeJS.Scene.StartScreen;
PokeJS.Scene.FileSelect;
PokeJS.Scene.Overworld;
PokeJS.Scene.LevelMap;
PokeJS.Scene.Battle;

PokeJS.UI;
PokeJS.UI.Party;
PokeJS.UI.Component;
PokeJS.UI.Component.Button;

PokeJS.Layout.Desktop;
PokeJS.Layout.Desktop.Standart;
PokeJS.Layout.Desktop.HD;
PokeJS.Layout.Mobile;

PokeJS.RuntimeScript;
PokeJS.RuntimeScript.Raw;
PokeJS.RuntimeScript.Native;

PokeJS.Plugin;
PokeJS.Formulas;
PokeJS.Database;
PokeJS.Models;

PokeJS.DOM;
PokeJS.Utils;
PokeJS.Phaser;

import { Phaser, Scene } from 'pokejs';

export default class MiniGame extends Scene.Raw {
    constructor(scene) {
        super(scene);
    }
};