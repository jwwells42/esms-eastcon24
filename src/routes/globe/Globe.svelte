<script>
    
    import Globe from 'globe.gl';
    import {onMount} from "svelte";
    let countries;
    let stateArray;
    let target;

    onMount(async () => {
        countries = await getData();
        stateArray = extractStateNames(countries);
        target = stateArray[stateArray.length * Math.random() | 0];        
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
            .polygonLabel(({ properties: d }) => `
                <strong>${d.NAME}</strong>
              `)
            .onPolygonHover(hoverD => world
            .polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
            .polygonCapColor(d => d === hoverD ? 'darkred' : 'steelblue')
            )
            .polygonsTransitionDuration(300)
            .onPolygonClick(polygon => {
                if (polygon.properties.NAME === target) {
                    alert("Good job! " + polygon.properties.NAME + " has been clicked.");
                    target = stateArray[stateArray.length * Math.random() | 0];
                } else {
                    alert("Keep trying! " + polygon.properties.NAME + " has been clicked.")
                }})
    (document.getElementById('globeViz'))
    });

    const getData = async () => {
        const response = await fetch('gz_2010_us_040_00_20m.json');
        return await response.json();
    }

    function extractStateNames(countries) {
        const states = [];
        countries.features.forEach(feature => {
            const stateName = feature.properties.NAME;
            states.push(stateName);
        });
        return states;
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