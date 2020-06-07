class MoveLight{
    constructor(){
        this.lights = [];
        this.x = null;
        this.y = null;
    }

    addPoint(){
        this.lights.push([this.x, this.y]);
    }

    shiftPoint(){
        this.lights.shift();
    }

    show(){
        this.lights.forEach((e) => {
            point(e[0], e[1]);
        })
    }
}