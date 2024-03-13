<script>
    import globe from '$lib/images/globe.png'
    import geographyTeam from '$lib/images/geography-team.jpg'
    import elizabeth from '$lib/images/elizabeth-and-harry.jpg'
    import bonham from '$lib/images/bonham.png'
    import carmen from '$lib/images/carmen.png'
    import horsey from '$lib/images/horsey.png'
    import horseyTeam from '$lib/images/horsey-team.jpg'
    import goobfTeam from '$lib/images/goobf-team.jpg'
    import goobfSprite from '$lib/images/goobf-spritesheet.png'
    import jasper from '$lib/images/jasper-mann.jpg'
    import Slide from './Slide.svelte'
    import Code from './Code.svelte'
    import Globe from '../zonia/Globe.svelte'
    import Horsey from '../horsey/Horsey.svelte'
    import Goobf from '../goobf/Goobf.svelte';
    
    let pov = [34, -97, 1];
</script>

<Slide>
    <div class="title-slide">
        <div class="title-text">
            <h3>
            Eureka Springs Middle School<br>
            EAST Conference 2024
            </h3>
        </div>
        <div class="title-image-row">
            <img class="goobf" src={goobfSprite} alt="Goobf Project">
        </div>
        <div class="title-image-row-2">
            <img width="400" height="250" class="globe" src={globe} alt="Zonia Project">
            <img width="250" height="250" class="horsey" src={horsey} alt="Horsey Project">
        </div>
    </div>
</Slide>

<Slide>
    <h1 style="margin-bottom: 10%;">Our #Uncharted</h1>
    <div style="margin-bottom: 10%;" class="slide-container">
        <div class="slide-text">
            <h3>Code and the Web</h3>
                <ul>
                    <li>How the Horsey Moves: Chess Education</li>
                    <li>Zonia: Geography Game</li>
                    <li>Goobf: Wellness</li>
                </ul>
        </div>
        <div style="margin-right:10%;" class="slide-image">
            <h3>Historic Town, New Solutions</h3>
                <ul>
                    <li>Purge Vent for Science Lab</li>
                    <li>Graphic Design for Local Businesses</li>
                    <li>Accessibility Map for Downtown</li>
                </ul>
        </div>
    </div>
</Slide>
<Slide>
    <h3>Presentation in Reveal.js</h3>
	<Code id="code">
		{`
	<Slide>
        <h1 style="margin-bottom: 10%;">Our #Uncharted</h1>
        <div style="margin-bottom: 10%;" class="slide-container">
        <div class="slide-text">
            <h3>Code and the Web</h3>
                <ul>
                    <li>How the Horsey Moves: Chess Education</li>
                    <li>Zonia: Geography Game</li>
                    <li>Goobf: Wellness</li>
                </ul>
        </div>
        <div style="margin-right:10%;" class="slide-image">
            <h3>Historic Town, New Solutions</h3>
                <ul>
                    <li>Purge Vent for Science Lab</li>
                    <li>Graphic Design for Local Businesses</li>
                    <li>Accessibility Map for Downtown</li>
                </ul>
        </div>
        </div>
    </Slide>
	 `}
	</Code>
</Slide>

<Slide>
    <div class="slide-container flip">
        <div class="slide-text">
            <h1>Zonia: Geography Game</h1>
                <ul>
                    <li class="cart">C: Game built to help students enjoy learning geography
                    </li>
                    <li class="cart">A: Learned HTML/CSS/Javascript and the library Globe.gl
                    </li>
                    <li class="cart">R: Working with teachers and students in our school
                    </li>
                    <li class="cart">T: Developers: Chase D, Draven, and Samson 
                        developed the site, working with Roscoe and Murphy from the elementary
                    </li>
                </ul>
        </div>
        <div class="slide-image">
            <img src={geographyTeam} alt="Geo Game Crew">
        </div>
    </div>
</Slide>

<Slide>
    <Globe {pov} chosenJSON="/globeData/us.json" />
</Slide>

<Slide>
    <div class="slide-container-flip">
        <div class="slide-text">
            <h1>How the Horsey Moves</h1>
                <ul>
                    <li class="cart">C: Free and safe website to teach & learn chess fundamentals (combining Lichess and ChessKid)
                    </li>
                    <li class="cart">A: Learning progress in chess + HTML/CSS/Javascript, using the Javascript libraries Chessground and Svelte-Chess</li>
                    <li class="cart">R: GT Coordinators in districts without a chess coach need reliable resources; students with free time want to play chess, but sites are not appropriate
                    </li>
                    <li class="cart">T: William Vaverka & Malakai Pederson.</li>
                </ul>
        </div>
        <div class="slide-image">
            <img src={horseyTeam} alt="How the Horsey Moves Developers">
        </div>
    </div>
</Slide>

<Slide>
    <Horsey />
</Slide>

