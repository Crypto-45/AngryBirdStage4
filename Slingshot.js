class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image1 = loadImage("sprites/sling1.png")
        this.image2 = loadImage("sprites/sling2.png")
        this.image3 = loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,200,25)
        image(this.image2,170,18)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            stroke(48,22,8)
            if(pointA.x<210){
             strokeWeight(6);
            line(pointA.x, pointA.y, pointB.x+29, pointB.y);
            line(pointA.x,pointA.y,pointB.x-20,pointB.y);
            image(this.image3,pointA.x-20,pointA.y-20,15,30)
            }
            else {
            strokeWeight(4);
            line(pointA.x+20, pointA.y, pointB.x-29, pointB.y);
            line(pointA.x+20,pointA.y,pointB.x+20,pointB.y);
            image(this.image3,pointA.x+20,pointA.y-20,15,30)

            }
            
            
            
        }
    }
    
}