
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var roof,rope1,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobDiameter;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,230,230,20);
	//World.add(world,roof);

    bobObject1 = new Bob(320,575,40);
	bobObject2 = new Bob(360,575,40);
	bobObject3 = new Bob(400,575,40);
	bobObject4 = new Bob(440,575,40);
	bobObject5 = new Bob(480,575,40);
	
	rope1=new Rope( bobObject1.body,roof.body,-80,0)
	//World.add(world,rope1);
	rope2=new Rope( bobObject2.body,roof.body,-40,0)
	//World.add(world,rope2);
	rope3=new Rope( bobObject3.body,roof.body,0,0)
	//World.add(world,rope3);
	rope4=new Rope( bobObject4.body,roof.body,40,0)
	//World.add(world,rope4);
	rope5=new Rope( bobObject5.body,roof.body,80,0)
	//World.add(world,rope5);
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}


//CHOOSE THE CORRECT OPTION TO APPLY A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED

// function keyPressed() {
// 	if (keyCode === DOWN_ARROW) {
// 		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
// 	}
// }

// function keyPressed() {
// 	if (keyCode === UP_ARROW) {
// 		Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45});
// 	}
// }

// function keyPressed() {
// 	if (keyCode === UP_ARROW) {
// 		Matter.Body.applyForce(bob1.body,{x:-50,y:-45});
// 	}
// }

function keyPressed() {
 	if (keyCode === UP_ARROW) {
 		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
 	}
}
