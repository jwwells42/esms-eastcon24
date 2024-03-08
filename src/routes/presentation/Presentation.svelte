<script>
    import Slide from './Slide.svelte'
    import Code from './Code.svelte'
    import Globe from '../zonia/Globe.svelte'
    import Horsey from '../horsey/Horsey.svelte'
    import Goobf from '../goobf/Goobf.svelte';
</script>

<Slide>
    <div class="slideone">
        <div class="goobftext">
            <p class="goobftext">Engaging paced breathing app for students to use during school.
            </p>
        </div>
        <div class="goobf">
            <Goobf />
        </div>
            <h1 class="goobfbreath">Breathing With Goobf</h1>
    </div>
</Slide>

<Slide>
    <div class="slidethree">
        <h1 class="title">Jasper's Purge Vent</h1> <h1 class="titletwo"></h1>
        <p class="jasper">The goal of the purge vent project is to make a safer environment and be able to have a larger variety of 
            potential lab experiments. The use of a purge vent is to simply suck out any harmful gases from chemicals objects so it 
            does not hurt any students. I have presented to many different people including the principal and the faculties people. 
            We have gotten clearance to buy the purge vent but we need to plan things first. This also includes other lab equipment 
            including a chemical storage unit.Steel type: G90 Galvanized steel
        </p>
        
        <p class="jaspertwo">
        font-size: 100%;
        text-align: left;
        width: 100%;
    }

    .goobfbreath {
        text-align: center;
        position: relative;
        top: 170px;
        font-size: 70px;
        grid-column: 4/6;
        color: skyblue;
    }

    .slidethree { /*Maybe look at changing padding-bottom on title elements to grid spacing*/
        font-size: 80%;
        text-align: left;
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
        grid-template-rows: 13% 20% 20% 20% 20%;
    }
    
    .title {
        position: relative;
        font-size: 200%;
        text-align: left;
        padding-bottom: 50%;
        padding-left: 8%;
        padding-top: 8%;
        margin: 0px;
        color: #c82689;
        width: 170%;
        height: 40%;
    }

    .jasper {
        grid-column: 1/3;
        grid-row: 2/3;
        margin: 0px;
        padding-left: 4%;
        font-size: 115%;
        color: #fbbb3b;
        height: 380%;
        width: 70%;
    }

    .titletwo {
        grid-column: 5/6;
        grid-row: 1/2;
        position: relative;
        margin: 0%;
        color: #c82689;
    }

    .jaspertwo {
        grid-column: 5/6;
        grid-row: 2/3;
        position: relative;
        margin: 0%;
        color: #fbbb3b;

    }
</style>