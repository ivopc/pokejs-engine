import PokeJS from "pokejs";

import MiniGameBingo from "./scenes/MiniGameBingo";
import PokemonAttackScript from "./runtime-scripts/PokemonAttackScript";

function boot () {
    const gameInstance = new PokeJS.Game({
        gameConfig: "./config/gameconfig.json",
        autoStart: false
    });
    gameInstance.add.scene("MiniGame-Bingo", MiniGameBingo);
    gameInstance.add.script("savePokemonAttack", PokemonAttackScript);
    gameInstance.start();
};

PokeJS.DOM.onReady(boot);

PokeJS.DOM.onReady(async () => {
    const playerData = await api.get("/user-data", {
        token: $auth.token
    });
    boot(userData);
});