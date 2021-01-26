class Box {
    constructor(x, y, width, height) {
      var options = {
         
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
     
      this.height = height; 
      this.Visible =  255
            World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      
      if(this.body.speed < 3){
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4)
      stroke("white")
      fill("red");
      rect(0, 0, this.width, this.height);
      }
      else{
        this.Visible = this.Visible - 5
        tint(255,this.Visible)
        World.remove(world, this.body)
        
        
        
        
      }
      pop();
    }
  };
  