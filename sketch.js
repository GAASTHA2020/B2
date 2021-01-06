const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myWorld;
var ground;


function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  myworld=myengine.world;
  //my World is my Engine's World


  var ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,380,400,10);
  World.add(myworld,ground);
  console.log(ground);
  //console.log(ground.position.x);
 // console.log(ground.position.y);



  
}

function draw() {
  background("black");  
  Engine.update(myengine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,10);

}