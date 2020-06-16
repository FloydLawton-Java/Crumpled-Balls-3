class Paper {
    constructor(x,y, radius) {
      var options = {
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.x=x;
      this.y=y;
      this.radius= radius;
      this.body = Bodies.circle(this.x,this.y, this.radius, options);
      this.image = loadImage("Images/paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      //fill("pink");
      //ellipseMode(RADIUS);
      //ellipse(0, 0, this.radius, this.radius);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius, this.radius);
      pop();
     //circle(pos.x, pos.y, this.radius);
    }
  };