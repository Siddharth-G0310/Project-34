
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;

var craneBody
var craneArm

var chain

var wall






function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  craneBody = createSprite(150, 90, 100, 20)
  craneArm = createSprite(200, 230, 20, 300)

  wall = createSprite(20, 200, 10, 350)

  chain = new Chain(10, {x:100, y:90})

  
  
}


function draw() 
{
  background(51);
  Engine.update(engine);

  if(collide(chain, wall) == true){
    console.log("hi")
    wall.visible = false
    
  }


  drawSprites()

  chain.show()
 
  
}

function collide(sprite, sprite)
{

  
  if(sprite!=null)
        {
         var d = dist(sprite.position.x,sprite.position.y,sprite.position.x,sprite.position.y);
          if(d>=1)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}

