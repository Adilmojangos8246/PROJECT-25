
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

	box1 = new Box(400,585,100,20);
	box2 = new Box(460,545,20,100); 
    box3 = new Box(339,545,20,100);
	
	paper1 = new Paper(20,200,50);

	dustbin1 = new dustbin(400,495,170,200)


	Engine.run(engine);
  

	ground = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
	World.add(world, ground);

}


function draw() {
  rectMode(CENTER);
  background("yellow");
  

  rect(ground.position.x,ground.position.y,width,10);

 box1.display();
 box2.display();
 box3.display();
 dustbin1.display();
 paper1.display();
 

 drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-35});
  }
}

