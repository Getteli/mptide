// aqui fica as divs/conteudo e etc que ERAM do HTML
	// div id progress
	var div_progress = document.createElement("div");                      // Create a span
	div_progress.setAttribute("id", "progress");                           // Create id to span
	document.getElementById('ps_mpt_template').appendChild(div_progress);  // Append span to <body>

	//div cover E dentro h3 img CARREGANDO...
	var cover_carregando_html = document.createElement("div");              // Create a span
	cover_carregando_html.classList.add('cover_mpt_ide');                   // Create class to span

	var h3_carregando = document.createElement("h3");                // Create a span
	h3_carregando.classList.add('txt_load');                         // Create class to span

	var img_carregando = document.createElement("img");              // Create a span
	img_carregando.src = "_assets/_img/logotipo_mpt_negat.png"       // add src
	img_carregando.classList.add('img_load');                        // Create class to span

	var text_h3 = document.createTextNode("CARREGANDO...");                // Create a text
	h3_carregando.appendChild(text_h3);                                    // Append the text to span
	h3_carregando.appendChild(img_carregando);                             // Append the text to span

	cover_carregando_html.appendChild(h3_carregando);  // Append span to <body>

	document.getElementById('ps_mpt_template').appendChild(cover_carregando_html);  // Append span to <body>

	// btn VR no html
	var btn_vr_html = document.createElement("button");                           // Create a span
	btn_vr_html.classList.add('btn');                                             // Create class to span
	btn_vr_html.classList.add('btn-vr');                                          // Create class to span
	btn_vr_html.setAttribute("id", "btn-vr");                                     // Create id to span
	btn_vr_html.setAttribute("disabled", "disabled");                             // Create id to span
	btn_vr_html.setAttribute("title", "Modo VR desativado");                      // Create id to span
	document.getElementById('ps_mpt_template').appendChild(btn_vr_html);          // Append span to <body>

	// btn ACESSIBILIDADE no html
	var btn_acc_html = document.createElement("button");                          // Create a span
	btn_acc_html.classList.add('btn');                                            // Create class to span
	btn_acc_html.classList.add('btn-acess');                                      // Create class to span
	btn_acc_html.setAttribute("id", "btn-acess");                                 // Create id to span
	btn_acc_html.setAttribute("title", "Clique para ativar acessibilidade");      // Create id to span
	document.getElementById('ps_mpt_template').appendChild(btn_acc_html);         // Append span to <body>

	// SPAN TOOLTIP html
	var span_tooltip_html = document.createElement("span");                        // Create a span
	span_tooltip_html.setAttribute("id", "tooltip-span");                          // Create id to spanpan
	document.getElementById('ps_mpt_template').appendChild(span_tooltip_html);     // Append span to <body>

	// MODAL DE ACESSIBILIDADE HTML
	var div_modal_acc_html = document.createElement("div");                        // Create a span
	div_modal_acc_html.classList.add('modal-content');                             // Create class to span
	div_modal_acc_html.setAttribute("id", "modal_acess");                          // Create id to span

	var audio_acc_html = document.createElement("audio");                        // Create a span
	audio_acc_html.setAttribute("id", "aud_acess_inicio");                       // Create id to span

	var audio_src_acc_html = document.createElement("source");                        // Create a span
	audio_src_acc_html.src = "_assets/_img/acessibilidade.mp3";                       // Create id to span
	audio_src_acc_html.setAttribute("type", "audio/mpeg");

	var audio_src2_acc_html = document.createElement("source");                        // Create a span
	audio_src2_acc_html.src = "_assets/_img/acessibilidade.ogg";                       // Create id to span
	audio_src2_acc_html.setAttribute("type", "audio/ogg");

	audio_acc_html.appendChild(audio_src_acc_html);     // Append span to <body>
	audio_acc_html.appendChild(audio_src2_acc_html);    // Append span to <body>

	div_modal_acc_html.appendChild(audio_acc_html);     // Append span to <body>

	var span_close_acc_html = document.createElement("span");     // Create a span
	span_close_acc_html.classList.add('close');                   // Create class to span
	span_close_acc_html.setAttribute("id", "btn_acess_x");        // Create id to span
	span_close_acc_html.innerHTML = "&times";

	div_modal_acc_html.appendChild(span_close_acc_html);     // Append span to <body>

	var p_acc_html = document.createElement("p");     // Create a span
	p_acc_html.innerHTML = "Olá bem vindo ao modo de acessibilidade do 360. Serei sua guia por este ambiente, que tal? Ao concordar, a cada esfera que entrar eu vou descrever a casa para você saber como ela é. Se passar por uma seta eu vibrarei o seu dispositivo para saber que está em cima dela. Clique na seta para mudar a esfera,( ou caso use um óculos VR espere em cima da seta). Vamos começar?";

	div_modal_acc_html.appendChild(p_acc_html);     // Append span to <body>

	var footer_acc_html = document.createElement("footer");  // Create a span
	footer_acc_html.classList.add('modal_acess_footer');     // Create class to span

	var footer_btn_acc_html = document.createElement("button");  // Create a span
	footer_btn_acc_html.classList.add('btn_acess_ok');           // Create class to span
	footer_btn_acc_html.setAttribute("id", "btn_acess_ok");      // Create id to span
	footer_btn_acc_html.innerHTML = "ok";

	footer_acc_html.appendChild(footer_btn_acc_html);     // Append span to <body>

	div_modal_acc_html.appendChild(footer_acc_html);     // Append span to <body>

	document.getElementById('ps_mpt_template').appendChild(div_modal_acc_html);    // Append span to <body>

	// CRIAR O MAPA DO HTML AQUI NO JS

	// por enquanto, daqui para cima é conteudo fixo

	// // ACC AUDIO, HTML ESFERA 1
	// var audio_e1_html = document.createElement("audio");   // Create a span
	// audio_e1_html.classList.add('aud_esfera');             // Create class to span
	// audio_e1_html.setAttribute("id", "aud_sala");          // Create id to span

	// var audio_src_e1_html = document.createElement("source");              // Create a span
	// audio_src_e1_html.src = "_assets/_img/sala.mp3";                       // Create id to span
	// audio_src_e1_html.setAttribute("type", "audio/mpeg");

	// var audio_src2_e1_html = document.createElement("source");     // Create a span
	// audio_src2_e1_html.src = "_assets/_img/sala.ogg";              // Create id to span
	// audio_src2_e1_html.setAttribute("type", "audio/ogg");

	// audio_e1_html.appendChild(audio_src_e1_html);
	// audio_e1_html.appendChild(audio_src2_e1_html);

	// document.getElementById('ps_mpt_template').appendChild(audio_e1_html);    // Append span to <body>

	// PINO IMG, ESFERA 1
		// var pin1_e1_html = document.createElement("div");   // Create a span
		// pin1_e1_html.classList.add('desc-container');       // Create class to span
		// pin1_e1_html.setAttribute("id", "imagem-1");        // Create id to span
		// pin1_e1_html.style.display = "none";

		// var conteudo_pin1_e1_html = document.createElement("div");   // Create a span
		// conteudo_pin1_e1_html.classList.add('div-cont');  // Create class to span

		// var a_cont_pin1_e1_html = document.createElement("a");                  // Create a span
		// a_cont_pin1_e1_html.setAttribute("href", "_assets/_img/varanda.jpg");   // Create id to span
		// a_cont_pin1_e1_html.setAttribute("target", "_blank");                   // Create id to span

		// var img_a_pin1_e1_html = document.createElement("img");   // Create a span
		// img_a_pin1_e1_html.src = "_assets/_img/varanda.jpg";         // Create id to span
		// img_a_pin1_e1_html.alt = "Ampla Varanda c/ vista para rua";

		// var title_pin1_e1_html = document.createElement("div");   // Create a span
		// title_pin1_e1_html.classList.add('title');                // Create class to span
		// title_pin1_e1_html.innerHTML = "Ampla Varanda c/ vista para rua";

		// img_a_pin1_e1_html.setAttribute("onclick", "mptide_function_js_openimgmodal('_assets/_img/varanda_2.jpg','Ampla Varanda c/ vista para rua')" ); // coloca onclick no img chamando a funcao para abrir o img com seu src e seu alt

		// var text_pin1_e1_html = document.createElement("div");   // Create a span
		// text_pin1_e1_html.classList.add('text');                // Create class to span
		// text_pin1_e1_html.innerHTML = "Varanda com vista para a rua coronel fulano. Piso em MDF da cor bege, possui Xm² para uma melhor acomodação."

		// a_cont_pin1_e1_html.appendChild(img_a_pin1_e1_html);    // Append span to <body>

		// conteudo_pin1_e1_html.appendChild(a_cont_pin1_e1_html);    // Append span to <body>

		// pin1_e1_html.appendChild(conteudo_pin1_e1_html);    // Append span to <body>

		// pin1_e1_html.appendChild(title_pin1_e1_html);    // Append span to <body>

		// pin1_e1_html.appendChild(text_pin1_e1_html);    // Append span to <body>

		// document.getElementById('ps_mpt_template').appendChild(pin1_e1_html);    // Append span to <body>

