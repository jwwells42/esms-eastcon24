<script>
    import P5 from 'p5-svelte';
    import { collidePointCircle } from 'p5collide'

    class Sprite {
        constructor(animation, x, y, speed, p5) {
            this.x = x;
            this.y = y;
            this.animation = animation;
            this.w = this.animation[0].width;
            this.len = this.animation.length;
            this.speed = speed;
            this.index = 0;
            this.p5 = p5;
        }
    
        show() {
            let index = this.p5.floor(this.index) % this.len;
            this.p5.image(this.animation[index], this.x, this.y);
        }
    
        animate() {
            this.index += this.speed;
            this.x += this.speed * 15;
    
            if (this.x > this.p5.width) {
                this.x = -this.w;
            }
        }
    }

    const sketch = (p5) => {
        let x = 50;
        let y = 50.0;  // velocity?
        let speed = 3; // speed
        let radius = 40.0; // size of radius of the circle
        let direct = -1;//direction of movement
        let r = 25;
        let hit = false;
        let count = 2;
        let animation = [];
        let goobfs = [];
        let spritedata;
        let spritesheet;

        p5.preload = () => {
            spritedata = p5.loadJSON('/goobf.json');
            spritesheet = p5.loadImage('/goobf.png');
        }

        p5.setup = () => {
            p5.createCanvas(600, 600);
            let frames = spritedata.frames;
            for (let i = 0; i < frames.length; i++) {
                let pos = frames[i].position;
                let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
                animation.push(img);
            }
            for (let i = 0; i < 5; i++) {
                goobfs[i] = new Sprite(animation, 0, i * 75, p5.random(0.1, 0.4), p5);
            }
        }

        p5.draw = () => {
            p5.background(42,42,42);
            for (let goobf of goobfs) {
                goobf.show();
                goobf.animate();
            }
            p5.point(p5.mouseX, p5.mouseY);
            hit = collidePointCircle(p5.mouseX, p5.mouseY, x, y, 100);
            p5.fill(hit ? p5.color('#2196F3') : 255);
            console.log('colliding?', hit, count);
            if (hit) {
                count++;
            }

            p5.ellipse(x, y, r*2, r*2);
            y += speed * direct;
            if ((y > p5.height - radius)  || (y < radius))  {
                direct = - direct;  //change direction
            }
            p5.textSize(100);
            p5.text(count - 2,p5.width/2-25, p5.height/2);
        }
    }
</script>

<P5 {sketch} />
