<?php
	$nome_arquivo = $_POST['name'];
	$ext = ".js";
	$pasta = "usuario";
	$caminho = getcwd() .DIRECTORY_SEPARATOR. $pasta;
	if ( is_dir( $caminho ) ) {
		// Diretorio existe!
	}else{
		// Diretorio nao existe, entao cria!
		mkdir($pasta,0777,true);
	}
	$caminho_nome = $caminho .DIRECTORY_SEPARATOR. $nome_arquivo . $ext;
	fopen($caminho_nome, 'w');
?>
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
</head>
<body>

	<form action="edit_file.php" method="POST">
		Conteudo do arquivo: <textarea name="edit" cols="100" rows="20"></textarea>
		<input type="hidden" name="name_file" value="<?php echo $caminho_nome ?>">
		<input type="submit" Value="Salvar">
	</form>