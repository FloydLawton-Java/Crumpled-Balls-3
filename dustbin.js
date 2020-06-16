class Dustbin {
  constructor(x, y) {
    var options = {
        isStatic:true
    }
    this.x=x;
		this.y=y;
		this.width=200;
		this.height=213;
		this.wallThickness=20;
		
		this.image=loadImage("Images/dustbingreen.png")
		this.bottom=Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, options);
		this.left=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.wallThickness, this.height, options)
		
		

		this.right=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.wallThickness, this.height, options);
		
		World.add(world, this.bottom)
	    World.add(world, this.left)
	World.add(world, this.right);

	}
	display()
	{
			var posBottom=this.bottom.position;
			var posLeft=this.left.position;
			var posRight=this.right.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255)
			//rotate(this.angle)
			rect(0,0,this.wallThickness, this.height);
			pop();

			push();
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255);
		//	rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.height);
			pop();

			push();
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width, this.height)
			rect(0,0,this.width, this.wallThickness);
			pop();
			
	}

}
