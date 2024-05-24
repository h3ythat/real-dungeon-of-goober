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
namespace ConnectionKind {
    export const door3 = ConnectionKind.create()
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
function makenemy (timetospawn: number) {
    if (summonnow == 1 && EnemyCount != Enemymax && timetospawn >= 2000) {
        randomspeed = randint(30, 45)
        EnemyCount = EnemyCount + 1
        Onemy = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
        onemyspawned = 1
        Onemy.follow(THEGOOBER, randomspeed)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timed = game.runtime()
    summonProjectile(timed, idprojectilecounter, 0)
    idprojectilecounter += 1
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
function summonProjectile (time: number, projectileID: number, done: number) {
    playerprojectile = sprites.create(assets.image`enemy`, SpriteKind.Projectile)
    playerprojectile.setFlag(SpriteFlag.DestroyOnWall, true)
    playerprojectile.setPosition(THEGOOBER.x, THEGOOBER.y)
    playerprojectile.lifespan = 500
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
}
tiles.onMapLoaded(function (tilemap3) {
    if (tiles.getLoadedMap() == tilemap1) {
    	
    } else {
        tiles.placeOnRandomTile(THEGOOBER, assets.tile`doortile`)
    }
})
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`doortile`, function (sprite, location) {
    tiles.loadConnectedMap(ConnectionKind.door3)
    THEGOOBER.x += -5
})
function KILLLLLLLLL (elemey: Sprite, brojectile: Sprite) {
	
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    EnemyCount += -1
    sprites.setDataNumber(otherSprite, "isdead", 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 1000)
    timer.after(500, function () {
        game.gameOver(false)
    })
})
let SUMMONER = 0
let timedspawn = 0
let buttonpress = 0
let playerprojectile: Sprite = null
let timed = 0
let onemyspawned = 0
let Onemy: Sprite = null
let randomspeed = 0
let EnemyCount = 0
let summonnow = 0
let facing = 0
let arrowhere = 0
let THEGOOBER: Sprite = null
let Enemymax = 0
let idprojectilecounter = 0
let tilemap1: tiles.WorldMap = null
let thing = null
tilemap1 = tiles.createMap(tilemap`level`)
let tilemap2 = tiles.createMap(tilemap`level6`)
tiles.connectMapById(tilemap1, tilemap2, ConnectionKind.door3)
tiles.loadMap(tilemap1)
idprojectilecounter = 0
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
Enemymax = 5
THEGOOBER = sprites.create(assets.image`Goober1`, SpriteKind.Player)
controller.moveSprite(THEGOOBER)
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
    if (THEGOOBER.x >= signx - 20 && THEGOOBER.x <= signx + 20 && (THEGOOBER.y >= signy - 20 && THEGOOBER.y <= signy + 20)) {
        sign.sayText(randomspeed)
    } else {
        sign.sayText("")
    }
    if (buttonpress == 1) {
        if (game.runtime() - timedspawn >= 2000) {
            timedspawn = game.runtime()
            makenemy(timedspawn)
        }
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
	
})
