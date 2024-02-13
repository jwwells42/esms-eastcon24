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

    onMount(async () => {
        countries = await getData();
        stateData = extractStateData(countries);
        stateNames = Object.keys(stateData);
        target = stateNames[Math.floor(Math.random() * stateNames.length)];
        instruction = "Find " + target + "!";
        const world = Globe()
            .pointOfView({lat: 36, lng: -101, altitude: 1.4}, 4000)  
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
                if (polygon.properties.NAME === target) {
                    stateData[target].score++;
                    bigScore++;
                    target = stateNames[Math.floor(Math.random() * stateNames.length)];
                    if (bigScore >= 100) {
                        instruction = "WINNER!"
                    } else {
                    instruction = "Good job! You clicked " + polygon.properties.NAME + "! Now find " + target + ".";
                    }
                } else {
                    stateData[target].score--;
                    bigScore--;
                    instruction = "Keep trying! That was " + polygon.properties.NAME + ". Find " + target + ".";
                }})
    (document.getElementById('globeViz'))
    });

    const getData = async () => {
        const response = await fetch('gz_2010_us_040_00_20m.json');
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
        <h1 id="instruction">{instruction} {bigScore}/100</h1>
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