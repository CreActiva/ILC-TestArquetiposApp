<?php
	include('arquetipos.php');
?>
<!DOCTYPE html>
<html lang="es" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Tu arquetipo</title>
		<link rel="stylesheet" type="text/css" href="css/base.css" />
		<script>document.documentElement.className="js";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");</script>
		<style>
				@media (min-width: 0) { 
					#tu {
						padding: 8.2rem;
					}
				}
				@media (min-width: 576px) { 
					#tu {
						padding: 7rem;
					}
				}
				@media (min-width: 768px) { 
					#tu {
						padding: 4rem;
					}
				}
				@media (min-width: 992px) { 
					#tu {
						padding: 1rem;
					}
				}
				@media (min-width: 1200px) {
					#tu {
						padding: 2rem;
					}
				 }
		</style>
	</head>
	<body class="loading">
		<svg class="hidden">
			<symbol id="icon-arrow" viewBox="0 0 24 24">
				<title>arrow</title>
				<polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "/>
			</symbol>
			<symbol id="icon-caret" viewBox="0 0 24 13">
				<title>caret</title>
				<path d="M23.646.328a.842.842 0 0 0-1.19 0l-10.459 10.48L1.517.328a.842.842 0 0 0-1.189 1.19L11.382 12.57c.164.164.369.246.595.246.205 0 .43-.082.594-.246L23.625 1.518a.824.824 0 0 0 .02-1.19z"/>
			</symbol>
		</svg>
		<main>
			<div class="slideshow">
				<div class="slide">
					<div class="preview">
						<div class="preview__img-wrap">
							<div class="preview__img" style="background-image: url(<?php echo $Arquetipos[0]->getFondo(); ?>);"></div>
							<div class="preview__img-reveal"></div>
						</div>
						<h3 class="preview__title"><?php echo $Arquetipos[0]->getTitulo(); ?></h3>
						<div class="preview__content">
							<p><?php echo $Arquetipos[0]->getDescripcion(); ?></p>
						</div>
					</div>
					<div class="slide__img-wrap">
						<div class="slide__img" style="background-image: url(<?php echo $Arquetipos[0]->getImagen(); ?>);"></div>
						<div class="slide__img-reveal"></div>
					</div>
					<span class="slide__number"><?php echo $Arquetipos[0]->getPorcentaje(); ?>%</span>
						<h3 class="slide__title"><?php echo $Arquetipos[0]->getNombre(); ?></h3>
				</div>
				<div class="slide">
					<div class="preview">
						<div class="preview__img-wrap">
							<div class="preview__img" style="background-image: url(<?php echo $Arquetipos[1]->getFondo(); ?>);"></div>
							<div class="preview__img-reveal"></div>
						</div>
						<h3 class="preview__title"><?php echo $Arquetipos[1]->getTitulo(); ?></h3>
						<div class="preview__content">
							<p><?php echo $Arquetipos[1]->getDescripcion(); ?></p>
						</div>
					</div>
					<div class="slide__img-wrap">
						<div class="slide__img" style="background-image: url(<?php echo $Arquetipos[1]->getImagen(); ?>);"></div>
						<div class="slide__img-reveal"></div>
					</div>
					<span class="slide__number"><?php echo $Arquetipos[1]->getPorcentaje(); ?>%</span>
					<h3 class="slide__title"><?php echo $Arquetipos[1]->getNombre(); ?></h3>
				</div>
				<div class="slide">
					<div class="preview">
						<div class="preview__img-wrap">
							<div class="preview__img" style="background-image: url(<?php echo $Arquetipos[2]->getFondo(); ?>);"></div>
							<div class="preview__img-reveal"></div>
						</div>
						<h3 class="preview__title"><?php echo $Arquetipos[2]->getTitulo(); ?></h3>
						<div class="preview__content">
							<p><?php echo $Arquetipos[2]->getDescripcion(); ?></p>
						</div>
					</div>
					<div class="slide__img-wrap">
						<div class="slide__img" style="background-image: url(<?php echo $Arquetipos[2]->getImagen(); ?>);"></div>
						<div class="slide__img-reveal"></div>
					</div>
					<span class="slide__number"><?php echo $Arquetipos[2]->getPorcentaje(); ?>%</span>
					<h3 class="slide__title"><?php echo $Arquetipos[2]->getNombre(); ?></h3>
				</div>
				<div class="slide">
					<div class="preview">
						<div class="preview__img-wrap">
							<div class="preview__img" style="background-image: url(<?php echo $Arquetipos[3]->getFondo(); ?>);"></div>
							<div class="preview__img-reveal"></div>
						</div>
						<h3 class="preview__title"><?php echo $Arquetipos[3]->getTitulo(); ?></h3>
						<div class="preview__content">
							<p><?php echo $Arquetipos[3]->getDescripcion(); ?></p>
						</div>
					</div>
					<div class="slide__img-wrap">
						<div class="slide__img" style="background-image: url(<?php echo $Arquetipos[3]->getImagen(); ?>);"></div>
						<div class="slide__img-reveal"></div>
					</div>
					<span class="slide__number"><?php echo $Arquetipos[3]->getPorcentaje(); ?>%</span>
					<h3 class="slide__title"><?php echo $Arquetipos[3]->getNombre(); ?></h3>
				</div>
				<nav class="slidenav">
					<button class="slidenav__item slidenav__item--prev" style="font-size: 200%;">Anterior</button>
					<button class="slidenav__item slidenav__item--next" style="font-size: 200%;">Siguiente</button>
					<button class="slidenav__preview">
						<svg class="icon icon--caret">
							<use xlink:href="#icon-caret"></use>
						</svg>
					</button>
				</nav>
			</div>
		</main>
		<script src="js/imagesloaded.pkgd.min.js"></script>
		<script src="js/TweenMax.min.js"></script>
		<script src="js/demo.js"></script>
	</body>
</html>