//var existentes
var esfera, esfera2, esfera3, esfera4, viewer, progress, progressElement, vmacess, vmvr, v_esf, v_prog, tooltipSpan, btn_acess, btn_acess_ok, btn_acess_x, modal_acess, audio_acess_inicio, audio_esfera, audio_esfera2, audio_esfera3, audio_esfera4, btn_vr;
// valores das var
btn_acess = document.getElementById("btn-acess");
modal_acess = document.getElementById("modal_acess");
btn_acess_x = document.getElementById("btn_acess_x");
btn_acess_ok = document.getElementById("btn_acess_ok");
audio_acess_inicio = document.getElementById('aud_acess_inicio');

audio_esfera = document.getElementsByClassName('aud_esfera')[0];
// audio_esfera2 = document.getElementsByClassName('aud_esfera')[1];
// audio_esfera3 = document.getElementsByClassName('aud_esfera')[2];
// audio_esfera4 = document.getElementsByClassName('aud_esfera')[3];

btn_vr = document.getElementById("btn-vr");

// via JAVASCRIPT, tentarei pegar se é dispositivo movel ou desk
if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ){

	$('#btn-vr').prop('disabled', false);
	$('#btn-vr').prop('title', false);
}

// barra de pogresso
progressElement = document.getElementById('progress');
// texto de carregando
progresstxt = $(".cover_mpt_ide");
// funcoes da barra de progresso
// onEnter = zera a barra e retira a class finish, onProgress = exibi a barra de progresso e quando chegar a 100 coloca a class finish e termina, onOut = após carregar, para o audio de acess, e some devagar o texto de carregando (após sumir, verifica o acessibilidade)
function onEnter ( event ) {
	progresstxt.fadeIn(500);
	progressElement.style.width = 0;
	progressElement.classList.remove( 'finish' );
}

