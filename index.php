<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width,initial-scale=1" name="viewport">
    <meta content="ie=edge" http-equiv="X-UA-Compatible">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
    <title>Test de Arquetipos</title>
</head>

<body>
    <section class="parallax" id="s1">
        <header id="bannerPrincipal" style="background-color:rgba(47,57,72,.95)">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="text-center col-12">
                        <h1 class="my-5 display-3 text-bold text-light">¡Conócete descubriendo tu Arquetipo!</h1></div>
                </div>
            </div>
        </header>
    </section>
    <section class="parallax" id="s2"></section>
    <section class="parallax" id="s3">
        <div class="bg-transparent p-5" id="fernandoCelis" style="background-color:rgba(47,57,72,.95)!important">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="text-center col-12 col-md-10">
                        <button class="btn-lg btn-primary text-uppercase" id="arq">¡Realiza el Test!</button>
                        <div class="carousel slide" id="carouselExampleControls" data-interval="false" data-ride="carousel">
                            <div class="text-center carousel-inner" id="carousel">
                                <form action="tu-arquetipo.php" id="sub" method="POST" target="_blank">
                                    <input id="0" name="guerrero" style="display:none">
                                    <input id="1" name="amante" style="display:none">
                                    <input id="2" name="sabio" style="display:none">
                                    <input id="3" name="mago" style="display:none">
                                    <input id="4" name="flag" style="display:none" value="0">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="parallax" id="s5">
        <div id="c" style="background-color:rgba(255,255,255,.9)"></div>
        <footer class="parallax" id="logosPatrocinadores border-none p-5" style="background-color:rgba(47,57,72,.95)">
            <div class="container">
                <div class="bg-transparent border-0 img-thumbnail border-none d-flex justify-content-around row">
                    <div class="text-center col-md-8 my-5"></div>
                    <div class="w-100"></div>
                    <div class="text-center align-self-center col-sm-4"><img class="img-fluid" class="bg-transparent border-0 img-thumbnail w-25" alt="" src="img/logo1.png" width="40%"></div>
                    <div class="text-center align-self-center col-sm-4"><img class="img-fluid" class="bg-transparent border-0 img-thumbnail w-50" alt="" src="img/logo2.png" width="40%"></div>
                    <div class="text-center align-self-center col-sm-4"><img class="img-fluid" class="bg-transparent border-0 img-thumbnail w-25" alt="" src="img/logo3.png" width="65%"></div>
                    <div class="w-100 my-3"></div>
                    <div class="col-8">
                        <br>
                        <h6 class="text-center" style="color:#fff"><b>2019 ILC Academy Worldwide</b></h6></div>
                </div>
            </div>
        </footer>
    </section>
    <script src="js/fontawesome5.0.10/svg-with-js/js/fontawesome-all.min.js" defer></script>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
    <script src="https://www.googletagmanager.com/gtag/js?id=UA-144830690-1" async></script>
    <script>
        function gtag() {
            dataLayer.push(arguments)
        }
        window.dataLayer = window.dataLayer || [], gtag("js", new Date), gtag("config", "UA-144830690-1")
    </script>
</body>

</html>