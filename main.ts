enum ActionKind {
    Walking,
    Idle,
    Jumping,
    walkingright
}
namespace SpriteKind {
    export const Sign = SpriteKind.create()
    export const arow = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    arrowhere = 0
    if (facing == 1) {
        animation.runImageAnimation(
        THEGOOBER,
        assets.animation`goober left anim`,
        100,
        true
        )
    }
    if (facing == 2) {
        animation.runImageAnimation(
        THEGOOBER,
        assets.animation`goober right anim`,
        100,
        true
        )
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let playerprojectile: Sprite = null
    summonProjectile(game.runtime())
    if (arrowhere == 0) {
        playerprojectile.setVelocity(0, -150)
    }
    if (arrowhere == 2) {
        playerprojectile.setVelocity(0, 150)
    }
    if (arrowhere == 1) {
        playerprojectile.setVelocity(150, 0)
    }
    if (arrowhere == 3) {
        playerprojectile.setVelocity(-150, 0)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (facing == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, THEGOOBER)
        THEGOOBER.setImage(assets.image`myImage0`)
    }
    if (facing == 2) {
        animation.stopAnimation(animation.AnimationTypes.All, THEGOOBER)
        THEGOOBER.setImage(assets.image`Goober0`)
    }
})
function summonProjectile (time: number) {
	
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    arrowhere = 3
    animation.runImageAnimation(
    THEGOOBER,
    assets.animation`goober left anim`,
    100,
    true
    )
    facing = 1
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, THEGOOBER)
    THEGOOBER.setImage(assets.image`Goober0`)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, THEGOOBER)
    THEGOOBER.setImage(assets.image`myImage0`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    arrowhere = 1
    animation.runImageAnimation(
    THEGOOBER,
    assets.animation`goober right anim`,
    100,
    true
    )
    facing = 2
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (facing == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, THEGOOBER)
        THEGOOBER.setImage(assets.image`myImage0`)
    }
    if (facing == 2) {
        animation.stopAnimation(animation.AnimationTypes.All, THEGOOBER)
        THEGOOBER.setImage(assets.image`Goober0`)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    arrowhere = 2
    if (facing == 1) {
        animation.runImageAnimation(
        THEGOOBER,
        assets.animation`goober left anim`,
        100,
        true
        )
    }
    if (facing == 2) {
        animation.runImageAnimation(
        THEGOOBER,
        assets.animation`goober right anim`,
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    buttonpress = 1
})
let Onemy: Sprite = null
let EnemyCount = 0
let summonnow = 0
let SUMMONER = 0
let randomspeed = 0
let buttonpress = 0
let facing = 0
let arrowhere = 0
let THEGOOBER: Sprite = null
let arrow = sprites.create(assets.image`myImage6`, SpriteKind.arow)
let tileColumn = 12
let tileRow = 7
let signLocation = tiles.getTileLocation(tileColumn, tileRow)
let signx = tileColumn * 16
let signy = tileRow * 16
let sign = sprites.create(assets.image`myImage5`, SpriteKind.Sign)
sign.x = signx
sign.y = signy
namespace Enemys {
    
}
let Enemymax = 1
THEGOOBER = sprites.create(assets.image`Goober1`, SpriteKind.Player)
controller.moveSprite(THEGOOBER)
tiles.setCurrentTilemap(tilemap`level`)
for (let wallz of tiles.getTilesByType(sprites.dungeon.greenOuterNorth0)) {
    tiles.setWallAt(wallz, true)
}
for (let wallz2 of tiles.getTilesByType(sprites.dungeon.greenOuterNorthWest)) {
    tiles.setWallAt(wallz2, true)
}
for (let wallz3 of tiles.getTilesByType(sprites.dungeon.greenOuterNorthEast)) {
    tiles.setWallAt(wallz3, true)
}
for (let wallz4 of tiles.getTilesByType(sprites.dungeon.greenOuterEast0)) {
    tiles.setWallAt(wallz4, true)
}
for (let wallz5 of tiles.getTilesByType(sprites.dungeon.greenOuterSouthWest)) {
    tiles.setWallAt(wallz5, true)
}
for (let wallz6 of tiles.getTilesByType(sprites.dungeon.greenOuterSouth1)) {
    tiles.setWallAt(wallz6, true)
}
for (let wallz7 of tiles.getTilesByType(sprites.dungeon.greenOuterSouthEast)) {
    tiles.setWallAt(wallz7, true)
}
for (let wallz8 of tiles.getTilesByType(sprites.dungeon.greenOuterWest0)) {
    tiles.setWallAt(wallz8, true)
}
game.onUpdate(function () {
    let HALT = 0
    scene.cameraFollowSprite(THEGOOBER)
    arrow.setPosition(THEGOOBER.x + 12, THEGOOBER.y)
    if (arrowhere == 0) {
        arrow.setImage(assets.image`myImage6`)
    }
    if (arrowhere == 1) {
        arrow.setImage(assets.image`myImage7`)
    }
    if (arrowhere == 2) {
        arrow.setImage(assets.image`myImage9`)
    }
    if (arrowhere == 3) {
        arrow.setImage(assets.image`myImage8`)
    }
    if (THEGOOBER.x >= signx - 20 && THEGOOBER.x <= signx + 20) {
        sign.sayText(randomspeed)
    } else {
        sign.sayText("")
    }
    if (buttonpress == 1) {
        tiles.setTileAt(tiles.getTileLocation(11, 9), assets.tile`myTile1`)
        SUMMONER = 1
        timer.after(500, function () {
            buttonpress = 0
            tiles.setTileAt(tiles.getTileLocation(11, 9), assets.tile`myTile2`)
        })
    }
    if (SUMMONER == 1 && HALT == 0) {
        summonnow = 1
    }
})
game.onUpdateInterval(2000, function () {
    if (summonnow == 1 && EnemyCount != Enemymax) {
        randomspeed = randint(30, 45)
        EnemyCount = EnemyCount + 1
        Onemy = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
        Onemy.follow(THEGOOBER, randomspeed)
    }
})
