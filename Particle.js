class Particle{
    constructor(w, img100, img75, img50, img25, x, y){
        this.pos = createVector(x, y)
        this.w = w;
        this.dir = createVector(random(-2, 2), random(4));
        this.life = 40;
        this.vel = 0;
        this.img100 = img100;
        this.img75 = img75;
        this.img50 = img50;
        this.img25 = img25;
        this.img;
    }



    show(){
        if(this.life > 30){
            this.img = this.img100
        }else if(this.life > 20){
            this.img = this.img75
        }else if(this.life > 10){
            this.img = this.img50
        }else{
            this.img = this.img25
        }
        image(this.img, this.pos.x, this.pos.y, this.w, this.w)
        this.life--;
    }
}