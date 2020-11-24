function collide(ob1,ob2){
    if(ob1.x-ob2.x < ob2.width/2+ob1.width/2 && 
        ob2.x - ob1.x < ob2.width/2+ob1.width/2 &&
        ob1.y - ob2.y < ob2.height/2+ob1.height/2 &&    
        ob2.y - ob1.y < ob2.height/2+ob1.height/2){
        ob1.velocityX = ob1.velocityX*(0);
        ob1.velocityY = ob1.velocityY*(0);
        ob2.velocityX = ob2.velocityX*(0);
        ob2.velocityY = ob2.velocityY*(0);
        textSize(25);
        fill("black");
        text("collide function executed",500,100);
        }
}