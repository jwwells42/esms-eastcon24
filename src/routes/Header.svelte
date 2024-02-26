<header>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anta&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Annapurna+SIL&family=Anta&display=swap" rel="stylesheet">
<a href="/" class="logo">EAST</a>
<input type="checkbox" id="menu-bar">
<label for="menu-bar">Menu</label>

<nav class="navbar">
    <ul>
        <li><a href="/frontgrid">home</a></li>
        <li><a href="#">levels +</a>
    		<ul class="second">
 				<li><a href="#">north america</a></li>
		        <li><a href="#">south america</a></li>
                <li class="europe"><a href="#">europe +</a>
                        <ul class="third">
                            <li><a href="#">test</a></li>
                            <li><a href="#">test</a></li>
                            <li><a href="#">test</a></li>
                        </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#">about</a></li>
                <li><a href="/globe">globe</a></li>
                <li><a href="#">contact</a></li>
                <li><a href="#">feedback</a></li>
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
    background: #ffffff;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    padding: 0px 8%;
    font-family: "Anta", sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: skyblue;
}

header .logo{
    font-weight: bolder;
    font-size: 250%;
    color: black;
}

.logo {
  font-family: "Anta", sans-serif;
  font-weight: 400;
  font-style: normal;
}

header .navbar ul{
    list-style: none;
    margin: 0px;
    font-size: 20px;

}

header .navbar ul li{       /*First Layer Of Nav Bar*/ /*Continue Working On Border*/
    position: relative;
    float: left;
    z-index: 2;
}

.second {
    padding: 0px;
    text-align: center;
}

header .navbar ul li a{
    font-size: 150%;
    padding: 20px;
    color: black;
    display: block;
}

.third {
    padding: 0px;
    background-color: skyblue;
}

header .navbar ul li ul{
    position: absolute;
    left: 0;
    width: 200px;
    background: skyblue;
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

@media(max-width:991px){

    header{
        padding: 20px;
    }

    header label{
        display: initial;
    }

    header .navbar{
        position: absolute;
        top: 100%; left: 0; right: 0;
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