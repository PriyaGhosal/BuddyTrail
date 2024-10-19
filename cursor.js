class Cursor {
    constructor(t) {
        this.bindAll(this, ["resize", "move", "touch", "draw"]),
        this.colors = t.colors,
        this.D = document,
        this.W = window,
        this.container = t.el,
        this.time = t.time,
        this.char = t.character,
        this.particles = [],
        this.init()
    }
    hasTouch() {
        var t = "ontouchstart"in this.D
          , s = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1
          , i = !!this.W.navigator.msPointerEnabled;
        return t || s || i
    }
    init() {
        this.resize(),
        this.events(),
        this.draw()
    }
    events() {
        this.W.addEventListener("resize", this.resize),
        this.hasTouch() ? (this.D.addEventListener("touchmove", this.touch),
        this.D.addEventListener("touchstart", this.touch)) : this.D.addEventListener("mousemove", this.move)
    }
    draw() {
        requestAnimationFrame(this.draw),
        this.update()
    }
    resize() {
        this.win = {
            W: this.W.innerWidth,
            H: this.W.innerHeight
        },
        this.cursor = {
            x: this.win.W / 2,
            y: this.win.W / 2
        }
    }
   /* move(t) {
        this.cursor.x = t.clientX,
        this.cursor.y = t.clientY,
        console.log(`Cursor position: (${this.cursor.x}, ${this.cursor.y})`),

        this.create(this.cursor.x, this.cursor.y, this.colors[Math.floor(Math.random() * this.colors.length)])
    }
    touch(t) {
        if (t.touches.length > 0)
            for (var s = 0; s < t.touches.length; s++)
                this.create(t.touches[s].clientX, t.touches[s].clientY, this.colors[Math.floor(Math.random() * this.colors.length)])
    }
    create(t, s, i) {
        this.particle = new Particle(this.container,this.char,this.time),
        this.particle.init(t, s, i),
        this.particles.push(this.particle)
    }
        */
    move(t) {
        this.cursor.x = t.clientX;
        this.cursor.y = t.clientY;
        // console.log(`Cursor position: (${this.cursor.x}, ${this.cursor.y})`);
    
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        // console.log(`Creating particle with color: ${color}`);
        this.create(this.cursor.x, this.cursor.y, color);
    }
    
    touch(t) {
        if (t.touches.length > 0) {
            for (var s = 0; s < t.touches.length; s++) {
                const touchX = t.touches[s].clientX;
                const touchY = t.touches[s].clientY;
                // console.log(`Touch position: (${touchX}, ${touchY})`);
    
                const color = this.colors[Math.floor(Math.random() * this.colors.length)];
                // console.log(`Creating particle with color: ${color}`);
                this.create(touchX, touchY, color);
            }
        }
    }
    
    create(t, s, i) {
        // console.log(`Creating particle at: (${t}, ${s}) with color: ${i}`);
        this.particle = new Particle(this.container, this.char, this.time);
        this.particle.init(t, s, i);
        this.particles.push(this.particle);
    }
    
    /*update() {
        for (var t = 0; t < this.particles.length; t++)
            this.particles[t].update();
        for (t = this.particles.length - 1; t >= 0; t--)
            this.particles[t].time < 0 && (this.particles[t].destroy(),
            this.particles.splice(t, 1))
    }
    bindAll(t, s) {
        const i = s.length;
        for (let e = 0; e < i; e++)
            t[s[e]] = t[s[e]].bind(t)
    }
    
}
    */
update() {
    // console.log("Updating particles...");
    for (var t = 0; t < this.particles.length; t++) {
        // console.log(`Updating particle ${t} at position (${this.particles[t].pos.x}, ${this.particles[t].pos.y})`);
        this.particles[t].update();
    }
    for (t = this.particles.length - 1; t >= 0; t--) {
        if (this.particles[t].time < 0) {
            // console.log(`Destroying particle ${t} at position (${this.particles[t].pos.x}, ${this.particles[t].pos.y})`);
            this.particles[t].destroy();
            this.particles.splice(t, 1);
        }
    }
    // console.log("Particle update complete.");
}

bindAll(t, s) {
    // console.log("Binding methods...");
    const i = s.length;
    for (let e = 0; e < i; e++) {
        console.log(`Binding method: ${s[e]}`);
        t[s[e]] = t[s[e]].bind(t);
    }
    // console.log("Method binding complete.");
}
}
function styles(t, s) {
    for (var i in s)
        t.style[i] = s[i]
}
class Particle {
    constructor(t, s, i) {
        this.char = s,
        this.time = i,
        this.container = t,
        this.styles = {}
    }
    init(t, s, i) {
        this.velocity = {
            x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
            y: 1
        },
        this.pos = {
            x: t-300,
            y: s -100
        },
        this.styles.color = i,
        this.element = document.createElement("div"),
        this.element.textContent = this.char,
        styles(this.element, this.styles),
        this.update(),
        document.getElementById(this.container).append(this.element)
    }
    update() {
        this.pos.x += this.velocity.x,
        this.pos.y += this.velocity.y,
        this.time--,
        this.element.style.transform = "translate3d(" + this.pos.x + "px," + this.pos.y + "px, 0) scale(" + this.time / 120 + ")"
    }
    destroy() {
        this.element.remove()
    }
}
(function() {
    window.innerWidth >= 750 && new Cursor({
        el: "cursor",
        time: 80,
        character: window.cursor.emoji,
        colors: [window.cursor.color]
    })
}
)();
