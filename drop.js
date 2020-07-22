class Drop{
constructor(x,y){
this.xPosition=x
this.yPosition=y
this.radiusX=random(5,10)
this.radiusY=random(8,15)
}
fall(){
    this.yPosition=this.yPosition+random(5,15) 
    if(this.yPosition>height){
        this.yPosition=0
    }
}

display(){
fill(random(0,255),random(0,255),random(180,255))
ellipse(this.xPosition,this.yPosition,this.radiusX,this.radiusY)
}
}