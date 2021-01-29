
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  mango1=new mango(1100,100,30);
  mango2=new mango(1000,100,30);
  mango3=new mango(1100,175,30);
  mango4=new mango(1000,175,30);
  mango5=new mango(1200,190,30);
  mango6=new mango(900,200,30);
  mango7=new mango(950,250,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone = new Stone(240,420,20);
	rope1 = new Chain(stone.body,{x:240,y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  rope1.display();

  groundObject.display();

  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);
  detectollision(stone, mango6)
  detectollision(stone, mango7);;


}

function mouseDragged(){
   
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    rope1.fly();
    
}

function keyPressed(){
  if(keyCode === 32 ){
     rope1.attach(stone.body);
  }
}

function detectollision(Lstone,Lmango) {
  mangoBodyPosition = Lmango.body.position
  stoneBodyPosition = Lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  if (distance <= Lmango.r + Lstone.r) {
    Matter.Body.setStatic(Lmango.body,false);
  }

}