<Slide>
    <div class="slide-container">
        <div class="slide-text">
            <h1>Goobf: Wellness</h1>
                <ul>
                    <li class="cart">C: Providing a digital, safe timeout that goes beyond distraction
                    </li>
                    <li class="cart">A: Drawn and animated in Procreate, coded with HTML/CSS/Javascript, with the help of the library P5.js
                    </li>
                    <li class="cart">R: Working with local counselor Marjorie Kilby
                    </li>
                    <li class="cart">T: Chloe and Magnolia, with help from other developers including Samson and Draven</li>
                </ul>
        </div>
        <div class="slide-image">
            <img src={goobfTeam} alt="Goobf in Class">
        </div>
    </div>
</Slide>

<Slide>
    <Goobf />
</Slide>

<Slide>
    <div class="slide-container">
        <div class="slide-text">
            <h1>Purge Vent for Science Lab</h1>
                <ul>
                    <li>C: Designing purge vent to bring lab up to code</li>
                    <li>A: Learn chemicals, ducting materials (G90), airflow </li>
                    <li>R: Working with head of building/grounds Mr. Mann, work requested by science teacher</li>
                    <li>T: Jasper as main designer and presenter with help from Isaiah and Kenji</li>
                </ul>
        </div>
        <div class="slide-image">
            <img src={jasper} alt="Pointing at Vents">
        </div>
    </div>
</Slide>


<Slide>
    <div class="slide-container">
        <div class="slide-text">
            <h1>Graphic Design</h1>
            <h3>for Local Businesses</h3>
                <ul>
                    <li>C: Wonderful local businesses without design skills or files
                    </li>
                    <li>A: Use Adobe Creative Cloud, DSLR Photography, Canva
                    </li>
                    <li>R: Clients so far: Bunch's Quik Chek, Carmen's Tacos, Bonham Construction, Manuel Parez Landscaping</li>
                    <li>T: Maribel, Chloe, Gabe, Levi, Javi</li>
                </ul>
        </div>
        <div class="slide-image-column">
            <img width=400 height=250 src={bonham} alt="Bonham's Construction">
            <img width=500 height=250 src={carmen} alt="Carmen's Tacos">
        </div>
    </div>
</Slide>

<Slide>
    <div class="slide-container">
        <div class="slide-text">
            <h1>Accessibility</h1>
            <h3 style="margin-bottom: 3%;">in Downtown Eureka Springs</h3>
                <ul>
                    <li>C: Provide better information for people with mobility issues before they visit</li>
                    <li>A: ArcGIS, Survey123, and city protocols</li>
                    <li>R: Working with Alderman Harry Meyer</li>
                    <li>T: Elizabeth & Yohannes</li>
                </ul>
        </div>
        <div class="slide-image">
            <img src={elizabeth} alt="Elizabeth and Harry">
        </div>
    </div>
</Slide>

<Slide>
    <div style="display:flex;">
        <iframe name="survey123webform" width="500" height="1000" frameborder="0" marginheight="0" marginwidth="0" title="Accessibility" src="https://survey123.arcgis.com/share/7e81a8f252af4228b9b1d838468d3ac0" allow="geolocation https://survey123.arcgis.com; camera https://survey123.arcgis.com"></iframe>
        <iframe src="https://east.maps.arcgis.com/apps/instant/basic/index.html?appid=30115914f0fc40e28150f6d12e37099a" title="Accessibility Map" width="2000" height="800" frameborder="0" style="border:0" allowfullscreen>iFrames are not supported on this page.</iframe>
    </div>
</Slide>
<Slide>
    <div class="slide-container">
        <div class="slide-text">
            <h1>What Else?</h1>
                <ul>
                    <li>Redesigned School Map with "I Love You Guys" Information</li>
                    <li>Blender design and animation</li>
                    <li>Music composition</li>
                    <li>Sewing formalwear for Prom</li>
                </ul>
        </div>
        <div style="margin-right:5%;" class="slide-image">
            <h1>What's Next?</h1>
                <ul>
                    <li>Drone Pilot visit (and drone donation!) scheduled April 2</li>
                    <li>Boss Laser cutter delivery scheduled for April with community partner to teach</li>
                    <li>Contact with head of Parks & Rec about the skate park</li>
                    <li>Keeping our eyes & hearts open!</li>
                </ul>

    </div>
</Slide>

<style>
    .slide-container {
        display: flex;
        max-width: 100vw;
        align-items: center;
        justify-content: center;
        margin: 10px;
        gap: 30px;
    }

    .title-slide { /*Used For Title Slide(s)*/
        display: flex;
        flex-direction: column;
    }   

    .slide-container-flip { /* include this class if you want the image on the right */
        display: flex;
        max-width: 100vw;
        align-items: center;
        justify-content: center;
        margin: 10px;
        gap: 30px;
        flex-direction: row-reverse;
    }

    .title-text {
        grid-column: 1/5;
        grid-row: 1/1;
        font-size: 70px;
    }

    .globe {
        position: relative;
        grid-column: 1/2;
        grid-row: 2/3;
    }

    .horsey {
        position: relative;
        grid-column: 3/4;
        grid-row: 2/3;
    }

    .slide-text {
        flex: 70%;
        padding-bottom: 65px;
    }
    
    .cart {
        padding-top: 20px;
    }

    .slide-image {
        flex: 50%;
    }
</style>