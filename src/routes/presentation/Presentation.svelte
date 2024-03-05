<script>
    import Slide from './Slide.svelte'
    import Code from './Code.svelte'
    import Globe from '../globe/Globe.svelte'
    import Horsey from '../horsey/Horsey.svelte'
    import Goobf from '../goobf/Goobf.svelte';
</script>

<Slide>
    <h1 class="text">Engaging paced breathing app for<br> students to use during school
    </h1>
    <div class="rightside">
        <div class="goobfgroup">
            <h1 class="goobftext">Breath With Goobf</h1>
            <div class="goobf">
                <Goobf />
            </div>
        </div>
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

    .text {
        font-size: 40px;
        text-align: left;
        margin: 25px;
    }

    .goobfgroup {
        position: relative;
        left: 700px;
    }

    .goobf {
        position: relative;
        object-fit: cover;
    }

    .goobftext {
        font-size: 70px;
        color: skyblue;
    }


</style>