<script>
    import Slide from './Slide.svelte'
    import Code from './Code.svelte'
    import Globe from '../globe/Globe.svelte'
    import Horsey from '../horsey/Horsey.svelte'
    import Goobf from '../goobf/Goobf.svelte';
</script>

<Slide>
    <div class="slideone">
        <div class="goobf">
            <Goobf />
        </div>
            <h1 class="goobftext">Breathing With Goobf</h1>
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
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
        grid-template-rows: 20% 20% 20% 20% 20%;
        width: 2560px;
        height: 1300px;
    }

    .goobf {
        position: relative;
        grid-column: 4/6;
        grid-row: 2/4;
        left: 180px;
    }

    .goobftext {
        text-align: center;
        position: relative;
        top: 170px;
        font-size: 70px;
        grid-column: 4/6;
        color: skyblue;
    }
</style>