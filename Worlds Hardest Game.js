var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var start = createSprite(29, 195, 75, 135)
start.shapeColor =" blue"
var finish = createSprite(370, 195, 75, 135)
finish.shapeColor = "gold"
var  boundary1 = createSprite(190,120,420,5);
 var  boundary2 = createSprite(190,260,420,5);
var player = createSprite(30, 200, 20, 20)
player.shapeColor = "green"
var enemy1 = createSprite(100, 200, 15, 15)
enemy1.velocityY= -7
enemy1.shapeColor = "red"
var enemy2 = createSprite(170, 200, 15, 15)
enemy2.shapeColor = "red"
enemy2.velocityY= 7
var enemy3 = createSprite(240, 200, 15, 15)
enemy3.shapeColor = "red"
enemy3.velocityY= -7
var enemy4 = createSprite(310, 200, 15, 15)
enemy4.shapeColor = "red"
enemy4.velocityY= 7
var deaths= 0










function draw() {
  background( "black")
  drawSprites()
    createEdgeSprites()
  enemy1.bounceOff(boundary1)
  enemy1.bounceOff(boundary2)
  enemy2.bounceOff(boundary1)
  enemy2.bounceOff(boundary2)
  enemy3.bounceOff(boundary1)
  enemy3.bounceOff(boundary2)
  enemy4.bounceOff(boundary1)
  enemy4.bounceOff(boundary2)
   if(keyDown("right")){
    player.velocityX= 8;
  }
  if (keyWentUp( "right")){
    player.velocityX= 0
  }
  if(keyDown("left")){
    player.velocityX= -8;
  }
  if(keyWentUp("left")){
    player.velocityX= 0
  }
  textSize(15)
  text("Deaths :"+deaths,200,50);
    
  if(player.isTouching(boundary1)||
     player.isTouching(boundary2)||
     player.isTouching(enemy1)||
     player.isTouching(enemy2)||
     player.isTouching(enemy3)||
     player.isTouching(enemy4))
  {
     player.x = 40;
     player.y = 190;
     deaths = deaths + 1;
  }
  if(Deaths = 0){
    textSize(18)
    text( "YOU Lose!", 200, 200)
    
  }
  if(player.isTouching(finish)){
    textSize(18)
    text("You Win!", 200, 200)
  }

}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
