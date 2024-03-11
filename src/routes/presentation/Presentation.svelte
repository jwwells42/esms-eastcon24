    <script>
        import Slide from './Slide.svelte'
        import Code from './Code.svelte'
        import Globe from '../zonia/Globe.svelte'
        import Horsey from '../horsey/Horsey.svelte'
        import Goobf from '../goobf/Goobf.svelte';

        let pov = [34, -97, 1];
    </script>

    <Slide>
        <div class=slide-container>
            <div class="slide-text">
                One of our uncharted territories this year is ... the internet?? developing for the web
                    <ul>
                        <li>How the Horsey Moves: Chess Education</li>
                        <li>Zonia: Geography Game</li>
                        <li>Goobf: Wellness</li>
                    </ul>
            </div>
            <div class="slide-image">
                placeholder for image<br>could also mention/list javascript libraries, freecodecamp, other resources
            </div>
        </div>
    </Slide>

    <Slide>
        <div class="slide-container flip">
            <div class="slide-text">
                <h1>Zonia: Geography Game</h1>
                    <ul>
                        <li>C:</li>
                        <li>A:</li>
                        <li>R:</li>
                        <li>T:</li>
                    </ul>
            </div>
            <div class="slide-image">
                placeholder for image
            </div>
        </div>
    </Slide>

    <Slide>
        <Globe {pov} chosenJSON="/globeData/us.json" />
    </Slide>

    <Slide>
        <div class=slide-container>
            <div class="slide-text">
                <h1>How the Horsey Moves</h1>
                    <ul>
                        <li>C:</li>
                        <li>A:</li>
                        <li>R:</li>
                        <li>T:</li>
                    </ul>
            </div>
            <div class="slide-image">
                placeholder for image
            </div>
        </div>
    </Slide>

    <Slide>
        <Horsey />
    </Slide>

    <Slide>
        <div class="slide-container flip">
            <div class="slide-text">
                <h1>Goobf</h1>
                <h2>Engaging paced breathing app for students to use during school.</h2>
                    <ul>
                        <li>C:</li>
                        <li>A:</li>
                        <li>R:</li>
                        <li>T:</li>
                    </ul>
            </div>
            <div class="slide-image">
                placeholder for image
            </div>
        </div>
    </Slide>
   
    <Slide>
        <Goobf />
    </Slide>

    <Slide>
        <div class="slide-container">
            <div class="slide-text">
                <h1>Another uncharted territory for us is making real change in our community, as a habit</h1>
                    <ul>
                        <li>Purge Vent for Science Lab</li>
                        <li>Graphic Design for Local Businesses</li>
                        <li>Mapping Downtown Accessibility in Eureka Springs</li>
                    </ul>
            </div>
            <div class="slide-image">
                placeholder for image
            </div>
        </div>
    </Slide>


    <Slide>
        <div class="slide-container">
            <div class="slide-text">
                <h1>Purge Vent for Science Lab</h1>
                <h2>Heklping teacher </h2>
                    <ul>
                        <li>C:</li>
                        <li>A:</li>
                        <li>R:</li>
                        <li>T:</li>
                    </ul>
            </div>
            <div class="slide-image">
                placeholder for image
            </div>
        </div>
    </Slide>


    <Slide>
        <div class="slide-container flip">
            <div class="slide-text">
                <h1>Graphic Design for Local Businesses</h1>
                <h2>make look good</h2>
                    <ul>
                        <li>C:</li>
                        <li>A:</li>
                        <li>R:</li>
                        <li>T:</li>
                    </ul>
            </div>
            <div class="slide-image">
                placeholder for image
            </div>
        </div>
    </Slide>

    <Slide>
        <div class="slide-container">
            <div class="slide-text">
                <h1>Accessibility in Downtown Eureka Springs</h1>
                <h2>Bringing clarity to a vertical town.</h2>
                    <ul>
                        <li>C:</li>
                        <li>A:</li>
                        <li>R:</li>
                        <li>T:</li>
                    </ul>
            </div>
            <div class="slide-image">
                placeholder for image
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
                <h1>What's next? Connections</h1>
                    <ul>
                        <li>Drone Pilot scheduled April 2</li>
                        <li>Alderman contact</li>
                        <li>Other contacts we;ve gotten this year (sewing machine, what else)</li>
                        <li>T:</li>
                    </ul>
            </div>
            <div class="slide-image">
                placeholder for image
            </div>
            <h1>What's next? Tech</h1>
                    <ul>
                        <li>Drone</li>
                        <li>Laser Thing</li>
                        <li>R:</li>
                        <li>T:</li>
                    </ul>
        </div>
    </Slide>

    <style>
        .slide-container {
            display: flex;
            max-width: 80vw;
            align-items: center;
            justify-content: center;
            margin: auto;
        }

        .flip { /* include this class if you want the image on the right */
            flex-direction: row-reverse;
        }

        .slide-text {
            flex: 50%;
        }

        .slide-image {
            flex: 50%;
        }
    </style>