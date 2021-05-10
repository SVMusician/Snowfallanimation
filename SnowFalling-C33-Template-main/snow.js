class Snow {
    constructor(x,y){
        var options = {friction : 1,
                       density  : 1,
                       airFriction : 0}
        this.body = Bodies.circle(x,y,20,options)
        this.image = loadImage ("SNOWball.png")
        World.add(world,this.body)
                    }
display(){
    var pos = this.body.position 
    push();
    rotate(this.body.angle)
    translate(pos.x, pos.y)
    imageMode(CENTER)
    image(this.image,0,0,20,20)


    pop();
}
                }