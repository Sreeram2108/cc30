const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;

function preload(){
  bg_img = loadImage('images/background.png');
  food = loadImage('images/melon.png');
  rabbit = loadImage('images/Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,600);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;
  
  rope = new Rope(5,{x:220,y:30});
  ground = new Ground(200,590,600,20);

  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  bunny=createSprite(250,520)
  bunny.addImage(rabbit)
  bunny.scale=0.2

  button=createImg('images/cut_btn.png')
  button.position(200,30)
  button.size(50,50)
  button.mouseClicked(drop)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(bg_img);
  ground.show();
  rope.show()
  Engine.update(engine);
  imageMode(CENTER);
  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  }

 drawSprites()
   
}

function drop(){
  rope.break()
  fruit_con.detach()
  fruit_con= null
}
