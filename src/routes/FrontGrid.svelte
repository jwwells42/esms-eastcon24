<body>
    <div class="container">
        <div class="item item-1">Geography Game
            <img src="globe.png">
            <h1 href="/globe" class="btn">Try It!</h1>
        </div>
        <div class="item item-2">2</div>
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
}

.item {
    padding: 0.5em;
    font-weight: 700;
    color: var(--clr-light);
    border: 10px solid var(--clr-accent);
    font-size: 30px;
    text-align: center;
}
.container {
    display: grid;
    grid-template-columns: 20% 15% 20% 10% 20% 15%;
    grid-template-rows: 200px 200px 200px 200px 200px;
}

.item-1 {
    grid-column: 1/3;
    grid-row: 1/3;
    overflow: hidden;
    background-image: url("globe.png");
    background-size: 690px 400px;
    background-repeat: no-repeat;
    overflow: hidden;
    width: 99%;
    transition: .3s ease
}

.item-1:hover {
    transform: scale(1.1);
}

.item-1 h3 {
   text-align: center;
   font-size: 20px;
   padding-bottom: 20px;
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