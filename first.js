
		var canvas;

		function setup() {
		  frameRate(300);
		  canvas = createCanvas(12000,900);
		  canvas.class("overlayer");


		  
		}

		function draw() {
		      // fill(255,50,50)
		      // stroke(255,40,0)
		      // ellipse(touchX,touchY,40,40)
		        
		      // textSize(32);
		      // fill(51, 255, 215);
		      // stroke(51, 255, 215 ,50)
		      // text("hire me",touchX,touchY);
		        
		      textSize(mouseX, mouseY)
		      fill(255,255,0)
		      stroke(51, 255, 215)
		      strokeWeight(2)
		      text("hire me",touchX,touchY)

}
