Game.Preload = function(game){};
Game.Preload.prototype.preload = function(){
    this.load.image('char', "assets/images/p1.png")
    this.load.image('platform', "assets/images/platform.png")
    this.load.image('coin', "assets/images/coin.png")
    this.load.image('heart', "assets/images/heart.png")
    this.load.image('enemy', "assets/images/enemy.png")
    this.load.image('button', "assets/images/button.png")
    game.stage.backgroundColor = "#85b5e1";
};

Game.Preload.prototype.create = function(){
    this.game.state.start("Main");
    
};