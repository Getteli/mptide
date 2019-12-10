<?php
header('Content-Type: text/html; charset=utf-8');
echo "O For passa por todos os pinos e confere com cada esfera<br>";
echo "----------------- S --------------- || ---------------- P -------------- <br>";
// vem do form
$vem_arr_sph = $_POST['sphere']; //ESFERA
$vem_arr_pin = $_POST['pin']; //PINO

// print_r($vem_arr_sph);
// echo "<br>";
// print_r($vem_arr_pin);
// echo "<br>";

$esfera = $vem_arr_sph;
$pin = $vem_arr_pin;

// $pin = [
// 	array(
// 	'origem' => "inicio",
// 	'tipo' => "informacao" 
// 	),
// 	array(
// 	'origem' => "inicio",
// 	'tipo' => "imagem"
// 	),
// 	array(
// 	'origem' => "banheiro",
// 	'tipo' => "video" 
// 	)
// ];

// $first_names = array_column($pin, 'origem');
// print_r($first_names);

// $teste = $pin[0];
// foreach($teste as $key => $value){
// 	echo $key;
// }

// foreach($pin as $key => $value){
	// echo "array pino: " . $key;
	// $teste = $pin[$key];
	// print_r( $pin[$key] );
	// echo $teste["origem"];
	// echo "<br>";
	// foreach ($value as $key_intern => $value_intern){
	// 	$key = array_search($value_intern, $value);

	// 	// echo "key: " . $key . "<br>";
	// 	echo $key_intern . ": ";
	// 	echo $value_intern;
	// 	echo "<br>";
	// }
	// echo "<br>";
// }

// $key_sphere = array_search($pin[0], $pin);
// print_r($pin[0]);
// echo "<br>.........................<br>";
	// echo $key_sphere["tipo"];
	// echo "<br>";
	// echo $pin[0];
// foreach($pin as $key => $value){
	// foreach ($value as $key_intern => $value_intern){
		// print_r($value);
	// }
// }

// PEGA OS VALORES DO ARRAY E SEPARA PARA POR NO FRONT PRO USUARIO DEU CERTO
// foreach($esfera as $i => $item) { // passa por todas as esferas
// 	if ( !empty( $item["name"] ) ) { // se a esfera existir continue
// 		echo "A(s) esfera(s): " . $item["name"] ." / ";
// 		foreach($pin as $key => $value){ // passa por todos os pinos
// 			if ( !empty($value["tipo"]) && $value["origem"] == $item["id"] ) { // se o pino existir E a origem do pino for igual a esfera
// 				echo " ----- O(s) Pino(s): " . $value["tipo"] ." / ";
// 			}
// 		}
// 	}
// }

// PEGA DO FORMULARIO E TRANSFORMA EM STRING
$sph_string = convert_string($esfera);

function convert_string($array_sph){
	$result_sph_string = "";
	foreach($array_sph as $i => $item) { // passa por todas as esferas		
		// $result_sph_string .=  "ordem:".$i." ";
		$result_sph_string .=  "".$item['id']."";
		$result_sph_string .=  ",";
		$result_sph_string .=  "".$item['name']."";
		$result_sph_string .=  "|";
	}
	return $result_sph_string;
}

// CONVERTER STRING EM ARRAY
// print $sph_string;
echo "<br>";

function convert_array($string_sph){
	$array_sph_ext = explode("|",$string_sph);
	$array_new = array();
	foreach ($array_sph_ext as $array_sph_int){
		if ( !empty( $array_sph_int ) ) {
			$array_new[] = explode(",",$array_sph_int);
		}
	}
	return $array_new;
}

$novo_array = convert_array($sph_string);

print_r($novo_array);

// function create_sphere($sph_id,$sph_img){
// 	$var_name_sph = "sphere".$sph_id;
// 	$path_img_sph = $sph_img;

// 	$sph_ready = "
// 	var ".$var_name_sph." = new PANOLENS.ImagePanorama( '".$path_img_sph."' );
// 	".$var_name_sph.".addEventListener( 'enter', function(){
// 		mptide_v_esf = 1;
// 		mptide_function_js_onenter();
// 	});
// 	".$var_name_sph.".addEventListener( 'progress', mptide_function_js_onprogress );
// 	".$var_name_sph.".addEventListener( 'load', function(){
// 		mptide_v_prog = null;
// 	});
// 	".$var_name_sph.".addEventListener( 'enter', function(){
// 		if (mptide_v_prog == 1) {
// 			mptide_function_js_onout();
// 		}
// 	});
// 	".$var_name_sph.".addEventListener( 'load', function(){
// 		mptide_v_prog = 1;
// 	});
// 	";

// 	return $sph_ready;
// }




// foreach( $esfera as $key => $n ) {
// 	print "N:" . $n . " ------ pin['key']: " . $pin[$key]['tipo'] . " ---------- key: " . $key . "<br>";
// }

