<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title>MY PERSONAL TOUR - IDE</title>
	<meta charset="utf-8" />
	<!-- favicon -->
	<link rel="apple-touch-icon" sizes="76x76" href="_assets/_img/favicon.png">
	<link rel="icon" type="image/png" href="_assets/_img/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<!-- og tag share facebook -->
	<meta property="og:locale" content="pt_BR">
	<meta property="og:url" content="index.html">
	<meta property="og:title" content="MPT">
	<meta property="og:site_name" content="MPT">
	<meta property="og:description" content="My Personal Tour - 360">
	<meta property="og:image" content="_assets/_img/favicon.png">
	<meta property="og:image:secure_url" content="_assets/_img/favicon.png">
	<meta property="og:image:type" content="image/jpeg">
	<meta property="og:image:width" content="150"> <!-- pixel -->
	<meta property="og:image:height" content="150"> <!-- pixel -->
	<meta property="og:type" content="website">
	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
	<!-- mobile -->
	<meta name="apple-mobile-web-app-capable" content="yes"> 
	<meta name="mobile-web-app-capable" content="yes">
	<style type="text/css">
		.form-control{
			display: inline-block;
			margin-right: 10px;
		}
		#sphere{
			background-color: blue;
			width: 100px;
			height: 100px;
		}
		.pin{
			margin: 10px 0 10px 0px;
			border:2px solid blue;
		}
	</style>
	<script src="_assets/_js/jquery-3.1.1.min.js"></script>
</head>
<body>
<!-- 
	<form action="_assets/_php/create_file.php" method="POST">
		Nome do arquivo: <input type="text" name="name" />
		<input type="submit" Value="Criar">
	</form>
	<h2>ARQUIVOS</h2>
	<?php
		$full_path = "./_assets/_php/usuario";
		$dir = @opendir($full_path) or die ("Diretorio nao existe ou ative para poder visualizar");
		while ( $file = readdir($dir) ) {
			if ( $file == "." || $file == ".." ) {
				continue;
			}
			echo
			"<a href='_assets/_php/usuario/".$file."' target='_blank'>".$file."</a>......
			<a href='_assets/_php/edit.php?name=".$file."' target='_blank'>Editar</a>......
			<a href='_assets/_php/delete.php?name=".$file."' target='_blank'>Excluir</a><br>";
		}
		closedir($dir);
	?> -->

<!-- ACIMA ESTA O TESTE DE CRIAR ARQUIVO, EDITAR E EXCLUIR -->


<form action="tst.php" method="POST" id="form">
	<button type="button" id="create_sph" title="gerar esfera">+ ESFERA</button><br/>
	<h3>Esferas</h3>
	<div id="box"></div>
	<!-- <div id="sphere"></div><br/> -->
	<!-- <h3>Pinos</h3> -->
	<!-- <div id="pins"></div><br/> -->
	<input type="submit" Value="Criar">
</form>


<script type="text/javascript" >
$( document ).ready(function() {
	// esfera
	var i_s = 0;
	var i_p = 0;
	var form = document.getElementById('box');
	var create_sph = document.getElementById('create_sph');
	create_sph.onclick = function() {
		// cria input para esfera
		var x_sph = document.createElement('input');
		var x = document.createElement('input');
		var div = document.createElement('div');
		div.setAttribute('id', 'box_sphere'+i_s);

		x_sph.setAttribute('type', 'text');
		x_sph.setAttribute('readonly', '');
		x_sph.setAttribute('name', 'sphere['+i_s+'][id]');
		x_sph.setAttribute('value', 'sphere'+i_s);

		x.setAttribute('type', 'text');
		x.setAttribute('name', 'sphere['+i_s+'][name]');
		x.setAttribute('id', 'sphere'+i_s);
		x.setAttribute('class', 'form-control');
		x.setAttribute('placeholder', 'ESFERA');
		// crio btn add pino a esfera
		var b = document.createElement('button');
		b.setAttribute('type', 'button');
		b.setAttribute('class', 'create_pin');
		b.setAttribute('title', 'gerar pino');
		b.setAttribute('value', 'sphere'+i_s);
		b.innerHTML = "+ PINO";
		form.appendChild(div);
		div.appendChild(x_sph);
		div.appendChild(x);
		div.appendChild(b);

	var alvo = document.getElementsByClassName('create_pin')[i_s].value;
	document.getElementsByClassName('create_pin')[i_s].addEventListener("click", function(){
		var c = document.createElement('input'); // origem do pino, qual esfera ele pertence
		var cpin = document.createElement('input'); // pino

		var divc = document.createElement('div');
		divc.setAttribute('id', 'box_pins'+i_p);

		c.setAttribute('type', 'text');
		c.setAttribute('readonly', '');
		c.setAttribute('name', 'pin['+i_p+'][origem]');
		c.setAttribute('class', 'form-control');
		c.setAttribute('class', 'pin');
		c.setAttribute('placeholder', 'ORIGEM');
		c.setAttribute('value', alvo );

		cpin.setAttribute('type', 'text');
		// cpin.setAttribute('name', 'pin["pin'+i_p+'"]["tipo"]');
		cpin.setAttribute('name', 'pin['+i_p+'][tipo]');
		cpin.setAttribute('class', 'form-control');
		cpin.setAttribute('class', 'pin');
		cpin.setAttribute('placeholder', 'PIN');

		div.appendChild(divc);
		divc.appendChild(c);
		divc.appendChild(cpin);
		i_p++;
	});
	
	i_s++;
	}
});
</script>