function onOut ( event ) {
	stop_acess();
	$.when(progresstxt.fadeOut(1500)).done(function() {
		comecar_acess();
	});
}

// progresso em andamento
function onProgress ( event ) {
	progress = event.progress.loaded / event.progress.total * 100;
	progressElement.style.width = progress + '%';
	if ( progress === 100 ) {
		progressElement.classList.add( 'finish' );
		if ( progressElement.classList.contains( 'finish' ) ){
			onOut();
		}
	}
}

// primeira esfera
// para usar um video, este é o codigo
// esfera = new PANOLENS.VideoPanorama( '_assets/_img/video360.mp4', {autoplay: true});	
esfera = new PANOLENS.ImagePanorama( '_assets/_img/sala.jpg' );
// zera a barra de progresso (onEnter), inicia o progresso (onProgress) e depois termina o progress com onOut
esfera.addEventListener( 'enter', function(){
	v_esf = 1;
	onEnter();
});
esfera.addEventListener( 'progress', onProgress );
esfera.addEventListener( 'load', function(){
	v_prog = null;
});
esfera.addEventListener( 'enter', function(){
	if (v_prog == 1) {
		onOut();
	}
});
esfera.addEventListener( 'load', function(){
	v_prog = 1;
});

	// cria pinos
	pin_img_e1 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Foto ); //tamanho, imagem do pino
	pin_img_e1.position.set( 4919.98, 125.30, -823.53 ); // posicao do pino, para saber ctrl + click na tela, ver no console
	pin_img_e1.addHoverElement( document.getElementById( 'imagem-1' ), 170 ); //id da div do conteudo, tamanho
	// evento hoverenter e hoverleave, para mostrar um titulo sobre o pino
	pin_img_e1.addEventListener("hoverenter", function(){
		title_pin("Imagem da varanda", "entrou"); // funcao, coloca o titulo que deseja e se o mouse entrou ou saiu do pino
		if (vmacess !== null) {
			$("#tooltip-span").click();
			$("#tooltip-span").vibrate(); // ao passar por cima vibra
		}
	});
	pin_img_e1.addEventListener("hoverleave", function(){
		title_pin("Imagem da varanda", "saiu");
	});
	pin_img_e1.addEventListener("click", function(){
		if (vmacess !== null) {
			$("#tooltip-span").click();
			$("#tooltip-span").vibrate("long");
		}
	});

	// pin_map_e1 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
	// pin_map_e1.position.set( -20.46, -245.00, -4989.30 );
	// pin_map_e1.addHoverElement( document.getElementById( 'mapeamento-1' ), 170 );
	// pin_map_e1.addEventListener("hoverenter", function(){
	// 	title_pin("Mapa", "entrou");
	// 	if (vmacess !== null) {
	// 		$("#tooltip-span").click();
	// 		$("#tooltip-span").vibrate(); // ao passar por cima vibra
	// 	}
	// });
	// pin_map_e1.addEventListener("hoverleave", function(){
	// 	title_pin("Mapa", "saiu");
	// });
	// // ao clicar a vibração será mais forte
	// pin_map_e1.addEventListener("click", function(){
	// 	if (vmacess != null) {
	// 		$("#tooltip-span").click();
	// 		$("#tooltip-span").vibrate("long");
	// 	}
	// });


	// pin_aud_e1 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Audio );
	// pin_aud_e1.position.set( 2545.37, 3098.26, -2975.31 );
	// pin_aud_e1.addHoverElement( document.getElementById( 'audio-1' ), 170 );
	// pin_aud_e1.addEventListener("hoverenter", function(){
	// 	title_pin("áudio sobre o teto", "entrou");
	// 	if (vmacess != null) {
	// 		$("#tooltip-span").click();
	// 		$("#tooltip-span").vibrate(); // ao passar por cima vibra
	// 	}
	// });
	// pin_aud_e1.addEventListener("hoverleave", function(){
	// 	title_pin("Áudio sobre o teto", "saiu");
	// });
	// pin_aud_e1.addEventListener("click", function(){
	// 	if (vmacess != null) {
	// 		$("#tooltip-span").click();
	// 		$("#tooltip-span").vibrate("long");
	// 	}
	// });

