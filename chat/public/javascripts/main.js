Game.Main = function (game) {
    var player;
    var platforms;
    var cursors;
    var jumpButton;
    var coins;
    this.score = 0;
    var hearts;
    var enemies;


    Game.Main.prototype.create = function () {
        this.bounds = new Phaser.Rectangle(0, 0, 760, 730);
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        player = game.add.sprite(100, 200, "char");
        game.physics.arcade.enable(player); //включаем физику на персонаже
        player.body.collideWorldBounds = true; //включаем столкновение с миром
        player.body.gravity.y = 500; //включаем гравитацию
        platforms = game.add.physicsGroup();
        platforms.create(500, 250, "platform");
        platforms.create(0, 300, "platform");
        platforms.create(400, 550, "platform");
        platforms.setAll("body.immovable", true); //отлючение физики у платформ
        cursors = game.input.keyboard.createCursorKeys();
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        coins = game.add.physicsGroup();
        coins.create(560, 210, "coin");
        coins.create(550, 520, "coin");
        coins.create(100, 80, "coin");
        coins.setAll("body.immovable", true);
        scoreText = game.add.text(10, 10, "You have " + this.score + " coins", { font: "24px Arial", fill: "#fff", align: "center" });
        hearts = game.add.group();
        for (var i = 0; i < 4; i++) {
            hearts.create(550 + i * 50, 10, "heart");
        }
        enemies = game.add.physicsGroup();
        enemies.create(10, 225, "enemy");

    };

    Game.Main.prototype.update = function () {
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.overlap(player, coins, this.killCoin, null, this);
        game.physics.arcade.overlap(player, enemies, this.removeHeart, null, this);
        player.body.velocity.x = 0;
        if (cursors.left.isDown) {
            player.body.velocity.x = -250;
        }
        if (cursors.right.isDown) {
            player.body.velocity.x = 250;
        }
        if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
            player.body.velocity.y = -600;
        }
    };

    Game.Main.prototype.killCoin = function (player, coin) {
        coin.kill();
        this.score+=10;
        scoreText.text = "You have " + this.score + " coins";
    }

    Game.Main.prototype.removeHeart = function (player, enemy) {
        if (hearts.children.length == 1) {
            
            this.game.state.start("Death");
        } 
        player.x += 100;
        hearts.removeChildAt(0);
        
    };


    Game.Main.prototype.shutdown = function () {
        platforms.destroy();
        coins.destroy();
        hearts.destroy();
        player.destroy();
    };

};