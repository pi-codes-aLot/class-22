const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
      isStatic : true,
  }
  
  var option = {
    restitution : 2
  }

  ground = Bodies.rectangle(200,380,400,10,options);
  
  World.add(world,ground);
  ball = Bodies.circle(200, 200, 30, option);
  World.add(world, ball);
  console.log(ground);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30);
 

}