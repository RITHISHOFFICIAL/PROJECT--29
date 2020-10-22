
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  stand=new ground(500,600,400,10);
	  block1=new block(350,590,40,40);
	  block2=new block(400,590,40,40);
	  block3=new block(450,590,40,40);
	  block4=new block(500,590,40,40);
	  block5=new block(550,590,40,40);
	  block6=new block(600,590,40,40);
	  block8=new block(375,540,40,40);
	  block9=new block(425,540,40,40);
	  block10=new block(475,540,40,40);
	  block11=new block(525,540,40,40);
	  block12=new block(575,540,40,40);
	  block13=new block(400,490,40,40);
	  block14=new block(450,490,40,40);
	  block15=new block(500,490,40,40);
      block16=new block(550,490,40,40);
      block17=new block(525,440,40,40);
	  block18=new block(475,440,40,40);
	  block19=new block(425,440,40,40);
	  block20=new block(450,390,40,40);
	  block21=new block(500,390,40,40);
	  block22=new block(475,340,40,40);

	  //polygon1=new block(100,200,20,20);

	  //slingshot1=new slingshot(polygon1.body,{x:100,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();


 
  drawSprites();
 
}

//function mouseDragged(){
   /// Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//}


//function mouseReleased(){
   // slingshot.fly();
//}

