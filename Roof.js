class Roof{
    constructor(x, y, width, height, roof_options) {
        var roof_options = {
            isStatic: true
        }
     
        this.body = Bodies.rectangle(x, y, width,height, roof_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display() {
        rectMode(CENTER)
        fill("grey");
     rect(this.body.position.x, this.body.position.y, this.width, this.height);
     }
}