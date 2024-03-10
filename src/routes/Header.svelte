<header>
    <a href="/" class="logo">ESMS EAST</a>
    <input type="checkbox" id="menu-bar">
    <label for="menu-bar">Menu</label>
    
    <nav sveltekit-data-reload class="navbar">
        <ul>
            <li><a href="/zonia">Zonia</a>
                <ul class="invisible">
                    <li class="second"><a rel="external" href="/zonia/us">United States</a>
                        <ul class="invisible">
                            <li class="third"><a rel="external" href="/zonia/us/northeast">Northeast</a></li>
                            <li class="third"><a rel="external" href="/zonia/us/south">South</a></li>
                            <li class="third"><a rel="external" href="/zonia/us/midwest">Midwest</a></li>
                            <li class="third"><a rel="external" href="/zonia/us/west">West</a></li>
                        </ul></li>
                    <li class="second"><a rel="external" href="/zonia/africa">Africa</a></li>
                    <li class="second"><a rel="external" href="/zonia/europe">Europe</a></li>
                    <li class="second"><a rel="external" href="/zonia/asia">Asia</a></li>
                    <li class="second"><a rel="external" href="/zonia/north-america">North America</a></li>
                    <li class="second"><a rel="external" href="/zonia/south-america">South America</a></li>
                    <li class="second"><a rel="external" href="/zonia/world">World</a></li>
                </ul>
                    <li><a href="/horsey">Horsey</a></li>
                    <li><a href="/goobf">Goobf</a></li>
                    <li><a href="/vent">Vent</a></li>
                    <li><a href="/accessibility">Accessibility</a></li>
                    <li><a href="/design">Design</a></li>
                    <li><a href="/presentation">Presentation</a></li>
        </ul>
            </nav>
        </header>
<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-transform: capitalize;
        text-decoration: none;
        padding: 0px 3%;
        font-family: "Anta", sans-serif;
        font-weight: 400;
        font-style: normal;
        background-color: #c82689;
    }
    
    header .logo{
        font-weight: bolder;
        font-size: 200%;
        color: #f58622;
    }
    
    .logo {
      font-family: "Anta", sans-serif;
      font-weight: 400;
      font-style: normal;
    }
    
    header .navbar ul{
        list-style: none;
        margin: 0px;
        font-size: 15px;
    }
    
    header .navbar ul li{       /*First Layer Of Nav Bar*/ /*Continue Working On Border*/
        position: relative;
        float: left;
        background-color: #c82689;
        z-index: 3;
    }
    
    .second {
        text-align: center;
    }
    
    .invisible {
        padding: 0px;
    }
    
    header .navbar ul li a{
        font-size: 150%;
        padding: 16px;
        color: white;
        display: block;
    }
    
    .third {
        padding: 0px;
        background-color: skyblue;
    }
    
    header .navbar ul li a:hover{
        background-color: #8b2261;
        border-style: solid;
        border: 0px;
        border-radius: 0%;
    }
    
    header .navbar ul li ul{
        position: absolute;
        left: 0;
        width: 200px;
        background: #fff;
        display: none;
    }
    
    header .navbar ul li ul li{
        width: 100%;
        border-top: 1px solid rgba(0,0,0,.1);
    }
    
    header .navbar ul li ul li ul{
        left: 200px;
        top: 0;
    }
    
    header .navbar ul li:hover > ul{
        display: initial;
    }
    
    header .navbar ul li:focus-within > ul,
    header .navbar ul li:hover > ul{
        display: initial;
    }
    
    #menu-bar{
        display: none;
    }
    
    header label{
        font-size: 150%;
        color: #333;
        cursor: pointer;
        display: none;
    }
    
    @media(max-width:1000px){
    
        header{
            padding: 20px;
        }
    
        header label{
            display: initial;
        }
    
        header .navbar{
            position: absolute;
            top: 100%; left: 0; right: 0; /* this line is part of why the mobile menu doesn't work, I think */
            background: #fff;
            border-top: 1px solid rgba(0,0,0,.1);
            display: none;
        }
    
        header .navbar ul li{
            width: 100%;
        }
    
        header .navbar ul li ul{
            position: relative;
            width: 100%;
        }
    
        header .navbar ul li ul li{
            background: #eee;
        }
    
        header .navbar ul li ul li ul{
            width: 100%;
            left: 0;
        }
    
        #menu-bar:checked ~ .navbar{
            display: initial;
        }
    }
    </style>