// segunda esfera
esfera2 = new PANOLENS.ImagePanorama( '_assets/_img/cozinha.jpg' );
esfera2.addEventListener( 'enter', function(){
	v_esf = 2;
	onEnter();
});
esfera2.addEventListener( 'progress', onProgress );
esfera2.addEventListener( 'load', function(){
	v_prog = null;
});
esfera2.addEventListener( 'enter', function(){
	if (v_prog == 1) {
		onOut();
	}
});
esfera2.addEventListener( 'load', function(){
	v_prog = 1;
});

	// cria pinos
	// pin_inf_e2 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
	// pin_inf_e2.position.set( 1309.44, -2970.10, 3798.00 );
	// pin_inf_e2.addHoverText( 'Um fogão Cooktop embutido de 4 bocas, com um designer esbanjado e acabamento chromado.', 100 );
	// pin_inf_e2.addEventListener("hoverenter", function(){
	// 	title_pin("Explicação sobre o fogão", "entrou");
	// 	if (vmacess != null) {
	// 		$("#tooltip-span").click();
	// 		$("#tooltip-span").vibrate(); // ao passar por cima vibra
	// 	}
	// });
	// pin_inf_e2.addEventListener("hoverleave", function(){
	// 	title_pin("Explicação sobre o fogão", "saiu");
	// });
	// pin_inf_e2.addEventListener("click", function(){
	// 	if (vmacess != null) {
	// 		$("#tooltip-span").click();
	// 		$("#tooltip-span").vibrate("long");
	// 	}
	// });

// terceira esfera
esfera3 = new PANOLENS.ImagePanorama( '_assets/_img/quarto.png' );
esfera3.addEventListener( 'enter', function(){
	v_esf = 3;
	onEnter();
});
esfera3.addEventListener( 'progress', onProgress );
esfera3.addEventListener( 'load', function(){
	v_prog = null;
});
esfera3.addEventListener( 'enter', function(){
	if (v_prog == 1) {
		onOut();
	}
});
esfera3.addEventListener( 'load', function(){
	v_prog = 1;
});

