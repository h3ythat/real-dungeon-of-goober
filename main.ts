enum ActionKind {
    Walking,
    Idle,
    Jumping,
    walkingright
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
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
let summonnow = 0
let SUMMONER = 0
let buttonpress = 0
let facing = 0
let THEGOOBER: Sprite = null
namespace Enemys {
    
}
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
    scene.cameraFollowSprite(THEGOOBER)
    if (buttonpress == 1) {
        tiles.setTileAt(tiles.getTileLocation(11, 9), assets.tile`myTile1`)
        SUMMONER = 1
        timer.after(500, function () {
            buttonpress = 0
            tiles.setTileAt(tiles.getTileLocation(11, 9), assets.tile`myTile2`)
        })
    }
    if (SUMMONER == 1) {
        SUMMONER = 0
        if (SUMMONER == 0 && summonnow == 0) {
            summonnow = 1
        }
    }
})
game.onUpdateInterval(500, function () {
    if (summonnow == 1) {
        summonnow = 2
        Onemy = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
        Onemy.follow(THEGOOBER)
    }
})
