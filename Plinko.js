class Plinko {
    constructor(x,y) {

        var options={

            isStatic : true,
            restitution :0.3,
            friction : 0.5,
            density : 1.2

        }
        this.body = Bodies.circle(x,y,7,options);
        World.add(world, this.body);
        this.r = 7;
    }
    
    display() {
        var pos = this.body.position;

        //push()
        //translate(pos.x, pos.y);
        ellipseMode(RADIUS)
        //strokeWeight(3);
        fill(255,255,255)
        ellipse(pos.x, pos.y,this.r,this.r);
        //pop()
    }
}