<script>
    import P5 from 'p5-svelte';
    import { collidePointCircle } from 'p5collide'

    const sketch = (p5) => {
        let x = 50;
        let y = 50.0;  // velocity?
        let speed = 3; // speed
        let radius = 40.0; // size of radius of the circle
        let direct = -1;//direction of movement
        let r = 25;
        let hit = false;
        let count = 2;

        p5.setup = () => {
            p5.createCanvas(600, 600);
        }

        p5.draw = () => {
            p5.background(42,42,42);
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
<body>
    <div class="big-container">
        <div class="goobf-container">
            <h1>Take a moment to breathe with Goobf.</h1>
            <div class="goobf-box">
                <div class="goobf"></div>
            </div>    
        </div>
    <P5 {sketch} />
    </div>
</body>
<style>
    body {
        background-color: rgb(42,42,42);
    }

    h1 { 
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: rgb(184, 171, 149);
        animation: wavy 7s infinite;
    }

    .big-container {
        display:flex;
        gap:3em;
    }
    .goobf-container {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }

    .goobf-box {
        margin-left: -250px;
        margin-top: -225px;
        padding: 0;
        position: relative;
    }
    .goobf {
        position: absolute;
        width: 1046px;
        height: 929px;
        background: url($lib/images/goobf.png);
        animation: breathe 7s steps(12) infinite;
        transform: scale(0.5);
    }

    @keyframes breathe {
        to { background-position: -12552px; }
    }   
    @keyframes wavy {
        0% {
            transform: translateY(15px)
        }
        50% {
            transform: translateY(-25px)
        }
        100% {
            transform: translateY(15px)
        }
        }
</style>