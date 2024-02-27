<script>
    
</script>

<body>
    <div class="container">
        <div class="item item-1">Geography Game
        </div>
        <div class="item item-2"></div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
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
    width: 80%;
    margin: 0 auto;
<<<<<<< Updated upstream
=======
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr)); /* minimum of 5rem, maximum of 1fr */
    gap: 4rem;
>>>>>>> Stashed changes
}

.item {
    padding: 0.5em;
    font-weight: 700;
    color: var(--clr-light);
    border: 10px solid;
    border-color: black;
    font-size: 30px;
    text-align: center;
}
.container {
    display: grid;
    grid-template-columns: 300px 250px 400px 400px 300px 250px;
    grid-template-rows: 200px 140px 200px 200px 140px;
}

.item-1 {
    grid-column: 1/3;
    grid-row: 1/3;
    background-image: url('$lib/images/globe.png');
    background-size: 690px 400px;
    background-repeat: no-repeat;
    background-position-y: -38px;
    width: 100%;
    height: 100%;
    background-size: cover;
    transition: .3s ease
}

.item-1:hover {
    transform: scale(1.1);
}

.item-3 {
    grid-column: 1/3;
    grid-row: 4/6;
}

.item-2 {
    grid-column: 5/7;
    grid-row: 1/3;
}

.item-4 {
    grid-column: 5/7;
    grid-row: 4/6;
}
</style>