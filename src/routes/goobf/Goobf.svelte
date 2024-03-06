<script>
    import P5 from 'p5-svelte';
    import { collidePointCircle } from 'p5collide'

    let count = 0;
    let time = 0;

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
            this.p5.image(this.animation[index], this.x, this.y, 500, 500);
        }
    
        animate() {
            this.index += this.speed;
        }
        setIndexBasedOnY(y) {
        // Assuming 'y' is normalized between -1 and 1, map it to frame indices
        let normIndex = ((y + 1) / 2) * (this.len - 1) / 2; // Normalize and map y to index
        this.index = normIndex;
        }
    }

    const sketch = (p5) => {
        let x = 600;
        let y;
        let amplitude = 175; // Maximum movement distance above and below the center
        let centerY = 350; // Center position of the ellipse's vertical movement
        let speed = 1; // speed
        let direct = -1;//direction of movement
        let r = 50; //radius of the circle
        let hit = false;
        let animation = [];
        let goobf;
        let spritedata;
        let spritesheet;

        p5.preload = () => {
            spritedata = p5.loadJSON('/goobf.json');
            spritesheet = p5.loadImage('/goobf.png');
        }

        p5.setup = () => {
            p5.createCanvas(1000, 700);
            let frames = spritedata.frames;
            for (let i = 0; i < frames.length; i++) {
                let pos = frames[i].position;
                let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
                animation.push(img);
            }
            goobf = new Sprite(animation, 0, 75, 0.03, p5);   
        }

        p5.draw = () => {
            p5.background(42,42,42);
            // Normalize y position to a value between -1 and 1 for animation synchronization
            let normalizedY = Math.sin(time);
            // Update sprite animation based on normalizedY
            goobf.setIndexBasedOnY(normalizedY);
            goobf.show();
            goobf.animate();
            p5.point(p5.mouseX, p5.mouseY);
            hit = collidePointCircle(p5.mouseX, p5.mouseY, x, y, 100);
            p5.fill(hit ? p5.color('#2196F3') : 255);
            if (hit) {
                count++;
            }
            if (p5.touches.length > 0) {
                let touchX = p5.touches[0].x;
                let touchY = p5.touches[0].y;
                hit = collidePointCircle(touchX, touchY, x, y, 100);
            }
            y = centerY - amplitude * Math.sin(time);
            time += 0.01; 
            p5.ellipse(x, y, r*2, r*2);
            y += speed * direct;
        }
    }
</script>
<div class="flex">
    <P5 {sketch} />
    <h1>Breathe with Goobf and help him feel better. {count}</h1>
</div>    
<style>
    .flex {
        display: flex;
    }

    h1 {
        color: white;
    }
</style>