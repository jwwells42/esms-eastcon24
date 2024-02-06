<body>
    <div class="container">
    <h1>Take a moment to breathe with Goobf.</h1>
    <div class="goobf-box">
    <div class="goobf"></div>
    </div></div>
</body>
<style>
    body {
        background-color: rgb(42,42,42);
    }

    h1 { 
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: rgb(184, 171, 149);
        animation: wavy 7s infinite;

    }
    .container {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }

    .goobf-box {
        margin-left: -250px;
        margin-top: -225px;
        padding: 0;
        position: relative;
    }
    .goobf {
        position: absolute;
        width: 1046px;
        height: 929px;
        background: url($lib/images/goobf.png);
        animation: breathe 7s steps(12) infinite;
        transform: scale(0.5);
    }

    @keyframes breathe {
        to { background-position: -12552px; }
    }   
    @keyframes wavy {
        0% {
            transform: translateY(15px)
        }
        50% {
            transform: translateY(-25px)
        }
        100% {
            transform: translateY(15px)
        }
        }
</style>