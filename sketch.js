var hero, heroImage, stick, stickImage, armor1, armor1Image, armor2, armor2Image, armor3, armor3Image, armor4, armor4Image, armor5, armor5Image, armor6, armor6Image, armor7, armor7Image, armor8, armor8Image, armor9, armor9Image, armor10, armor10Image;
var woodenSword, woodenSwordImage, stoneSword, stoneSwordImage, basicSword1, basicSword1Image, basicSword2, basicSword2Image, basicSword3, basicSword3Image, basicSword4, basicSword4Image, uncommonSword1, uncommonSword1Image, uncommonSword2, uncommonSword2Image, uncommonSword3, uncommonSword3Image, uncommonSword4, uncommonSword4Image;
var mythicalSword, mythicalSwordImage, swordStopImage;
var bought1, bought2, bought3, bought4, bought5, bought6, bought7, bought8, bought9, bought10, bought11, bought12, bought13, bought14, bought15, bought16, bought17, bought18, bought19, bought20, bought21, bought22, bought23; 

var playerHealth, playerMaxHealth, playerDamage, playerAttackSpeed, slimeDoob, dragonMan, slimeDoobImage, dragonManImage; 

playerMaxHealth = 250; 
playerHealth = playerMaxHealth; 
playerDamage = 25; 
playerAttackSpeed = 0.333;

var timedLooper;

