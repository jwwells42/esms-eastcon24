<script>
    
    import Globe from 'globe.gl';
    import {onMount} from "svelte";
    let countries;
    let stateData;
    let stateNames;
    let target;

    onMount(async () => {
        countries = await getData();
        stateData = extractStateData(countries);
        stateNames = Object.keys(stateData);
        target = stateNames[Math.floor(Math.random() * stateNames.length)];
        const world = Globe()
            .pointOfView({lat: 36, lng: -101, altitude: 1.4}, 4000)  
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
            .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
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
                    alert("Good job! " + polygon.properties.NAME + " has been clicked.");
                    stateData[target].score++;
                    target = stateNames[Math.floor(Math.random() * stateNames.length)];
                } else {
                    alert("Keep trying! " + polygon.properties.NAME + " has been clicked.")
                    stateData[target].score--;
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
        
        // Assign a default score for each state, you can modify this as needed
        const score = 0;

        // Create an object with the state name and associated score
        stateData[stateName] = { score };
    });

    return stateData;
}
</script>
<body>
<div id="container">
    <div id="instruction-container">
        <h1 id="instruction">Find {target}!</h1>
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