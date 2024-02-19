<script>
    
    import Globe from 'globe.gl';
    import {onMount} from "svelte";
    import globeSkin from '$lib/images/earth-night.jpg'
    import globeBackground from '$lib/images/night-sky.png'
    let countries;
    let stateData;
    let stateNames;
    let target;
    let bigScore= 0;
    let instruction = "Click to win!";
    let chosenJSON;

    onMount(async () => {
        chosenJSON = "us_ne.json";
        countries = await getData(chosenJSON);
        stateData = extractStateData(countries);
        stateNames = Object.keys(stateData);
        target = stateNames[Math.floor(Math.random() * stateNames.length)];
        instruction = "Find " + target + "!";
        const world = Globe()
            .pointOfView({lat: 42, lng: -74, altitude: 0.5}, 4000)  
            .globeImageUrl(globeSkin)
            .backgroundImageUrl(globeBackground)
            .lineHoverPrecision(0)
            .polygonsData(countries.features)
            .polygonAltitude(0.06)
            .polygonCapColor(feat => 'steelblue')
            .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
            .polygonStrokeColor(() => '#111')
            .polygonLabel(({ properties: d }) => {
                if (stateData[d.NAME].score < 1) {
                    return `<strong>${d.NAME}</strong>`
                } else {
                    return ''
                } })
            .onPolygonHover(hoverD => world
            .polygonCapColor(d => d === hoverD ? 'darkred' : 'steelblue')
            )
            .polygonsTransitionDuration(300)
            .onPolygonClick(polygon => {
                const currentTarget = stateData[target];
                if (polygon.properties.NAME === target) {
                    currentTarget.score++;
                    bigScore++;
                    if (currentTarget.score >= 2) {
                        stateNames = stateNames.filter(name => name !== target);
                    }
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