// echo $pin[0]["tipo"];

// print_r($esfera);
// echo "<br>";
// print_r($pin);
// echo "<br>";
// print_r( $vem_arr_pin[1] );
// $json = json_encode($vem_arr_pin);

// echo $json;
// print_r( $json );
// $array = array();

// foreach($vem_arr_sph as $key_sphere => $value_sphere) {
// 	foreach($vem_arr_pin as $key_pin => $value_pin) {
// 		$array[] = array(
// 			'sphere' => $value_sphere,
// 			'aud' => $value_pin
// 		);
// 	}
// }
// print_r($array);


// foreach( $vem_arr_pin[0] as $key => $n ) {
// 	print $n[$key] . "<br>";
// }


// if (empty($vem_arr_pin)) {$vem_arr_pin = "";}else{
// 	$array = [
// 	array('origem' => 'path0',
// 		'position' => 'latxlong',
// 		'div' => '#imgvaranda',
// 		'tooltip' => 'varanda',
// 		'audio' => 'aud_path0',
// 		'tipo' => 'image'
// 		),
// 		'sphere' => $vem_arr_sph ,
// 		'pin' => $vem_arr_pin
// 	];

// 	$vem_arr_0 = implode(',',$tst_arr);
// 	echo $vem_arr_0;
// }

// for ($pin_cont = 0; $pin_cont < $max; $pin_cont++) {
	// foreach($esfera as $i => $item) {
	// 	$key_sphere = array_search($esfera[$i], $esfera);
	// 	if ( isset($value_intern) && ( $value_intern == $esfera[$key_sphere] ) ) {
	// 		echo "esfera: " . $key_sphere . " - ";
	// 		echo "A esfera: ". $esfera[$key_sphere] . " possui o(s) pino(s): " . $value_intern ."<br>";
	// 	}
	// }
	// echo "<br>";
// }


// print_r($tst_arr);
// echo "<br><br>";
// $array = ['sphere','caminho_img'];
// 	print_r($array);

// $keys = array_keys($array);
// 	echo $keys[1];

// $esfera = [
// 	'path0','path1','path2','path3'
// ];
// // print_r($esfera);
// $pin = [
// 	array
// 	(
// 		'origem' => 'path0',
// 		'position' => 'latxlong',
// 		'div' => '#imgvaranda',
// 		'tooltip' => 'varanda',
// 		'audio' => 'aud_path0',
// 		'tipo' => 'image'
// 	),
// 	array
// 	(
// 		'origem' => 'path1',
// 		'position' => 'latxlong',
// 		'div' => '#audteto',
// 		'tooltip' => 'teto',
// 		'audio' => 'aud_path1',
// 		'tipo' => 'audio'
// 	),
// ];
// print_r($pin);

// COMO SUBIR PRO BANCO TODO ESSE ARRAY MULTIDIMENSIONAL
// echo implode(',',array_column($pin,5  ) );


// $pin = implode(',',$pin[1]);
// echo $pin;

// foreach ($arrN as $value) {
// 	echo $value;
// }

// $testeim = implode(',', array_map(function ($entry) {
// 	// foreach($pin as $i => $item) {
// 		// $key_sphere = array_search($pin[$i], $pin);
// 		return $entry['tipo'];
// 	// }
// }, $pin));
// echo $testeim;
// pega o resultado do banco sobre os albuns
// $pin_n = explode(',', $pin[1]['tipo']); // transforma a string em array.
// echo $pin_n[0];
// array qye vai receber o resultado logo mais.
// pego o array, corta e quebra
// foreach($pin[0] as $key=>$item){
// echo $key ." - ". $item . "<br>";
// $desm = implode(',',$pin[0]);
// $desmk = implode( ',', array_keys($pin[0]) );
// }



// "<br>"
// $array0 = [
// 	'path0','path1','path2','path3'
// ];

// $array1 = [
// 	'aud0','aud1','aud2','aud3'
// ];

	// DEU CERTO  V
// foreach($array0 as $i => $item) {
// 	$key = array_search($array0[$i], $array0);
// 	echo "Chave: " . $key . " - correspondente ao: " . $array1[$key] . "<br>";
// }
	// DEU CERTO TAMBEM v
// $array1 = [
// 	'latlong' => array('LATxLONG0','LATxLONG1','LATxLONG2','LATxLONG3'),
// 	'sphere' => array('path0','path1','path2','path3')
// ];

// foreach($array1['latlong'] as $i => $item) {
// 	$key = array_search($array1['latlong'][$i], $array1['latlong']);
// 	// echo "LATxLONG: " . $key . " - correspondente ao pino para a esfera: " . $array1['sphere'][$key] . "<br>";
// 	echo "A " . $key ."° " . "( " .$array1['latlong'][$key] ." )" . " - correspondente ao pino para a esfera: " . $array1['sphere'][$key] . "<br>";
// }