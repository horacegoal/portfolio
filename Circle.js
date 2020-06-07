class Circle {
    constructor(r) {
        this.ps = new ParticleSystem();
        this.life = 255;
        this.x = width / 2;
        this.y = height / 2;
        this.r = r;
        this.points = [];
        let a = this.r * - 1;
        for (let i = a; i <= this.r; i++) {
            let j = this.findY(i) * -1
            this.points.push([i, j]);
        }
        this.pointsCopy = [];
        for(let i = 0; i < this.points.length; i++){
            this.pointsCopy.push(this.points[i]);
        }
        for(let i = this.pointsCopy.length - 1; i >= 0; i--){
            this.points.push([this.pointsCopy[i][0], this.pointsCopy[i][1] * - 1])
        }
    }

    findY(x) {
        return Math.sqrt(Math.pow(this.r, 2) - Math.pow(x, 2));
    }

    draw(x) {
        stroke(181, 235, 255, this.life);
        strokeWeight(3)

        push()
        translate(this.x, this.y);
        // let points = [];
        noFill();
        beginShape();

        for (let i = 0; i <= x; i++) {
            let p = this.points[i]
            vertex(p[0], p[1])
        }

        // points.forEach(p => vertex(p[0], p[1]));
        // console.log(points)
        endShape()
        pop();

        // console.log(points)  
    }
}