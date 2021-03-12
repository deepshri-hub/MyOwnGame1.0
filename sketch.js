const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box,ball1,ball2,ball3;
var log1,log2,log3,lo4,log5,log6;
var score = 0;

function preload() {
    
    //ball = loadImage("");
    log1 = loadImage("sprites/wood2.png");
    log2 = loadImage("sprites/wood2.png");
    log3 = loadImage("sprites/wood2.png");
    log4 = loadImage("sprites/wood2.png");
    log5 = loadImage("sprites/wood2.png");
    log6 = loadImage("sprites/wood2.png");

    background = loadImage("sprites/Backgroung.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
        
    log1 = new Log(810,260,300, PI/2);
    log2 = new Log(810,260,300, PI/2);
    log3 =  new Log(810,180,300, PI/2);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    log6 = new Log(230,180,80, PI/2);

    ball1 = new Ball(200,50);
    ball2 = new Ball(200,50);
    ball3 = new Ball(200,50);
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
   
    box.display();
    log1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    ball1.display();
    ball2.display();
    ball3.display();
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed<1){
        bird.trajectory=[];  
        Matter.Body.setPosition(bird.body , {x:150 , y:100} );
       slingshot.attach(bird.body);
    }
  }

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
    }