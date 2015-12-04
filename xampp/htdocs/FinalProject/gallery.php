<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width-device-width, intial-scale=1"/>
        <title>Vortex | Main</title>
        <link rel="stylesheet" href="styles/gallery.css" type="text/css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
        <script src="js/gallery.js"></script>
    </head>

    <body onload="init()">
        
        <header class="overhead">
            <div id="logo">
                <a href ="#"><img src="icons/logo.png" alt="Vortex logo"/></a>
            </div> 
            <nav>
                <ul>
                    <li><a href="index.php" class="active">Home </a></li>
                    <li><a href="gallery.php" class="active">Gallery</a></li>
                </ul>
            </nav>
        </header>
        <div class="backdrop">
            <div id="gallerycanvas">
                <h1>Image Search</h1>
                <form name="imag" action="" Method="GET">
                <input type="text" name="input"></input>
                <input type="button" name="press" Value="click" onClick="results(this.form)"></input>
                <br>
                </form>
                <!-- where the images are loaded too -->
                <div id="imagecanvas">
                    
                </div>
            </div>
        </div>
    </body>
</html>