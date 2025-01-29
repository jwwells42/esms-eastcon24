<script>
    import { onMount } from 'svelte';
    import Globe from 'globe.gl';
    import Confetti from './Confetti.svelte';
    import globeSkin from '$lib/images/earth-night.jpg';
    import globeBackground from '$lib/images/night-sky.png';
    export let chosenJSON;
    export let pov = [37, -95, 0.7];

    let countries; // the parsed JSON data
    let stateData; // target names & score extracted from the JSON
    let stateNames; // target names isolated for use
    let target; // Country/state/etc. to be found
    let bigScore = 0; // Score displayed while playing
    let instruction = "Click to win!"; // Instruction displayed while playing
    let confetti;

    onMount(async () => {
        console.log(chosenJSON)
        countries = await getData(chosenJSON); // call function to get and parse JSON data
        stateData = extractStateData(countries); // call function to iterate through the JSON for targets & initializing score
        stateNames = Object.keys(stateData); // keys in JSON are the target names--now we have a standalone list of the names from the JSON
        target = stateNames[Math.floor(Math.random() * stateNames.length)]; // choose a random target from the list
        const winningScore = stateNames.length * 2;
        instruction = "Find " + target + "!"; // tell the user the target; see {instruction} in the html below
        const world = Globe()
            .pointOfView({lat: pov[0], lng: pov[1], altitude: pov[2]}, 200) // initial camera position
            .globeImageUrl(globeSkin) // skin of the globe, imported at the top
            .backgroundImageUrl(globeBackground) // background image for behind the globes
            .lineHoverPrecision(0) // idk
            .polygonsData(countries.features) // make the shapes from the data
            .polygonAltitude(0.06) // how high up the shapes live
            .polygonCapColor(feat => 'steelblue') // top color of shapes
            .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)') // stringy side / under color of shapes
            .polygonStrokeColor(() => '#111') // idk 
            .polygonLabel(({ properties: d }) => {
                if (stateData[d.NAME].score < 1) {
                    return `<p style="
                        font-family: Poppins;    
                        font-size: 1em;
                        ">
                    ${d.NAME}</p>`
                } else {
                    return ''
                } }) // Label shows if score is less than one; label blank if score is greater than one
            .onPolygonHover(hoverD => world
            .polygonCapColor(d => d === hoverD ? '#f58622' : 'steelblue') // darkred if hovered, steelblue if not; we may want better colors
            )
            .onPolygonClick(polygon => { // we do a lot of stuff when a polygon is clicked
                const currentTarget = stateData[target]; // pull the current target into its own constant
                if (polygon.properties.NAME === target) { // this means they got it correct
                    currentTarget.score++; // increment the score for this specific state, currently for label tracking
                    bigScore++; // increment the overall score for the scoreboard 
                    if (currentTarget.score >= 2) { 
                        stateNames = stateNames.filter(name => name !== target);
                    } // if we have 2+ points, remove the target from the list of possible targets 
                    const filteredStateNames = stateNames.filter(name => name !== target); 
                    if (filteredStateNames.length > 1) {
                        target = filteredStateNames[Math.floor(Math.random() * filteredStateNames.length)];
                    } else {
                        target = stateNames[Math.floor(Math.random() * stateNames.length)];
                    }
                    if (bigScore >= winningScore || stateNames.length == 0) {
                        instruction = "WINNER!";
                        confetti = "yes";
                    } else {
                    instruction = "Good job! You clicked " + polygon.properties.NAME + "! Now find " + target + ".";
                    }
                } else {
                    stateData[target].score--;
                    if (bigScore > 0) {
                        bigScore--;
                    }
                    instruction = "Keep trying! That was " + polygon.properties.NAME + ". Find " + target + ".";
                }})
    (document.getElementById('globeViz'))
    });

    const getData = async () => {
        const response = await fetch(chosenJSON);
        return await response.json();
    }

    function extractStateData(countries) {
        const stateData = {};
        countries.features.forEach(feature => {
            const stateName = feature.properties.NAME;
            const score = 0;
            stateData[stateName] = {score};
        });
        return stateData;
    }
</script>
<body>
{#if confetti} <!--fancy Svelte way of including javascript if-statement in html block-->
    <div id="confetti-container">
		<Confetti x={[-5, 5]} y={[0, 0.1]} delay={[500, 2000]} infinite amount=500 fallDistance="100vh" />
	</div>
{/if}
<div id="container">
    <div id="instruction-container">
        <div id="instruction">{instruction}</div>
        <div id="score">Score: {bigScore}</div>
    </div>
    <div id="globeViz"></div>
</div>
</body>

<style>
    #instruction-container {
        position: absolute;
        color: white;
        z-index: 1;
        margin-left: 20px;
        pointer-events: none;
    }

    #instruction { /*div instead of h1 because reveal kept eating h1s*/
        margin-top: 1%;
        font-size: 2em;
        font-family: Poppins;
        max-width: 100%;
    }

    #score {
        font-family: Poppins-500;
        font-size: 1.5em;
        margin-top: 0;
        padding: 0;
    }
    
    #confetti-container {
        position: fixed;
        top: -50px;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        overflow: hidden;
        z-index: 2;
        pointer-events: none;
    }

    @media (max-width: 600px) {
        #instruction {
            font-size: 1em;
            max-width: 100%;
        }
    }
</style>