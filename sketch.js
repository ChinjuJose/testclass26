const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;
var ground, ball;

var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4, log5;
var bird;
var bgImg;

function preload(){
    bgImg = loadImage("sprites/bg.png");
}

function setup() {
    
    createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,10);
   
    box1 = new Box(700,300,50,50);
    box2 = new Box(900,300,50,50);
    pig1 = new Pig(800,300);
    log1 = new Log(800,240,350,PI/2);
    
    box3 = new Box(700,200,50,50);
    box4 = new Box(900,200,50,50);
    pig2 = new Pig(800,200);
    log2 = new Log(800,180,350,PI/2);

    box5 = new Box(800,150,50,50);
    log3 = new Log(765,140,150,PI/7);
    log4 = new Log(835,140,150,-PI/7);

    bird = new Bird(100,100);

}

function draw() {

    background(bgImg);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
   

}