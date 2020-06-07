class Cursor{
    constructor(){
        this.x = mouseX;
        this.y = mouseY;
        this.r1 = 40;
        this.r2 = 30;
        this.angle1 = 0;
        this.angle2 = 0;
    }

    show(){
        stroke(181, 235, 255, 200);
        strokeWeight(2)
        // ellipse(mouseX, mouseY, 10);
        angleMode(RADIANS);
        noFill()
        push();
        translate(mouseX, mouseY);
        this.angle1 += 0.01;
        rotate(this.angle1)
        arc(0, 0, this.r1, this.r1, 0, HALF_PI - 0.5);
        arc(0, 0, this.r1, this.r1, HALF_PI, PI - 0.5);
        arc(0, 0, this.r1, this.r1, PI, PI + HALF_PI - 0.5);
        arc(0, 0, this.r1, this.r1, PI + HALF_PI, TWO_PI - 0.5);
        this.angle2 -= 0.02;
        rotate(this.angle2)
        arc(0, 0, this.r2, this.r2, 0, HALF_PI - 0.5);
        arc(0, 0, this.r2, this.r2, HALF_PI, PI - 0.5);
        arc(0, 0, this.r2, this.r2, PI, PI + HALF_PI - 0.5);
        arc(0, 0, this.r2, this.r2, PI + HALF_PI, TWO_PI - 0.5);
        pop();
    }
}