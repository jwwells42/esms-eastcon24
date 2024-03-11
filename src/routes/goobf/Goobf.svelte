<script>
    import P5 from 'p5-svelte';
    import { collidePointCircle } from 'p5collide'

    let time = 0;
    let count = 0;
    $: seconds = Math.round(count /60); 
    $: secondsName = seconds > 1 ? "seconds" : "second";

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
        let centerY = 300; // Center position of the ellipse's vertical movement
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
            p5.createCanvas(700, 700);
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
            y = centerY - amplitude * Math.sin(time);
            time += 0.0099; 
            p5.ellipse(x, y, r*2, r*2);
            y += speed * direct;
        }
    }
</script>
<div class="flex">
    <P5 {sketch} />
    <h1>
        Be Goobf's breathing buddy! Match your breath and follow the circle with your mouse.
        {#if seconds < 1}
        Set a goal, and relax into your breathing.
        {:else}
        Set a goal, and relax into your breathing.
        <br><br>You've breathed for: {seconds} {secondsName}
        {/if}
    </h1>
</div>
<style>
   .flex {
    display: flex;
   }
   h1 {
    font-family: Poppins-500;
    max-width: 30%;
    color: white;
    text-align: right;
    line-height: 1.1em;
   }
</style>