enum ActionKind {
    Walking,
    Idle,
    Jumping,
    walkingright
}
namespace SpriteKind {
    export const thing = SpriteKind.create()
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
let facing = 0
let THEGOOBER: Sprite = null
THEGOOBER = sprites.create(assets.image`Goober1`, SpriteKind.Player)
controller.moveSprite(THEGOOBER)
tiles.setCurrentTilemap(tilemap`level`)
for (let wallz of tiles.getTilesByType(sprites.dungeon.greenOuterNorth0)) {
    tiles.setWallAt(wallz, true)
}
for (let wallz of tiles.getTilesByType(sprites.dungeon.greenOuterNorthWest)) {
    tiles.setWallAt(wallz, true)
}
for (let wallz of tiles.getTilesByType(sprites.dungeon.greenOuterNorthEast)) {
    tiles.setWallAt(wallz, true)
}
for (let wallz of tiles.getTilesByType(sprites.dungeon.greenOuterEast0)) {
    tiles.setWallAt(wallz, true)
}
for (let wallz of tiles.getTilesByType(sprites.dungeon.greenOuterSouthWest)) {
    tiles.setWallAt(wallz, true)
}
for (let wallz of tiles.getTilesByType(sprites.dungeon.greenOuterSouth1)) {
    tiles.setWallAt(wallz, true)
}
for (let wallz of tiles.getTilesByType(sprites.dungeon.greenOuterSouthEast)) {
    tiles.setWallAt(wallz, true)
}
for (let wallz of tiles.getTilesByType(sprites.dungeon.greenOuterWest0)) {
    tiles.setWallAt(wallz, true)
}
game.onUpdate(function () {
    scene.cameraFollowSprite(THEGOOBER)
})
