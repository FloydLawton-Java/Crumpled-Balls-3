var ball;
var box1, box2, box3,ground, chain;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
//const Body = Matter.Body;
//const Render = Matter.Render;
//function preload()
//{
	
//}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
/*
	//Create a Ground
	box1=new Dustbin(900,380,200,20); 
	box2=new Dustbin(800,340,20,100); 
	box2.shapeColor= "white";
	box3=new Dustbin(1000,340,20,100);
	box3.shapeColor= "white"; 
*/
	ground= new Ground(800, 670, 1600, 20);
	ball=new Paper(40,100,50);
	dustbin= new Dustbin(1200, 650);

	chain= new launcher(ball.body, {x:200, y:300})

}

function draw() {
  //rectMode(CENTER);
  background("white");
  Engine.update(engine);
  //keyPressed();
/*
  box1.display();
  box2.display();
  box3.display();
  */
  ground.display();
	dustbin.display();
  ball.display();
  chain.display();
  drawSprites();
 
}
/*
function keyPressed(){
   if (keyCode == UP_ARROW){
	   Matter.Body.applyForce(ball.body, ball.body.position, {
		   x:130, 
		   y:-145
	   });
   }
}
*/
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {
        x:mouseX,
        y:mouseY
    })
}
function mouseReleased(){
    chain.fly();
}
