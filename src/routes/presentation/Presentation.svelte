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
            <p class="goobftext">Engaging paced breathing app for students to use during school.
            </p>
        </div>
        <div class="goobf">
            <Goobf />
        </div>
            <h1 class="goobfbreath">Breathing With Goobf</h1>
    </div>
</Slide>

<Slide>
    <div class="slidetwo">
        <img src="/src/lib/images/meme.png">
        <h1 class="title">Jasper's Purge Vent</h1> <h1 class="titletwo">CART</h1>
        <p class="jasper">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <p class="jaspertwo">
                C- THis filsl the awefijasetghingy cause stuff and critical thinking things
                <br>A- This project shows advance cause I learned how to present and hwo to plan big expensive thingys.
                <br>R-
                <br>T-
            </p>
    </div>
</Slide>

<Slide>
    <div class="slidethree">
        <img class="jasperimage" src="/src/lib/images/meme.png">
        <h1 class="title">Jasper's Purge Vent</h1>
        <ul class="jasper">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</li>
        </ul>
        </div>
</Slide>

    <Slide>
        <div class="slidefour">
            <h1 class="fourtitle">CART</h1>
                <p class="fourtext">
                    C- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua.
                    <br>A- This project shows advance cause I learned how to present and hwo to plan big expensive thingys.
                    <br>R- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua.
                    <br>T- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua.
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
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
        grid-template-rows: 20% 20% 20% 20% 20%;
        width: 100vw;
        height: 100vh;
    }

    .goobf {
        position: relative;
        grid-column: 4/6;
        grid-row: 2/4;
        left: 180px;
    }

    .goobftext {
        margin: 10px;
        font-size: 100%;
        text-align: left;
        width: 100%;
    }

    .goobfbreath {
        text-align: center;
        position: relative;
        top: 170px;
        font-size: 70px;
        grid-column: 4/6;
        color: skyblue;
    }

    .slidetwo {
        display: grid;
        position: absolute;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        gap: 6em;
        width: 100vw;
        height: 96vh;
    }

    .slidethree { /*Maybe look at changing padding-bottom on title elements to grid spacing*/
        display: grid;
        position: absolute;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        gap: 6em;
        width: 100vw;
        height: 96vh;
    }
    
    .jasperimage {
        position: relative;
        grid-column: 4/6;
        grid-row: 3/4;
    }

    .title {
        position: absolute;
        right: 50px;
        grid-column: 1/3;
        grid-row: 1/1;
        font-size: 190%;
        text-align: center;
        color: #c82689;
        width: 100%;
    }

    .jasper {
        position: relative;
        grid-column: 1/3;
        grid-row: 1/6;
        padding-top: 10%;
        font-size: 30px;
        font-size: 115%;
        color: #fbbb3b;
        height: 380%;
    }

    
.slidefour {
        display: grid;
        position: absolute;
        grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
        width: 100vw;
        height: 96vh;
    }

    .fourtitle {
        grid-column: 1/1;
        grid-row: 1/1;
        text-align: left;
        margin: 1%;
        padding-left: 1.7%;
        font-size: 190%;
        position: relative;
        color: #c82689;
    }

    .fourtext {
        grid-column: 1/1;
        text-align: left;
        position: relative;
        margin: 1%;
        padding-left: 2%;
        font-size: 10%;
        font-size: 115%;
        width: 40%;
        bottom: 18%;
        color: #fbbb3b;
    }
</style>