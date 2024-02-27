<script>
    import globe from '$lib/images/globe.png'
</script>

<body>
    <div class="container">
        <a href="/globe">
            <div class="item">
                <img class="img" src={globe} alt="Geography Game">
                <h1 class="text">Geogopher</h1>
            </div>
        </a>
        <a href="/globe">
            <div class="item">
                <img class="img" src={globe} alt="Geography Game">
                <h1 class="text">Geogopher</h1>
            </div>
        </a>
        <a href="/globe">
            <div class="item">
                <img class="img" src={globe} alt="Geography Game">
                <h1 class="text">Geogopher</h1>
            </div>
        </a>
        <a href="/globe">
            <div class="item">
                <img class="img" src={globe} alt="Geography Game">
                <h1 class="text">Geogopher</h1>
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
    margin: 5em 0 0 0;
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
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr)); /* minimum of 5rem, maximum of 1fr */
    gap: 1.5rem;
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
    border: thick solid black;
    border-radius: 15%;
    z-index: 1;
}

.item .text {
    position: relative;
    color: var(--clr-light);
    z-index: 2;
}
.item:hover {
    transform: scale(1.1);
    transition: .3s ease;
}
</style>