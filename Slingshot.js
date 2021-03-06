class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(7);
            stroke(48,22,8);
            line(pointA.x20, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    reappear(body){
        this.sling.bodyA = body; 
    }
}