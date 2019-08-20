<!doctype html>
<html lang="es">
<head>

    <link href='images/code.ico' rel='shortcut icon' type='image/x-icon'>
    <meta charset="utf-8">

    <title>Colas</title>
    <meta name="description" content="Colas">
    <meta name="author" content="
    Ricardo Martin Marcucci
">

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="css/reveal.css">
    <link rel="stylesheet" href="css/theme/league.css" id="theme">

    <link rel="icon" href="https://www.iua.edu.ar/wp-content/uploads/sites/6/2016/12/favicon.png" sizes="32x32" />
    <link rel="icon" href="https://www.iua.edu.ar/wp-content/uploads/sites/6/2016/12/favicon.png" sizes="192x192" />
    <link rel="apple-touch-icon-precomposed" href="https://www.iua.edu.ar/wp-content/uploads/sites/6/2016/12/favicon.png" />

    <!-- Theme used for syntax highlighting of code -->
    <link rel="stylesheet" href="lib/css/zenburn.css">
    <link rel="stylesheet" href="css/filminas.css">
    <script src="js/JSCPP.es5.min.js"></script>
    <script src="js/runcpp.js"></script>

    <!-- Printing and PDF exports -->
    <script>
        var link = document.createElement( 'link' );
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
        document.getElementsByTagName( 'head' )[0].appendChild( link );
    </script>

    <!--[if lt IE 9]>
    <script src="lib/js/html5shiv.js"></script>
    <![endif]-->
</head>

<body>

<div class="reveal">

    <!-- Any section element inside of this container is displayed as a slide -->
    <div class="slides">


<section>
    <h1>Colas</h1>
    

    <p>
        <small>Created by
            <a href="https://t.me/rmarku" target="_blank">
                <i class="fab fa-telegram-plane"></i>rmarku
            </a>
        </small>
    </p>
</section>



<section>
    <h2>Colas</h2>
    <p>Una cola es una colección ordenada de elementos en la que pueden insertarse elementos en un extremo (FONDO)
        y suprimirse elementos por el otro extremo (FRENTE)
    </p>
    <img src="images/colas/cola.png" alt="" class="noBorder" style="height: 300px;">
</section>
<section>
    <h2>Colas</h2>

    Las colas son estructuras que se encuentran frecuentemente en la vida diaria. Algunos ejemplos se encuentran en la
    fila de un banco, un grupo de automóviles esperando en una cab ina de peaje, personas esperando para comprar un
    boleto pa ra el cine, etc.
    <img src="images/colas/colapersonas.jpg" alt="">
</section>
<section>
    <h2>Colas</h2>

    Por ejemplo, la forma en que se acomodan los coches que llegan a una cabina de peaje es la siguiente:
    se puede añadir un coche al final de la cola, y el primero que se va es el que está al principio de la cola . O sea
    que el primero que llego es el primero que se va.
</section>
<section>
    <h2>Colas</h2>
    <br>
    La propiedad anterior se conoce como <b>FIFO</b> ( First In First Out ), es decir, el primero en entrar será el
    primero en salir.
    <img src="images/colas/fifo.png" alt="">
</section>
<section>
    <h2>Colas</h2>
    <table>
        <tr>
            <td><b>encolar(x)</b></td>
            <td>Inserta el elemento por el Fondo de la cola.</td>
        </tr>
        <tr>
            <td><b>x=desencolar()</b></td>
            <td>Saca un elemento por el frente de la cola y lo almacena en x</td>
        </tr>
        <tr>
            <td><b>estaVacia()</b></td>
            <td>Devuelve V/F según si está vacía la cola.</td>
        </tr>
    </table>
</section>
<section>
    <h2>Colas</h2>
    <h4>Formas de implementar</h4>
    <ul>
        <li>Mediante arreglos: <br> Se mantiene un indice de entrada y uno de la salida.</li>
        <li>Mediante Nodos enlazados:<br>Se mantiene un puntero al primer nodo y uno al ultimo nodo.</li>
    </ul>
</section>
<section>
    <h2>Colas</h2>
    <h2>A implementar.</h2>
</section>
</div>
</div>

<script src="lib/js/head.min.js"></script>
<script src="js/reveal.js"></script>

<script>
    // More info https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
        history: true,

        // More info https://github.com/hakimel/reveal.js#dependencies
        dependencies: [
            {src: 'plugin/markdown/marked.js'},
            {src: 'plugin/markdown/markdown.js'},
            {src: 'plugin/notes/notes.js', async: true},
            {src: 'plugin/math/math.js', async: true},
            {
                src: 'plugin/highlight/highlight.js', async: true, callback: function () {
                    hljs.initHighlightingOnLoad();
                }
            }
        ]
    });
</script>
</body>
</html>

