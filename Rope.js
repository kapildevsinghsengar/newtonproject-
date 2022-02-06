class Rope{
	constructor(body1,body2, offsetX,offsetY)
	{
		this.offsetX=offsetX;
		this.offsetY=offsetY;
		var options={
			
			bodyA:body1,
			bodyB:body2,
	        pointB: {x:this.offsetX,y:this.offsetY}
		}

		this.rope=Constraint.create(options);
		World.add(world,this.rope);
	}

	display(){
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;
        strokeWeight(2);
		
		
	
		
		// var Anchor1X = point.x;
		 //var Anchor1Y = point.y;

		 //var Anchor2X = point2.x + this.offsetX;
		// var Anchor2Y = point2.y + this.offsetY;
		//CHOOSE THE CORRECT OPTION TO RENDER A LINE BETWEEN THE TWO BODIES

		 
		 line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y+this.offsetY);
		// line(pointA.x, pointA.y, pointB.x + this.offsetX);
		// line(pointA.x, pointA.y + this.offsetX,, pointB.x, pointB.y);
		
	}

}