var moving_rec,fixed_rec



function setup() {

  createCanvas(800,400);
 moving_rec = createSprite(400, 200, 50, 50);
 moving_rec.shapeColor = "white"
fixed_rec = createSprite(105,200,50,50)
fixed_rec.shapeColor = "white"
}

function draw() {
  background(0);
  moving_rec.x = World.mouseX
  moving_rec.y = World.mouseY
  if (moving_rec.x-fixed_rec.x<moving_rec.width/2+fixed_rec.width/2&&
     fixed_rec.x-moving_rec.x<moving_rec.width/2+fixed_rec.width/2&&
     moving_rec.y-fixed_rec.y<moving_rec.height/2+fixed_rec.height/2&&
     fixed_rec.y-moving_rec.y<moving_rec.height/2+fixed_rec.height/2){
    moving_rec.shapeColor = "blue"
    fixed_rec.shapeColor = "blue"
  }
  else{

    moving_rec.shapeColor = "white"
    fixed_rec.shapeColor = "white"
  
  }
 drawSprites();
}