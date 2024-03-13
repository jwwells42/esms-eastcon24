<script>
    import globe from '$lib/images/globe.png'
    import horsey from '$lib/images/horsey.png'
    import goobf from '$lib/images/goobf.png'
    import purge from '$lib/images/purgenotafan.png'
    import accessibility from '$lib/images/accessibility-stairs.jpg'
    import graphic from '$lib/images/foodtruck.png'
</script>

<body>
    <div class="container">
        <a href="/zonia">
            <div class="item">
                <img class="img" src={globe} alt="Zonia">
                <h1 class="text">Zonia: Geography</h1>
            </div>
        </a>
        <a href="/horsey">
            <div class="item">
                <img class="img" src={horsey} alt="Horsey">
                <h1 class="text">How the Horsey Moves</h1>
            </div>
        </a>
        <a href="/goobf">
            <div class="item">
                <img class="img" src={goobf} alt="Goobf: Wellness">
                <h1 class="text">Goobf: Wellness</h1>
            </div>
        </a>
        <a rel="external" href="https://esms-eastcon24.vercel.app/presentation/#/9">
            <div class="item">
                <img class="img" src={purge} alt="Purge Vent">
                <h1 class="text">Purge Vent for Science Lab</h1>
            </div>
        </a>
        <a rel="external" href="https://esms-eastcon24.vercel.app/presentation/#/10">
            <div class="item">
                <img class="img" src={graphic} alt="Graphic Design">
                <h1 class="text">Graphic Design for Local Businesses</h1>
            </div>
        </a>
        <a href="/accessibility">
            <div class="item">
                <img class="img" src={accessibility} alt="Downtown Accessibility">
                <h1 class="text">Downtown Accessibility</h1>
            </div>
        </a>
    </div>
</body>

<style>
body {
    margin: 0; /* this was originally 5em 0 0 0 which was creating the evil white bar at the top */
    padding: 0;
    line-height: 1.6;
    word-spacing: 1.4px;
    font-family: 'Poppins', sans-serif;
    color: #fbbb3b;
    background-color: rgb(42, 42, 42)
}

.container {
    display: grid;
    width: 70vw;
    max-height: 90vh;
    margin: 3vh auto; /* moving the 2em here means we only get the space under the header */
    grid-template-columns: repeat(3, minmax(15rem, 1fr)); 
    gap: 2vw;
}

.item {
    aspect-ratio: 1 / 1; 
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.item .img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    position: absolute;
    border: none;
    border-radius: 10%;
    padding: 0;
    z-index: 1;
}

.item .text {
    display: inline;
    position: relative;
    color: var(--clr-light);
    z-index: 2;
    font-size: 2vw; /* responsive text based on viewport width */
    background-color: rgba(0, 0, 0, 0.8);
    padding: 5px 10px; /* Adjust padding as needed */
    border-radius: 5px; /* Optional: for rounded corners */
}

.item:hover {
    transform: scale(1.1);
    transition: .3s ease;
}

@media(max-width:1000px) {
    .container {
        grid-template-columns: repeat(2, minmax(15rem, 1fr)); 
    }
}


@media(max-width:700px) {
    .container {
        grid-template-columns: repeat(1, minmax(15rem, 1fr)); 
    }
}
</style>