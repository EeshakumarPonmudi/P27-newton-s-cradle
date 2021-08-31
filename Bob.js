class Bob{
    constructor(x, y, radius,angle) {
        var bob_options = {
            isStatic: false,
            restitution: 1,
            friction: 0.5,
            density:1.2
        }
        
        this.body = Matter.Bodies.circle(x, y, radius, bob_options);
        this.radius = 80;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("purple");
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        circle(0, 0, this.radius);
        pop();
    }
}