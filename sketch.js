
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

	//Crie os Corpos Aqui.

	var plane_options={
		isStatic: true
	}

	var block1_options={
		restitution:0.5,
		friction:0.02,
		frictionAir:0,
	}

	var block2_options={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1,
	}

	var block3_options={
		restitution:0.3,
		friction:0.05,
		frictionAir:0.2,
	}

	plane= Bodies.rectangle(400,700,800,20, plane_options);
	World.add(world,plane);

	block1= Bodies.circle(400,10,40,block1_options);
	World.add(world,block1);

	block2= Bodies.rectangle(110,50,100,100,block2_options);
	World.add(world,block2);

	block3= Bodies.rectangle(690,50,160,80,block3_options);
	World.add(world,block3);

	rectMode(CENTER);
	ellipseMode(RADIUS);
	fill("purple");

	Engine.run(engine);
  
}


function draw() {

	background("black");
	Engine.update(engine);

	rect(plane.position.x,plane.position.y,800,20);
	ellipse(block1.position.x,block1.position.y,40);
	rect(block2.position.x,block2.position.y,100,100);
	rect(block3.position.x,block3.position.y,160,80);
  
  drawSprites();
 
}



