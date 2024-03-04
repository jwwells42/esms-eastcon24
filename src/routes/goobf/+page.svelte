<script>
    import Goobf from './Goobf.svelte'
</script>
<body>
    <div class="big-container">
        <div class="goobf-container">
            <h1>Take a moment to breathe with Goobf.</h1>
        </div>
    <Goobf />
    </div>
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

    .big-container {
        display:flex;
        gap:3em;
    }
    
    .goobf-container {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
</style>