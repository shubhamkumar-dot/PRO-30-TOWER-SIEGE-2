class Block{
    constructor(x,y){
        var options  = {
              isStatic:false
        }
        this.body = Bodies.rectangle(x,y,25,20,options);
        this.width  =20;
        this.height = 20;
        World.add(world,this.body);
    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed > 3){
            World.remove(world,this.body);
            push();
            this.body.visible = false;
            this.body.Visibility = 0;
            fill("black")
            // tint(255,this.Visibility);
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }
        if(this.body.speed < 3){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        rectMode(CENTER);
        fill("green")
        rect(pos.x,pos.y,this.width,this.height);
        pop();
        }
    }
}