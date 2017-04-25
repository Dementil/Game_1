// var Game = {};

(function (){
    game = new Phaser.Game(760,730, Phaser.CANVAS);
    game.state.add("Boot", Game.Boot);
    game.state.add("Preload", Game.Preload);
    game.state.add("Main", Game.Main);
    game.state.add("Death", Game.Death);
    game.state.start("Boot");
})();