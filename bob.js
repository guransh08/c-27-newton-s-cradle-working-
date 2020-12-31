class Bob{

    constructor(x,y){
    
        var options={
    isStatic:false,
    restitution:1,
    friction:0.5,
    density:1.2
        }
    
    this.body=Bodies.circle(x,y,20,options)
    this.r=20
    this.bobDiameter=40
    
    World .add(world,this.body)
    }
    display(){
    
    var pos=this.body.position
    ellipseMode(RADIUS)
    fill(255,75,75)
    ellipse(pos.x,pos.y,this.r,this.r)
    
    }
    
    
    }