// quarta esfera
esfera4 = new PANOLENS.ImagePanorama( '_assets/_img/banheiro.jpg' );
esfera4.addEventListener( 'enter', function(){
	v_esf = 4;
	onEnter();
});
esfera4.addEventListener( 'progress', onProgress );
esfera4.addEventListener( 'load', function(){
	v_prog = null;
});
esfera4.addEventListener( 'enter', function(){
	if (v_prog == 1) {
		onOut();
	}
});
esfera4.addEventListener( 'load', function(){
	v_prog = 1;
});

	// cria pinos
	// pin_vid_e4 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Video );
	// pin_vid_e4.position.set( 475.41, -4024.76, -2922.25 );
	// pin_vid_e4.addHoverElement( document.getElementById( 'video-1' ), 170 );
	// pin_vid_e4.addEventListener("hoverenter", function(){
	// 	title_pin("Vídeo sobre a banheira", "entrou");
	// 	if (vmacess != null) {
	// 		$("#tooltip-span").click();
	// 		$("#tooltip-span").vibrate(); // ao passar por cima vibra
	// 	}
	// });
	// pin_vid_e4.addEventListener("hoverleave", function(){
	// 	title_pin("Vídeo sobre a banheira", "saiu");
	// });
	// pin_vid_e4.addEventListener("click", function(){
	// 	if (vmacess != null) {
	// 		$("#tooltip-span").click();
	// 		$("#tooltip-span").vibrate("long");
	// 	}
	// });

// add os pinos e as setas dentro da esfera
// esfera 1
esfera.link( esfera2, new THREE.Vector3( -2749.16, -768.66, -4096.93 ), 350, PANOLENS.DataImage.SetaCima, "Cozinha" ); // onclick, localizacao, imagem, titulo para aparecer ao passar o mouse por icma
esfera.link( esfera3, new THREE.Vector3( -4351.98, -145.90, -2444.49 ), 350, PANOLENS.DataImage.SetaDir, "Quarto" );
esfera.link( esfera4, new THREE.Vector3( -3774.11, -135.75, -3265.08 ), 350, PANOLENS.DataImage.SetaDir, "Banheiro" );
esfera.add( pin_img_e1 );
// esfera.add( pin_map_e1 );
// esfera.add( pin_aud_e1 );

// esfera 2
esfera2.link( esfera, new THREE.Vector3( 1985.87, -1532.80, 4321.70 ), 350, PANOLENS.DataImage.SetaCima, "Sala" );
esfera2.link( esfera3, new THREE.Vector3( -1998.14, -83.72, 4577.85 ), 350, PANOLENS.DataImage.SetaEsq, "Quarto" );
esfera2.link( esfera4, new THREE.Vector3( -4753.31, -642.44, 1378.73 ), 350, PANOLENS.DataImage.SetaCima, "Banheiro" );
// esfera2.add( pin_inf_e2 );

// esfera 3
esfera3.link( esfera, new THREE.Vector3( 4270.45, 222.91, 2575.84 ), 350, PANOLENS.DataImage.SetaEsq, "Sala" );
esfera3.link( esfera2, new THREE.Vector3( 4368.92, -335.50, 2394.88 ), 350, PANOLENS.DataImage.SetaDiaCimaDir, "Cozinha" );

// esfera 4
esfera4.link( esfera2, new THREE.Vector3( -3789.94, -114.17, 3246.89 ), 350, PANOLENS.DataImage.SetaEsq, "Cozinha" );
// esfera4.add( pin_vid_e4 );

