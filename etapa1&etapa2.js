/* 
    Equipe: 
        Kauana Caroline Neves de Araújo - Subturma D (Líder)
        Raffael Morais Dutra - Subturma C 
        Etapa 1 & 2
*/

x=200;
y=300;
xq=175;
function setup() {
  createCanvas(400, 400);
   
}
function draw() {
  background("grey");
  //Comando de Movimento
  if (keyIsDown(LEFT_ARROW)) {
    x -= 10;
    if(x<-15){
      x=400
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 10;
    if(x>415){
      x=0
    }
    
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 10;
    if(y<-15){
      y=400
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 10;
    if(y>415){
      y=0
    }
  }
  
  ellipse(x, y,40, 50);
  fill("red")
  rect(xq,20,40,50);
  fill("blue")
    xq=xq+2
  if(xq>400){
    xq=-19
  }
  
}
