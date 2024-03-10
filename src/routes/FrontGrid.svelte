<script>
    import globe from '$lib/images/globe.png'
    import horsey from '$lib/images/horsey.png'
    import goobf from '$lib/images/goobf.png'
</script>

<body>
    <div class="container">
        <a href="/zonia">
            <div class="item">
                <img class="img" src={globe} alt="Zonia">
                <h1 class="text">Zonia</h1>
            </div>
        </a>
        <a href="/horsey">
            <div class="item">
                <img class="img" src={horsey} alt="Horsey">
                <h1 class="text">Horsey</h1>
            </div>
        </a>
        <a href="/goobf">
            <div class="item">
                <img class="img" src={goobf} alt="Goobf: Wellness">
                <h1 class="text">Goobf: Wellness</h1>
            </div>
        </a>
        <a href="/vent">
            <div class="item">
                <img class="img" src={globe} alt="Purge Vent">
                <h1 class="text">Purge Vent</h1>
            </div>
        </a>
        <a href="/accessibility">
            <div class="item">
                <img class="img" src={globe} alt="Downtown Accessibility">
                <h1 class="text">Downtown Accessibility</h1>
            </div>
        </a>
        <a href="/design">
            <div class="item">
                <img class="img" src={globe} alt="Graphic Design">
                <h1 class="text">Graphic Design</h1>
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
    font-family: 'Roboto', sans-serif;
    color: #fbbb3b;
    background-color: rgb(139, 34, 97)
}

.container {
    display: grid;
    width: 80vw;
    max-height: 90vh;
    margin: 1em auto; /* moving the 2em here means we only get the space under the header */
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); /* minimum of 5rem, maximum of 1fr */
    gap: 1.3rem;
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
    position: relative;
    color: var(--clr-light);
    z-index: 2;
    font-size: 2vw; /* responsive text based on viewport width */
}
.item:hover {
    transform: scale(1.1);
    transition: .3s ease;
}
</style>