<script>
    
    import Globe from 'globe.gl';
    import {onMount} from "svelte";
    import globeSkin from '$lib/images/earth-night.jpg'
    import globeBackground from '$lib/images/night-sky.png'

    let countries;
    let stateData;
    let stateNames;
    let target; // Country/state/etc. to be found
    let bigScore= 0; // Score displayed while playing
    let instruction = "Click to win!"; // Instruction displayed while playing
    let chosenJSON; // Campaign selection variable

    onMount(async () => {
        chosenJSON = "us_ne.json"; // To be replaced by campaign selection menu
        countries = await getData(chosenJSON); // call function to get and parse JSON data
        stateData = extractStateData(countries); // call function to iterate through the JSON for targets & initializing score
        stateNames = Object.keys(stateData); // keys in JSON are the target names--now we have a standalone list of the names from the JSON
        target = stateNames[Math.floor(Math.random() * stateNames.length)]; // choose a random target from the list
        instruction = "Find " + target + "!"; // tell the user the target; see {instruction} in the html below
        const world = Globe()
            .pointOfView({lat: 42, lng: -74, altitude: 0.5}, 4000) // initial camera position
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
                    return `<strong>${d.NAME}</strong>`
                } else {
                    return ''
                } }) // Label shows if score is less than one; label blank if score is greater than one
            .onPolygonHover(hoverD => world
            .polygonCapColor(d => d === hoverD ? 'darkred' : 'steelblue') // darkred if hovered, steelblue if not; we may want better colors
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
                    if (bigScore >= 20 || stateNames.length == 0) {
                        instruction = "WINNER!"
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
<div id="container">
    <div id="instruction-container">
        <h1 id="instruction">{instruction}</h1>
        <p>Score: {bigScore}</p>
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
    }
</style>