// inicia a esfera c suas configuracoes
// se for Apple sem ser desk, vai colocar o btn de setting e sumir com o cardboard
if ( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)  ) {
	$('#btn-vr').css('display', 'none'); //display none no btn cardboard
	viewer = new PANOLENS.Viewer({
		container: document.getElementById('ps_mpt_template'),   // A DOM Element container
		controlBar: true,       // Vsibility of bottom control bar
		controlButtons: ['fullscreen', 'setting', 'video'],     // Buttons array in the control bar. Default to ['fullscreen', 'setting', 'video']
		autoHideControlBar: false,    // Auto hide control bar
		autoHideInfospot: false,     // Auto hide infospots
		horizontalView: false,      // Allow only horizontal camera control
		cameraFov: 70,        // Camera field of view in degree
		reverseDragging: false,     // Reverse orbit control direction
		enableReticle: false,     // Enable reticle for mouseless interaction
		dwellTime: 1200,      // Dwell time for reticle selection in millisecond
		autoReticleSelect: true,    // Auto select a clickable target after dwellTime
		viewIndicator: false,     // Adds an angle view indicator in upper left corner
		indicatorSize: 30,      // Size of View Indicator
		output: 'console'     // Whether and where to output infospot position. Could be 'console' or 'overlay'
	});
}else{
	viewer = new PANOLENS.Viewer({
		container: document.getElementById('ps_mpt_template'),
		controlBar: true,
		controlButtons: ['fullscreen', 'video'],
		autoHideControlBar: false,
		autoHideInfospot: false,
		horizontalView: false,
		cameraFov: 70,
		reverseDragging: false,
		enableReticle: false,
		dwellTime: 1200,
		autoReticleSelect: true,
		viewIndicator: false,
		indicatorSize: 30,
		output: 'console'
	});
} // fim se verifica se e apple p/ modo VR

// add as esferas ao viewer
viewer.add( esfera, esfera2, esfera3, esfera4);

// acessibilidade
btn_acess.onclick = function() {
	if (vmacess == null) {
		modal_acess.style.display = "block";
		audio_acess_inicio.play();
	}else{
		btn_acess.style.backgroundImage = "url('_assets/_img/acess_on.png')";
		btn_acess.title = "Clique para ativar acessibilidade";
		stop_acess();
		// limpa a variavel
		vmacess = null;
	}
}

btn_acess_x.onclick = function() {
	modal_acess.style.display = "none";
	audio_acess_inicio.pause();
	audio_acess_inicio.currentTime = 0;
}

btn_acess_ok.onclick = function() {
	// verifica se esta ativado (se for igual a vazio a variavel), se for vazia entra no modo acessibilidade se nao volta ao normal
	if (vmacess == null) {
		modal_acess.style.display = "none";
		audio_acess_inicio.pause();
		audio_acess_inicio.currentTime = 0;
		btn_acess.style.backgroundImage = "url('_assets/_img/acess_off.png')";
		btn_acess.title = "Clique para desativar acessibilidade";
		// ativado
		vmacess = 1;
		comecar_acess();
	}
}
if( !( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ) ){
	btn_acess.addEventListener("mousemove", function(){
		title_btn(btn_acess.title, "entrou");
	});
	btn_acess.addEventListener("mouseout", function(){
		title_btn(btn_acess.title, "saiu");
	});
}

// play_Acess carrega todos os audios, verifica se o modo acessibilidade esta ativado, se sim entra no swith e verifica qual esfera esta
function play_acess() {
	audio_esfera.load();
	// audio_esfera2.load();
	// audio_esfera3.load();
	// audio_esfera4.load();
	if ( vmacess == 1 ) {
	switch(v_esf) { // verifica qual esfera esta para ativar o audio correto
		case 1:
			audio_esfera.play();
			break;
		// case 2:
		// 	audio_esfera2.play();
		// 	break;
		// case 3:
		// 	audio_esfera3.play();
		// 	break;
		// case 4:
		// 	audio_esfera4.play();
		// 	break;
	}
	}
}

// comecar_acess da 500 milissegundos e inicia o play_acess
function comecar_acess() {
	setTimeout( function () {
		play_acess();
	},500);
}

// funcao q vai parar todos os audios de acessibilidade, parar e zerar o som
function stop_acess() {
	audio_esfera.pause();
		audio_esfera.currentTime = 0;
	// audio_esfera2.pause();
	// 	audio_esfera2.currentTime = 0;
	// audio_esfera3.pause();
	// 	audio_esfera3.currentTime = 0;
	// audio_esfera4.pause();
	// 	audio_esfera4.currentTime = 0;
}

