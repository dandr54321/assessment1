function level4 () {
    scene.setBackgroundImage(assets.image`forest`)
}
function level3 () {
    tiles.setTilemap(tilemap`level3`)
    mySprite = sprites.create(img`
        . 2 2 2 . 2 2 2 2 . 2 2 2 . 
        2 2 d 2 2 d d d d 2 2 d 2 2 
        2 d 6 d d d d d d d d 6 d 2 
        2 2 d d d d d d d d d d 2 2 
        . 2 d d d d d d d d d d 2 . 
        . 2 d d d d 8 8 d d d d 2 . 
        . 2 2 d d 8 8 8 8 d d 2 2 . 
        . 2 2 2 b 2 8 8 2 b 2 2 2 . 
        . 2 2 8 2 2 8 8 2 2 8 2 2 . 
        . . 2 8 8 8 8 8 c 8 2 2 . . 
        . . . 2 2 8 c c 8 2 2 . . . 
        . . . e 2 e 8 8 e 2 e . . . 
        . . e e 2 e e e e 2 e e . . 
        . . . . 2 7 7 7 7 2 . . . . 
        . . . . 7 7 7 7 7 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 12))
    mySprite.setStayInScreen(true)
    info.setScore(0)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    info.changeScoreBy(1)
    if (info.score() >= 6) {
        game.splash("You have completed Level 3!")
        checkLevel()
    }
})
function checkLevel () {
    currentLevel += 1
    if (currentLevel == 3) {
        level3()
    } else if (currentLevel == 4) {
        level4()
    }
}
let mySprite: Sprite = null
let currentLevel = 0
currentLevel = 2
game.splash("You have reached Level 3!")
game.showLongText("Collect all the seed bags to win Level 3!", DialogLayout.Bottom)
checkLevel()
