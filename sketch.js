
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world

var floor
var rubish1
var rubish2

var ball
var ball_options

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);
	ball_options=
{

	isStatic:false,
	restitution: 0.3,
	friction: 0,
	density:1.2

}
	
floor = new Ground(0,300,800,10)

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
}

function draw()
{

 rectMode(CENTER);

background(0);

ellipse(ball.position.x, ball.position.y,20);

Engine.update(engine);

floor.show();

drawSprites();

} 



