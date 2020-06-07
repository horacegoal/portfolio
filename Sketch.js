let ps, ps2;
let pointsOfbo2;
let img100, img75, img50, img25;
let bo, bo2;
let startX;
let points;
let drawPt1, drawPt2;
let event;
let cursor;
let cursorGrow, cursorShrink;
let moveLight;
let getXY;
let displayW, displayH, displayX, displayY;
let loopTime = 1;
let shorterLight = false;
let listItemFinished = false;
function preload() {
    img100 = loadImage('particle.png');
    img75 = loadImage('particle75.png');
    img50 = loadImage('particle50.png');
    img25 = loadImage('particle25.png');
}

function setup() {
    event = new Event('animated');
    cursorGrow = false;
    cursorShrink = false;
    getXY = false;
    window.addEventListener('hoverBox', () => { cursorGrow = true; cursorShrink = false; })
    window.addEventListener('LeaveBox', () => { cursorShrink = true; cursorGrow = false; })
    window.addEventListener('listItemFinished', () => { listItemFinished = true; })
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0, 'fixed');
    cnv.style('z-index', '1')
    cnv.style('pointer-events', 'none')
    ps = new ParticleSystem();
    ps2 = new ParticleSystem();
    bo = new Circle(50);
    bo2 = new Circle(5);
    cursor = new Cursor();
    moveLight = new MoveLight();
    window.addEventListener('getXY', (event) => {
        moveLight.x = Math.floor(event.detail.x);
        moveLight.y = Math.floor(event.detail.y);
        displayX = Math.floor(event.detail.x);
        displayY = Math.floor(event.detail.y);
        displayW = Math.floor(event.detail.width);
        displayH = Math.floor(event.detail.height);
        console.log(moveLight.x, moveLight.y)
        getXY = true;
        moveLight.lights = [];
        loopTime = 1;
        shorterLight = false;
        console.log(moveLight)

    })


    pointsOfbo2 = bo2.points;
    drawPt2 = 0;
    drawPt1 = 0;
    // startX = bo.r * -1;
    // points = [];
    // cnv.style('z-index: -1')
    imageMode(CENTER)
    // cnv.addClass('myCanvas')
}

let rate = 2;
let rectY = 0;
let rectY2 = 300;
let notDispatched = true;
function draw() {
    clear()
    noStroke()
    // fill(color(21, 21, 27))

    bo2.draw(drawPt2);


    if (frameCount % rate === 0 && drawPt2 < bo2.points.length - 1) {
        ps2.particles.push(new Particle(10, img100, img75, img50, img25, pointsOfbo2[drawPt2][0] + width / 2, pointsOfbo2[drawPt2][1] + height / 2))

    }
    //end particles spread when drawPt2(particles index) get to the last particle index
    if (drawPt2 === bo2.points.length - 1) {
        ps2.particles = null;
        if (bo2.life >= 0) {
            bo2.life -= 10;
        } else {
            if (notDispatched) {
                window.dispatchEvent(event);
                notDispatched = false;
                clear();
                // noLoop();

            }
            // clear();
            // noLoop();
        }


    }
    if (ps2.particles && ps2.particles.length > 20) {
        ps2.particles.shift();
    }
    ps2.spread();
    ps2.show();
    // if (drawPt1 < bo.points.length - 1) {
    //     drawPt1++;

    // }
    if (drawPt2 < bo2.points.length - 1) {
        drawPt2++;

    }

    if (cursor.r1 < 150 && cursorGrow) {
        cursor.r1 += 2;
        cursor.r2 += 2;
    }

    if (cursor.r1 >= 40 && cursorShrink) {
        cursor.r1 -= 2;
        cursor.r2 -= 2;
    }

    cursor.show();
    if (getXY && listItemFinished) {


        if (loopTime > 0) {
            for (let i = 0; i < loopTime; i++) {
                if (moveLight.y === displayY + displayH && moveLight.x > displayX) {
                    shorterLight = true;
                    moveLight.x--;
                    moveLight.addPoint();
                    if (i === loopTime - 1) {
                        for (let i = loopTime - 7; i < loopTime; i++) {
                            moveLight.shiftPoint();

                        }
                    }
                    moveLight.shiftPoint();


                } else {
                    if (moveLight.x === displayX + displayW) {
                        moveLight.y++;
                        moveLight.addPoint();
                        if (i + 5 < loopTime - 1) {
                            moveLight.shiftPoint();

                        }

                    } else if (moveLight.y === displayY) {
                        moveLight.x++;
                        moveLight.addPoint();
                        if (i + 5 < loopTime - 1) {
                            moveLight.shiftPoint();

                        }

                    } else {
                        shorterLight = true;

                        moveLight.y--;
                        moveLight.addPoint();
                        if (i === loopTime - 1) {
                            for (let i = loopTime - 7; i < loopTime; i++) {
                                moveLight.shiftPoint();

                            }
                        }
                       
                        moveLight.shiftPoint();
                        if (moveLight.lights.length === 0) {
                            getXY = false;
                            loopTime = 1;
                            shorterLight = false;
                            window.dispatchEvent(new Event('play'))

                        }
                    }
                }
            }
        }

        if (loopTime > 0) {
            if (shorterLight) {
                loopTime -= 1;
            } else {
                loopTime += 1;

            }
        }
        // stroke('black')
        // strokeWeight(8)
        moveLight.show();
        // noLoop()

    }
}
