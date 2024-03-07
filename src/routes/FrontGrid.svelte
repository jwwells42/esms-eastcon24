<script>
    import globe from '$lib/images/globe.png'
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
                <img class="img" src={globe} alt="Horsey">
                <h1 class="text">Horsey</h1>
            </div>
        </a>
        <a href="/goobf">
            <div class="item">
                <img class="img" src={globe} alt="Goobf: Wellness">
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
        <a href="/presentation">
            <div class="item">
                <img class="img" src={globe} alt="Presentation">
                <h1 class="text">ESMS EASTCon24 Presentation</h1>
            </div>
        </a>
        <a href="https://www.eastconference.org/">
            <div class="item">
                <img class="img" src={globe} alt="EASTCon24">
                <h1 class="text">EAST Conference Website</h1>
            </div>
        </a>
    </div>
</body>

<style>
:root {
    --clr-dark: #0f172a;
    --clr-light: #f1f5f9;
    --clr-accent: #e11d48;
}

*,
*::before,
*::after {
box-sizing: border-box;
}

body {
    margin: 0; /* this was originally 5em 0 0 0 which was creating the evil white bar at the top */
    padding: 0;
    line-height: 1.6;
    word-spacing: 1.4px;
    font-family: 'Roboto', sans-serif;
    color: var(--clr-dark);
    background-color: var(--clr-light);
}

.container {
    display: grid;
    width: 80vw;
    margin: 2em auto; /* moving the 2em here means we only get the space under the header */
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); /* minimum of 5rem, maximum of 1fr */
    grid-auto-rows: minmax(15rem, auto);
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