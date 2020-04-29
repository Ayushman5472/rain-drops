  const Engine = Matter.Engine
  const World = Matter.World
  const Bodies = Matter.Bodies
  
  var XPos
  var YPos
  
  var rain

  class drop {
    constructor(x,y,width, height){
    this.body = Bodies.rectangle(x,y,width,height)
    World.add(world,this.body)
    this.width = width;
    this.height = height;
    }
  }

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  var XPos = Math.floor(Math.random() * 801)
  var YPos = Math.floor(Math.random() * 401) 
  rain = []
}

function draw() {
  background("#FFE8DF");  
  Engine.update(engine);
  if(frameCount%20==0){
  Droplets();
  }
for(i = 0;i<rain.length; i++){
  rect(rain[i].body.position.x,rain[i].body.position.y,2,30)
}
}
function Droplets(){
  var x = 0
  for(i = 0; i<width/30;i++){
  var Drops = new drop (x,random(-3000,0), 2 ,30)
  rain.push(Drops);
  x = x+30
  }
}