// modo vr
btn_vr.onclick = function() {
	// verifica se esta ativado (se for diferente de vazio a variavel), se for vazia entra no modo VR se nao volta ao normal
	if (vmvr != null) {
		// voltar a img normal
		btn_vr.style.backgroundImage = "url('_assets/_img/vr.png')";
		//muda um pouco o tamanho
		btn_vr.style.width = "44px";
		btn_vr.style.height = "44px";
		btn_vr.style.bottom = "2px";
		btn_vr.style.left = "";
		btn_acess.style.display = "block";
		// control p: normal
		viewer.enableControl( PANOLENS.Controls.ORBIT );
		// mode p: normal
		viewer.enableEffect( PANOLENS.Modes.NORMAL );
		// limpa a variavel
		vmvr = null;
	}else{
		// ao entrar modo vr muda a img
		btn_vr.style.backgroundImage = "url('_assets/_img/back.png')";
		//muda um pouco o tamanho
		btn_vr.style.width = "30px";
		btn_vr.style.height = "30px";
		btn_vr.style.bottom = "6px";
		btn_vr.style.left = "48%";
		btn_acess.style.display = "none";
		// control p: sensor
		viewer.enableControl( PANOLENS.Controls.DEVICEORIENTATION );
		// mode p: cardboard
		viewer.enableEffect( PANOLENS.Modes.CARDBOARD );
		// ativado
		vmvr = 1;
		//se estiver em modo portrait, avisar para virar o celular
		if (window.matchMedia("(orientation: portrait)").matches) {
			var span_aviso = document.createElement("span");              // Create a span
			span_aviso.classList.add('tag_aviso');                        // Create class to span
			span_aviso.setAttribute("id", "spn_aviso");                   // Create id to span
			var text = document.createTextNode("Vire o seu dispositivo"); // Create a text
			span_aviso.appendChild(text);                                 // Append the text to span
			document.body.appendChild(span_aviso);                        // Append span to <body>
			$("#spn_aviso").fadeOut(2500);                                // desaparece em 2500 milis
			setTimeout(function(){ $("#spn_aviso").remove(); }, 3500);
		}
	} // fim else verificar
} // fim funcao modo vr
// via JAVASCRIPT, tentarei pegar se é dispositivo movel ou desk
if( !( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ) ){
	btn_vr.addEventListener("mousemove", function(){
		title_btn("Ativar modo VR", "entrou");
	});
	btn_vr.addEventListener("mouseout", function(){
		title_btn("Ativar modo VR", "saiu");
	});
}


// funcao title_pin, para colocar o titlo em qual pino esta apontando o mouse
function title_pin(text,in_ou) {
	// declara o tooltip-span, que esta no index, escondido
	tooltipSpan = document.getElementById('tooltip-span');
	tooltipSpan_in_out = $("#tooltip-span");

	if (in_ou == "saiu") {

		tooltipSpan_in_out.fadeOut(50);
		tooltipSpan.innerHTML = null;

	}else if (in_ou == "entrou") {

		tooltipSpan.innerHTML = text;
		tooltipSpan_in_out.fadeIn(50);

		window.onmousemove = function (e) {
			var x = e.clientX,
				y = e.clientY;
			tooltipSpan.style.top = (y + 20) + 'px';
			tooltipSpan.style.left = (x + 20) + 'px';
		};

	}
}
// o mesmo que o title_pin, mas para os botões do rodapé, e como está em baixo, o tooltip aparece a cima
function title_btn(text,in_ou) {
	// declara o tooltip-span, que esta no index, escondido
	tooltipSpan = document.getElementById('tooltip-span');
	tooltipSpan_in_out = $("#tooltip-span");

	if (in_ou == "saiu") {

		tooltipSpan_in_out.fadeOut(50);
		tooltipSpan.innerHTML = null;

	}else if (in_ou == "entrou") {

		tooltipSpan.innerHTML = text;
		tooltipSpan_in_out.fadeIn(50);

		window.onmousemove = function (e) {
			var x = e.clientX,
				y = e.clientY;
			tooltipSpan.style.top = (y - 60) + 'px';
			tooltipSpan.style.left = (x + 5) + 'px';
		};
	}
}

// Funcao para abrir o modal da img
function mptide_function_js_openimgmodal(srcimg_pin, altimg_pin) {
	mptide_modal_o.style.display = "block"; // mostrar modal
	mptide_modal_o_img.src = srcimg_pin; // pegar o src da img e por dentro do modal
	mptide_modal_o_caption.innerHTML = altimg_pin // pega o titulo e coloca como caption
}

// Fechar o modal de imagem
mptide_modal_o_close.addEventListener("click", function(){
	mptide_modal_o.style.display = "none";
});