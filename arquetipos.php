<?php
Class Arquetipo{
	#propiedades o atributos
	protected $nombre = '';
	protected $porcentaje = 0;
	protected $respuestas = 0;
	protected $titulo = '';
	protected $descripcion = '';
	protected $dLista = [];
	protected $imagen = '';
	protected $fondo = '';
	protected $posicion = 0;
	#metodos
	protected function calPorcentaje($x,$y = 0) {
		$a = 0;
		if($y == 0) {
			$a = $x * 100 / 20;
		} else if($y == 1){
			$a = $x * 100 / 21;
		}
		$a = round($a);
		return $a;
	}
	#setters and getters
	public function setNombre($n){
		$this->nombre = $n;
	}
	public function getNombre(){
		return $this->nombre;
	}
	public function setPorcentaje($p){
		$this->porcentaje = $p;
	}
	public function getPorcentaje(){
		return $this->porcentaje;
	}
	public function setRespuestas($r){
		$this->respuestas = $r;
	}
	public function getRespuestas(){
		return $this->respuestas;
	}
	public function setTitulo($t){
		$this->titulo = $t;
	}
	public function getTitulo(){
		return $this->titulo;
	}
	public function setDescripcion($d){
		$this->descripcion = $d;
	}
	public function getDescripcion(){
		return $this->descripcion;
	}
	public function setLista($a){
		$i = 0;
		foreach ($a as $value) {
			$this->dLista[$i] = $value;
			$i++;
		}
	}
	public function getLista(){
		print('<ol>');
		foreach ($this->dLista as $value) {
			print('<li>'.$value.'</li>');
		}
		print('</ol>');
	}
	public function setImagen($i){
		$this->imagen = $i;
	}
	public function getImagen(){
		return $this->imagen;
	}
	public function setFondo($f){
		$this->fondo = $f;
	}
	public function getFondo(){
		return $this->fondo;
	}
	public function setPosicion($p){
		$this->posicion = $p;
	}
	public function getPosicion(){
		return $this->posicion;
	}
	#Constructor
	public function __construct($n,$r,$i,$f,$p,$y=0){
		$this->nombre = $n;
		$this->respuestas = $r;
		$this->imagen = $i;
		$this->fondo = $f;
		$this->posicion = $p;
		$this->porcentaje = $this->calPorcentaje($r,$y);
	}
}
function determinarPosicion($a,$b,$c,$d){
	$arreglo = array(4);
	$arreglo[0] = $a;
	$arreglo[1] = $b;
	$arreglo[2] = $c;
	$arreglo[3] = $d;
	rsort($arreglo);//Arreglar array de manera descendente (inverso de sort)
	switch ($a) {
	 	case $arreglo[0]:
	 		$r = 1;
		break;
	 	case $arreglo[1]:
	 		$r = 2;
		break;
		case $arreglo[2]:
			$r = 3;
		break;
		case $arreglo[3]:
			$r = 4;
		break;
	 }
	 return $r;
}
#Resultados
$G = $_POST['guerrero'];
$A = $_POST['amante'];
$S = $_POST['sabio'];
$M = $_POST['mago'];
#Nombres
$NG = 'Guerrero';
$NA = 'Amante';
$NS = 'Sabio Rey';
$NM = 'Mago';
#Url imagenes
$UG = 'https://ilcacademy.com/test-arquetipos/images/guerrero.png';
$UA = 'https://ilcacademy.com/test-arquetipos/images/amante.png';
$US = 'https://ilcacademy.com/test-arquetipos/images/sabiorey.png';
$UM = 'https://ilcacademy.com/test-arquetipos/images/mago.png';
#Fondos de imágenes
$FG = 'https://ilcacademy.com/test-arquetipos/images/guerrero-fondo.jpg';
$FA = 'https://ilcacademy.com/test-arquetipos/images/amante-fondo.jpg';
$FS = 'https://ilcacademy.com/test-arquetipos/images/sabio-fondo.jpg';
$FM = 'https://ilcacademy.com/test-arquetipos/images/mago-fondo.jpg';
#Lista
$LG = array(
	 'Necesitas tener el control.',
	 'Te gustan las respuestas directas y concisas.',
	 'Necesitas saber de que se trata y pronto.',
	 'Prefieres tener opciones para decidir.',
	 'No te sientes cómodo si te contradicen.',
);
$LA = array(
	 'Lorem ipsum amante.',
	 'Lorem ipsum amante.',
	 'Lorem ipsum amante.',
	 'Lorem ipsum amante.',
	 'Lorem ipsum amante.',
);
$LS = array(
	 'Lorem ipsum sabio  rey.',
	 'Lorem ipsum sabio  rey.',
	 'Lorem ipsum sabio  rey.',
	 'Lorem ipsum sabio  rey.',
	 'Lorem ipsum sabio  rey.',
);
$LM = array(
	 'Lorem ipsum mago.',
	 'Lorem ipsum mago.',
	 'Lorem ipsum mago.',
	 'Lorem ipsum mago.',
	 'Lorem ipsum mago.',
);
#Descripciones
$DG = 'En este cuadrante la velocidad de acción es rápida y hacia afuera. El Guerrero no comparte su corazón con todo el mundo y su necesidad más importante a satisfacer sobre otros es el control y la certeza. Le preocupa la seguridad de saber que tiene todo lo que hace falta para dominar el momento.  Se enfoca en el presente. Se trata del caballero armado que sale a la batalla a hacer lo que tenga que hacer para ganar. Siempre está en busca de soluciones prácticas y más de una vez lo verás con el ceño fruncido, hablando alto y dando instrucciones. Posiblemente se molestará cuando los otros no le respondan con la misma rapidez con la que él observa el mundo.
Es muy bueno tener un Guerrero en el equipo porque siempre es el que ejecuta un resultado final.
Este tipo de personalidad aprecia mucho las oportunidades para avanzar rápidamente porque le atraen los resultados obtenidos después de haberse arriesgado. Por tanto, le agradan los retos.';
$DA = 'Este cuadrante corresponde a alguien que vibra con el ritmo moderado del Sabio Rey, pero que está más abierto a las relaciones, por tanto, expone sus sentimientos, lo que lo hace fuerte a la vez que vulnerable. Suele ser fiel al grupo y se inspira por la amistad y los nexos afectivos. Se preocupa por el bienestar del grupo y es sensible a los problemas y sentimientos de los demás.
En cuanto a la línea de tiempo, se suele enfocar en el pasado y todo lo que representa lo histórico. Esto le permite valorar y conectar con los suyos. Su necesidad más importante a satisfacer es el amor y la conexión. De allí que evite conflictos lo cual le hace un excelente negociador e intermediador.';
$DS = 'Se trata del cuadrante que indica una personalidad con tendencia más pausada a la que puede mostrar el Guerrero o el Mago. Es cerebral, analítico. Obtiene sus motivaciones a través de la lógica y los hechos en sí. Planifica su trabajo, por tanto, se puede ver sentado solo, analizando situaciones. Por ello, cuando toma una decisión lo más seguro es que esté muy bien pensada.
Es muy útil contar con un Sabio Rey en el equipo, dada su alta precisión a la hora de dar un consejo. Además, sabe administrar recursos, lo que lo hace muy adecuado para ejercer la administración de una empresa.
En la línea de tiempo es el único de los cuatro arquetipos que es capaz de ver el presente, el pasado y el futuro. Posee una gran facultad de análisis para ver las cosas desde varias perspectivas.
Su problema es que a veces le cuesta arrancar por lo que le hace falta le den una ayuda. Sin embargo, será muy difícil que tome una acción equivocada cuando finalmente se decida a hacerla.';
$DM = 'Este cuadrante indica un tipo de personalidad que es tan rápida e impulsiva como la del Guerrero. Sin embargo, es mucho más abierto a las relaciones. Comparte su corazón con los demás. Su necesidad más importante es ser reconocido, tomado en cuenta, por ello es muy hábil para comunicarse con otros y ganar su amistad. Su línea de tiempo la enfoca en el futuro. Es rápido, aventurero y soñador. Es muy creativo para imaginarse proyectos, pero a veces cambia de parecer de un día para otro. Posee el poder de seducción y convencimiento hacia los demás.
El Mago es muy hábil para conocer a personas en eventos y ambientes sociales de negocio. Por el hecho de obtener reconocimiento, puede lograr excelentes resultados a corto plazo. Valora su tiempo para divertirse, pasear y vivir experiencias intensas. No le gusta que lo ignoren ni trabajar solo, así como la rutina y la excesiva formalidad.
';
#Títulos
$TG = 'Guerrero';
$TA = 'Amante';
$TS = 'Sabio Rey';
$TM = 'Mago';
#Flag
$F = $_POST['flag'];
#Objetos
$PO = determinarPosicion($G,$A,$S,$M);
$Guerrero = new Arquetipo($NG,$G,$UG,$FG,$PO,$F);
$Guerrero->setLista($LG);
$Guerrero->setDescripcion($DG);
$Guerrero->setTitulo($TG);
$PO = determinarPosicion($A,$G,$S,$M);
$Amante = new Arquetipo($NA,$A,$UA,$FA,$PO,$F);
$Amante->setLista($LA);
$Amante->setDescripcion($DA);
$Amante->setTitulo($TA);

$PO = determinarPosicion($S,$A,$G,$M);
$Sabio = new Arquetipo($NS,$S,$US,$FS,$PO,$F);
$Sabio->setLista($LS);
$Sabio->setDescripcion($DS);
$Sabio->setTitulo($TS);

$PO = determinarPosicion($M,$S,$A,$G);
$Mago = new Arquetipo($NM,$M,$UM,$FM	,$PO,$F);
$Mago->setLista($LM);
$Mago->setDescripcion($DM);
$Mago->setTitulo($TM);

$Arquetipos = [];
$Arquetipos[0] = $Guerrero;
$Arquetipos[1] = $Amante;
$Arquetipos[2] = $Sabio;
$Arquetipos[3] = $Mago;

function cmp($a, $b){ //Ordenar array
    if ($a->getPosicion() == $b->getPosicion()) {
        return 0;
    }
    return ($a->getPosicion() < $b->getPosicion()) ? -1 : 1;
}
usort($Arquetipos,"cmp");

?>