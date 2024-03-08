<script>
    import Goobf from './Goobf.svelte'
    import { count } from '$lib/store.js'
</script>

<body>
    <div class="flex"> 
        <Goobf />
        <div class="text">
            <h1>Be Goobf's breathing buddy. Match your breath and follow the circle with your mouse.<br><br>
            {Math.round($count / 60)} seconds</h1> <!--could set goal seconds, set adjuster for breathing time-->
        </div>
    </div>  
</body>

<style>
    body {
        background-color: rgb(42,42,42);
    }

    .flex {
        display: flex;
    }

    h1 {
        color: white;
    }
</style>
