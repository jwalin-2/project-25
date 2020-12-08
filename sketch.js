var ground,dustbin1,dustbin2,dustbin3,paper

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,600,900,10);

	dustbin1=new Dustbin(700,680,150,10);
	
	dustbin2=new Dustbin(630,640,10,70);

	dustbin3=new Dustbin(770,640,10,70);
	
    paper=new Paper(390,550,20);

	Engine.run(engine);
 
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

}

function keyPrssed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.Body,paperObject.body.position,{x:100,y:100})
}
}

