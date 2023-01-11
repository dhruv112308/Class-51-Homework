var canvas
var backgroundImg, mainPilotImg,enemyPilotImg, satelliteImg, asteroidImg
var mainPilot,enemyPilot, satellite, asteroid
var gameState = 1

function preload(){
  backgroundImg = loadImage("./assets/spaceBackground.jpg")
  mainPilotImg = loadImage("./assets/supportPilots.png")
  enemyPilotImg = loadImage("./assets/enemySpaceship.jpg")
  satelliteImg = loadImage("./assets/satellite.jpg")
  asteroidImg = loadImage("./assets/asteroid4.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  mainPilot = createSprite(800, 700, 50, 50)
  mainPilot.addImage(mainPilotImg)
  mainPilot.scale = 0.15
  asteroid = createSprite(800,100, 50, 50)
  asteroid.addImage(asteroidImg)
  asteroid.scale = 0.2
  asteroid = createSprite(600,100, 50, 50)
  asteroid.addImage(asteroidImg)
  asteroid.scale = 0.2
  asteroid = createSprite(1000,100, 50, 50)
  asteroid.addImage(asteroidImg)
  asteroid.scale = 0.2
}

function draw() {
  background(backgroundImg);
  textSize(40)
  fill("white")
  text("Points:0", 1300, 800) 

  textSize(40)
  fill("white")
  text("Lives:3", 100, 800)
  
  drawSprites();
}