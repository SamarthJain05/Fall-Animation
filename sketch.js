var drop,rain=[],backgroundImage
function preload(){
  getTime()
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  for(var i=0;i<500;i++){
  drop=new Drop(random(0,width),random(0,height))
  rain.push(drop)
  }

}

function draw() {
  if(backgroundImage){
    background(backgroundImage);
  }
  for(var i=0;i<rain.length;i++){
    rain[i].display()
    rain[i].fall()
  }
}
 async function getTime(){
  var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
  var responseJSON=await response.json()
  var dayTime=responseJSON.datetime
  var hour=dayTime.slice(11,13)
  if (hour>=06 && hour<20) {
    backgroundImage=loadImage("morning.jpg")
  } else {
    backgroundImage=loadImage("night.jpg")
  }

}