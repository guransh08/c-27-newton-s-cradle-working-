class Chain{

    constructor(bodyA,bodyB,offsetX,offsetY){
    
        this.offsetX=offsetX
        this.offsetY=offsetY
    var a={
    bodyA:bodyA,
    bodyB:bodyB,
    pointB:{x:this.offsetX,y:this.offsetY}
   
   
    }
  
    
    this.chain=Constraint.create(a)
    World.add(world,this.chain)
    }
    
    display(){
    
    var pointA=this.chain.bodyA.position
    var pointB=this.chain.bodyB.position
    fill ("lightBlue")
    line (pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY)
    }
    }