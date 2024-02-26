<header>
<a href="#" class="logo">logo</a>
<input type="checkbox" id="menu-bar">
<label for="menu-bar">Menu</label>

<nav class="navbar">
    <ul>
        <li><a href="\">home</a></li>
        <li><a href="#">levels +</a>
    		<ul>
 				<li><a href="#">north america</a></li>
		        <li><a href="#">south america</a></li>
                <li class="europe"><a href="#">europe +</a>
                        <ul>
                            <li><a href="#">test</a></li>
                            <li><a href="#">test</a></li>
                            <li><a href="#">test</a></li>
                        </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#">about</a></li>
                <li><a href="#">review</a></li>
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
}

header .logo{
    font-weight: bolder;
    font-size: 250%;
    color: #333;
}

header .navbar ul{
    list-style: none;
}

header .navbar ul li{
    position: relative;
    float: left;
}

header .navbar ul li a{
    font-size: 150%;
    padding: 20px;
    color: #333;
    display: block;
}

header .navbar ul li a:hover{
    background-color: #333;
    color: #fff;
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