function preload() {
  mythicalSwordImage = loadImage("shopImages/WhiteHatJr Game Mythical Sword.png");
  heroImage = loadImage("shopImages/WhiteHatJr Game Hero Image.png");
  stickImage = loadImage("shopImages/WhiteHatJr Game Stick Image.png");
  armor1Image = loadImage("shopImages/WhiteHatJr Game Armor1 Image.png");
  armor2Image = loadImage("shopImages/WhiteHatJr Game Armor2 Image.png");
  armor3Image = loadImage("shopImages/WhiteHatJr Game Armor3 Image.png");
  armor4Image = loadImage("shopImages/WhiteHatJr Game Armor4 Image.png");
  armor5Image = loadImage("shopImages/WhiteHatJr Game Armor5 Image.png");
  armor6Image = loadImage("shopImages/WhiteHatJr Game Armor6 Image.png");
  armor7Image = loadImage("shopImages/WhiteHatJr Game Armor7 Image.png");
  armor8Image = loadImage("shopImages/WhiteHatJr Game Armor8 Image.png");
  armor9Image = loadImage("shopImages/WhiteHatJr Game Armor9 Image.png");
  armor10Image = loadImage("shopImages/WhiteHatJr Game Armor10 Image.png");
  basicSword1Image = loadImage("shopImages/WhiteHatJr Game Basic Sword.png");
  basicSword2Image = loadImage("shopImages/WhiteHatJr Game Basic Sword 2.png");
  basicSword3Image = loadImage("shopImages/WhiteHatJr Game Basic Sword 3.png");
  basicSword4Image = loadImage("shopImages/WhiteHatJr Game Basic Sword 4.png");
  woodenSwordImage = loadImage("shopImages/WhiteHatJr Game Wooden Sword.png");
  stoneSwordImage = loadImage("shopImages/WhiteHatJr Game Smooth Stone Sword.png");
  swordStopImage = loadImage("shopImages/WhiteHatJr Game Background Shop.png");
  dragonManImage = loadImage("shopImages/WhiteHatJr Game Dragon Monster.png");
  slimeDoobImage = loadImage("shopImages/WhiteHatJr Game Slime Monster.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  mythicalSword = createSprite(100, 100, 50, 50);
  mythicalSword.addImage(mythicalSwordImage);
  hero = createSprite(750, 300, 50, 50);
  hero.addImage(heroImage);
  stick = createSprite(50, 625, 50, 50);
  stick.addImage(stickImage);
  armor1 = createSprite(125, 625, 50, 50);
  armor1.addImage(armor1Image);
  armor2 = createSprite(250, 625, 50, 50);
  armor2.addImage(armor2Image);
  armor3 = createSprite(375, 625, 50, 50);
  armor3.addImage(armor3Image);
  armor4 = createSprite(500, 625, 50, 50);
  armor4.addImage(armor4Image);
  armor5 = createSprite(625, 625, 50, 50);
  armor5.addImage(armor5Image);
  armor6 = createSprite(750, 625, 50, 50);
  armor6.addImage(armor6Image);
  armor7 = createSprite(875, 625, 50, 50);
  armor7.addImage(armor7Image);
  armor8 = createSprite(1000, 625, 50, 50);
  armor8.addImage(armor8Image);
  armor9 = createSprite(1125, 625, 50, 50);
  armor9.addImage(armor9Image);
  armor10 = createSprite(75, 75, 50, 50);
  armor10.addImage(armor10Image);
  basicSword1 = createSprite(150, 125, 50, 50);
  basicSword1.addImage(basicSword1Image);
  basicSword2 = createSprite(260, 125, 50, 50);
  basicSword2.addImage(basicSword2Image);
  basicSword3 = createSprite(350, 125, 50, 50);
  basicSword3.addImage(basicSword3Image);
  basicSword4 = createSprite(410, 125, 50, 50);
  basicSword4.addImage(basicSword4Image);
  woodenSword = createSprite(610, 125, 50, 50);
  woodenSword.addImage(woodenSwordImage);
  stoneSword = createSprite(510, 125, 50, 50);
  stoneSword.addImage(stoneSwordImage);

  hero.depth = stoneSword.depth + 2;
  hero.scale = 0.333;
  mythicalSword.scale = 0.25;
  mythicalSword.depth = hero.depth + 1;
  armor10.scale = 0.333;
  armor10.depth = hero.depth + 2;
  stick.visible = false;
  stick.scale = 0.333;
  stick.depth = hero.depth + 1;
  armor1.scale = 0.333;
  armor2.scale = 0.333;
  armor3.scale = 0.333;
  armor4.scale = 0.333;
  armor5.scale = 0.333;
  armor6.scale = 0.333;
  armor7.scale = 0.333;
  armor8.scale = 0.333;
  armor9.scale = 0.333;
  armor10.scale = 0.333;
  basicSword1.scale = 0.333;
  basicSword2.scale = 0.333;
  basicSword3.scale = 0.333;
  basicSword4.scale = 0.333;
  woodenSword.scale = 0.333;
  stoneSword.scale = 0.333;
  timedLooper = createSprite(300, 300, 15, 35);
  timedLooper.scale = 3.75;
  timedLooper.shapeColor = "pink";

  slimeDoob = createSprite(1000, 50, 50, 50);
  slimeDoob.debug = true;
  slimeDoob.addImage(slimeDoobImage);
  slimeDoob.scale = 0.25;
}

function draw() {
  background(swordStopImage);

  
  if(mythicalSword.isTouching(slimeDoob)) {
    hero.x = 750;
    hero.y = 500;
  }

  if(playerHealth !== 0) {
    timedLooper.rotation = timedLooper.rotation + 1;
    if(timedLooper.rotation > 50) {
      playerHealth = playerHealth - playerDamage;
      timedLooper.rotation = 0;
    }
    fill("green");
    textSize(100);
    text(playerHealth, 550, 330);
  }
  if(playerHealth === 0) {
    fill("red");
    textSize(25);
    text("ur health is nothingness hahaha", 550, 330); 

  }
  


  
  console.log(mouseX, mouseY);
  
  if(hero.x > 0 && hero.x < 175) {

    hero.x = 750;
    hero.y = 300;


  }
  
  if(mythicalSword.visible === true) {
    mythicalSword.x = hero.x + 90;
    mythicalSword.y = hero.y - 40;
    mythicalSword.pointTo(hero.x + 175, hero.y + 25);
  }
  if(stick.visible === true) {
    stick.x = hero.x + 70;
    stick.y = hero.y - 30;
    stick.pointTo(hero.x + 175, hero.y + 25);
  }
  if(keyWentDown("SPACE")) {
    if(mythicalSword.visible === true) {
      mythicalSword.visible = false;
      stick.visible = true;
    }else if(mythicalSword.visible === false) {
      mythicalSword.visible = true;
      stick.visible = false;
    }else if(stick.visible === true) {
      stick.visible = false;
      mythicalSword.visible = true;
    }else if(stick.visible === false) {
      stick.visible = true;
      mythicalSword.visible = false;
    }    

  }
  if(keyDown("S")) {
    hero.y = hero.y + 2.5;
  }
  if(keyDown("A")) {
    hero.x = hero.x - 2.5;
  }
  if(keyDown("W")) {
    hero.y = hero.y - 2.5;
  }
  if(keyDown("D")) {
    hero.x = hero.x + 2.5;
  }
  if(keyDown(UP_ARROW)) {
    hero.y = hero.y - 2.5;
  }
  if(keyDown(LEFT_ARROW)) {
    hero.x = hero.x - 2.5;
  }
  if(keyDown(DOWN_ARROW)) {
    hero.y = hero.y + 2.5;
  }
  if(keyDown(RIGHT_ARROW)) {
    hero.x = hero.x + 2.5;
  }
  armor10.x = hero.x;
  armor10.y = hero.y;
  drawSprites();
}

//You are a couple's firstborn child in the 1980's and they believe you have the potential to save the world from the invading monsters.
//Will you save the planet from impending doom like a hero, or shall you wait and hide it out like a coward? You don't really have a choice.
//Would you like a tutorial? 