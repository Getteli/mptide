<?php
	$file_name = $_GET['name'];
	$folder = "usuario";
	$path = getcwd() .DIRECTORY_SEPARATOR. $folder;
	$file = $path .DIRECTORY_SEPARATOR. $file_name;
	unlink($file);
	echo "Arquivo excluido! <a href='../../index.php'>Clique para continuar</a>";