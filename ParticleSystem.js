class ParticleSystem {
    constructor() {
        this.particles = [];
        
        this.acc = 0.1;
    }

    spread() {
        if(this.particles){
            this.particles.forEach(e => {
                e.pos.x += e.dir.x
                e.pos.y += e.dir.y;
                // console.log(e.y)
            })
        }        
    }

    applyForce() {
        this.particles.forEach(e => {
            if (e.vel <= 5) {
                e.vel += this.acc
            }
            e.pos.y += e.vel;
        })
    }

    show() {
        if(this.particles){
            this.particles.forEach(e => {
                e.show(this.img100);
            }) 
        }
        
    }
}