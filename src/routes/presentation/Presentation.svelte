<script>
    import Slide from './Slide.svelte'
    import Code from './Code.svelte'
    import Globe from '../zonia/Globe.svelte'
    import Horsey from '../horsey/Horsey.svelte'
    import Goobf from '../goobf/Goobf.svelte';
</script>

<Slide>
    <div class="slideone">
        <div class="goobftext">
            <h2 class="goobftext">Breathing with Goobf: <br> Engaging paced breathing app for students to use during school.
            </h2>
        </div>
        <div class="goobf">
            <Goobf />
        </div>
    </div>
</Slide>

<Slide>
    <div class="slidethree">
        <h1 class="title">Jasper's Purge Vent</h1>
        <p class="jasper">My project is getting the middle school lab a purge vent. A purge vent sucks air out of a room which gets rid of dangerous gasses. I have presented to many different people including the principal and the faculties people. We have gotten clearance to buy the purge vent but we need to plan things first. This also includes other lab equipment including a chemical storage unit.Steel type: G90 Galvanized steel
        </p>
    </div>
</Slide>

<Slide>
    <Globe />
</Slide>

<Slide>
    <Horsey />
</Slide>

<Slide animate>
    <Code id="code" lines>
        {`
            function love() {}
     `}
    </Code>
</Slide>

<Slide animate>
    <Code id="code" lines="2|1-3">
        {`
            function love() {
                console.log('Svelte')
            }
     `}
    </Code>
</Slide>

<Slide>
    <Slide>Vertical Slide 1</Slide>
    <Slide>Vertical Slide 2</Slide>
</Slide>

<Slide animate>
    <ul>
        <li>React</li>
        <li>Solid</li>
        <li>Svelte</li>
        <li>Vue</li>
    </ul>
</Slide>

<Slide animate>
    <ul>
        <li>Svelte ❤️</li>
        <li>React</li>
        <li>Solid</li>
        <li>Vue</li>
    </ul>
</Slide>
<style>

    /*Figure Out CSS Grid Stuff*/

    .slideone {
        background-color: rgb(42,42, 42);
        display: flex;
    }

    .slidethree {
        font-size: 80%;
        text-align: left;;
    }
    
    .title {
        position: relative;
        font-size: 200%;
        text-align: left;
        margin: 30px;
        color: #c82689;
    }

    .jasper {
        margin: 30px;
        width: 30%;
        color: #fbbb3b;
    }
</style>