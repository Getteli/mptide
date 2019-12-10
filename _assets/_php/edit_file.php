<?php
	$img_acss_on = '"'. "url('_assets/_img/acess_off.png')" . '"';
	$img_acss_off = '"'. "url('_assets/_img/acess_on.png')" . '"';
	$img_vr_on = '"'. "url('_assets/_img/vr.png')" . '"';
	$img_vr_off = '"'. "url('_assets/_img/back.png')" . '"';
	$padrao = "

// CONT_FIXED
//var existentes
var mptide_container = document.getElementById('mptide_container'),
mptide_viewer, mptide_progress, mptide_progressElement, mptide_progresstxt, mptide_watermark, mptide_vmacess, mptide_vmvr, mptide_v_esf, mptide_v_prog, mptide_tooltipSpan, mptide_tooltipSpan_in_out, mptide_btn_acess, mptide_btn_acess_ok, mptide_btn_acess_x, mptide_modal_acess, mptide_audio_acess_inicio, mptide_btn_vr, mptide_modal_o, mptide_modal_o_close, mptide_modal_o_img, mptide_modal_o_caption, mptide_blueprint_map;
// valores das var
mptide_btn_acess = document.getElementById('mptide_btn_acess'); // btn acessibilidade
mptide_modal_acess = document.getElementById('mptide_modal_acess'); // modal da acessibilidade
mptide_btn_acess_x = document.getElementById('mptide_modal_acess_close'); // fechar modal da acessibilidade
mptide_btn_acess_ok = document.getElementById('mptide_modal_acess_btn_ok'); // btn ok modal acessibilidade
mptide_audio_acess_inicio = document.getElementById('mptide_aud_acess'); // audio da acessibilidade
mptide_watermark = document.getElementById('mptide_watermark'); // marca d'água
mptide_blueprint_map = document.getElementById('mptide_bp_map'); // mapa da planta baixa
// modal img
mptide_modal_o = document.getElementById('mptide_modal_o');
mptide_modal_o_close = document.getElementById('mptide_modal_o_close');
mptide_modal_o_img = document.getElementById('mptide_modal_o_img');
mptide_modal_o_caption = document.getElementById('mptide_modal_o_caption');
// audio acessibilidade das esferas
audio_esfera_control = document.querySelectorAll('.mptide_aud_sph');
// btn do cardboard
mptide_btn_vr = document.getElementById('mptide_btn_vr');

// barra de pogresso
mptide_progressElement = document.getElementById('mptide_progress');
// texto de carregando
mptide_progresstxt = $('.mptide_cover');

// funcoes da barra de progresso
// mptide_function_js_onenter = zera a barra e retira a class mptide_progress_finish, mptide_function_js_onprogress = exibi a barra de progresso e quando chegar a 100 coloca a class mptide_progress_finish e termina, mptide_function_js_onout = após carregar, para o audio de acess, e some devagar o texto de carregando (após sumir, verifica o acessibilidade)
function mptide_function_js_onenter ( event ) {
	mptide_progresstxt.fadeIn(500);
	mptide_progressElement.style.width = 0;
	mptide_progressElement.classList.remove( 'mptide_progress_finish' );
}

function mptide_function_js_onout ( event ) {
	mptide_function_js_stop_acess();
	$.when(mptide_progresstxt.fadeOut(1500)).done(function() {
		mptide_function_js_comecar_acess();
	});
}

// funcao para sair do mapa
$('#mptide_watermark').bind('touchstart touchend', function(e) {
	e.preventDefault();
	$(this).toggleClass('mptide_bp_map_hover');
});

// progresso em andamento
function mptide_function_js_onprogress ( event ) {
	mptide_progress = event.progress.loaded / event.progress.total * 100;
	mptide_progressElement.style.width = mptide_progress + '%';
	if ( mptide_progress === 100 ) {
		mptide_progressElement.classList.add( 'mptide_progress_finish' );
		if ( mptide_progressElement.classList.contains( 'mptide_progress_finish' ) ){
			mptide_function_js_onout();
		}
	}
}

// funcao mptide_function_js_tooltip_showoff, para colocar o titlo em qual pino esta apontando o mouse
function mptide_function_js_tooltip_showoff(text,in_ou,ifbtn) {
	// declara o tooltip-span, que esta no index, escondido
	mptide_tooltipSpan = document.getElementById('mptide_tooltip_span');
	mptide_tooltipSpan_in_out = $('#mptide_tooltip_span');

	if (in_ou == 'saiu') {

		mptide_tooltipSpan_in_out.fadeOut(20);
		mptide_tooltipSpan.innerHTML = null;

	}else if (in_ou == 'entrou') {

		mptide_tooltipSpan.innerHTML = text;
		mptide_tooltipSpan_in_out.fadeIn(50);

		window.onmousemove = function (e) {
			var x = e.clientX,
				y = e.clientY;
			if (ifbtn) {
				mptide_tooltipSpan.style.top = (y - 60) + 'px';
				mptide_tooltipSpan.style.left = (x + 5) + 'px';
			}else{
				mptide_tooltipSpan.style.top = (y + 20) + 'px';
				mptide_tooltipSpan.style.left = (x + 20) + 'px';
			}
		};

	}
}

// Funcao para abrir o modal da img
function mptide_function_js_openimgmodal(srcimg_pin, altimg_pin) {
	mptide_modal_o.style.display = 'block'; // mostrar modal
	mptide_modal_o_img.src = srcimg_pin; // pegar o src da img e por dentro do modal
	mptide_modal_o_caption.innerHTML = altimg_pin // pega o titulo e coloca como caption
}

// Fechar o modal de imagem
mptide_modal_o_close.onclick = function() {
	mptide_modal_o.style.display = 'none';
}

// modo acessibilidade
mptide_btn_acess.onclick = function() {
	if (mptide_vmacess == null) {
		mptide_modal_acess.style.display = 'block';
		mptide_audio_acess_inicio.play();
	}else{
		mptide_btn_acess.style.backgroundImage = ".$img_acss_off.";
		mptide_btn_acess.title = 'Clique para ativar acessibilidade';
		mptide_function_js_stop_acess();
		// limpa a variavel
		mptide_vmacess = null;
	}
}
// fecha o modal de acessibilidade
mptide_btn_acess_x.onclick = function() {
	mptide_modal_acess.style.display = 'none';
	mptide_audio_acess_inicio.pause();
	mptide_audio_acess_inicio.currentTime = 0;
}
// ativa o modo de acessibilidade
mptide_btn_acess_ok.onclick = function() {
	// verifica se esta ativado (se for igual a vazio a variavel), se for vazia entra no modo acessibilidade se nao volta ao normal
	if (mptide_vmacess == null) {
		mptide_modal_acess.style.display = 'none';
		mptide_audio_acess_inicio.pause();
		mptide_audio_acess_inicio.currentTime = 0;
		mptide_btn_acess.style.backgroundImage = ".$img_acss_on.";
		mptide_btn_acess.title = 'Clique para desativar acessibilidade';
		// ativado
		mptide_vmacess = 1;
		mptide_function_js_comecar_acess();
	}
}

// mptide_function_js_play_acess carrega todos os audios, verifica se o modo acessibilidade esta ativado, se sim entra no swith e verifica qual esfera esta
function mptide_function_js_play_acess() {
	for (var i = 0; i < audio_esfera_control.length; i++) {
		audio_esfera_control[i].load();
		if ( mptide_vmacess == 1 ) {
			if ( mptide_v_esf == i ) { // verifica qual esfera esta para ativar o audio correto
				audio_esfera_control[i].play();
			} // fim if
		} // fim if
	} // fim for
} // fim mptide_function_js_play_acess

// mptide_function_js_comecar_acess da 500 milissegundos e inicia o mptide_function_js_play_acess
function mptide_function_js_comecar_acess() {
	setTimeout( function () {
		mptide_function_js_play_acess();
	},500);
}

// funcao q vai parar todos os audios de acessibilidade, parar e zerar o som
function mptide_function_js_stop_acess() {
	for (var i = 0; i < audio_esfera_control.length; i++) {
		audio_esfera_control[i].pause();
		audio_esfera_control[i].currentTime = 0;
	}
}

// modo vr
mptide_btn_vr.onclick = function() {
	// verifica se esta ativado (se for diferente de vazio a variavel), se for vazia entra no modo VR se nao volta ao normal
	if (mptide_vmvr != null) {
		// voltar a img normal
		mptide_btn_vr.style.backgroundImage = ".$img_vr_on.";
		//muda um pouco o tamanho
		mptide_btn_vr.style.width = '44px';
		mptide_btn_vr.style.height = '44px';
		mptide_btn_vr.style.bottom = '2px';
		mptide_btn_vr.style.left = '';
		mptide_watermark.style.opacity = 1;
		mptide_btn_acess.style.opacity = 1;
		mptide_blueprint_map.style.opacity = 1;
		// control p: normal
		mptide_viewer.enableControl( PANOLENS.Controls.ORBIT );
		// mode p: normal
		mptide_viewer.enableEffect( PANOLENS.Modes.NORMAL );
		// limpa a variavel
		mptide_vmvr = null;
	}else{
		// ao entrar modo vr muda a img
		mptide_btn_vr.style.backgroundImage = ".$img_vr_off.";
		//muda um pouco o tamanho
		mptide_btn_vr.style.width = '30px';
		mptide_btn_vr.style.height = '30px';
		mptide_btn_vr.style.bottom = '6px';
		mptide_btn_vr.style.left = '48%';
		mptide_watermark.style.opacity = 0.1;
		mptide_btn_acess.style.opacity = 0;
		mptide_blueprint_map.style.opacity = 0;
		// control p: sensor
		mptide_viewer.enableControl( PANOLENS.Controls.DEVICEORIENTATION );
		// mode p: cardboard
		mptide_viewer.enableEffect( PANOLENS.Modes.CARDBOARD );
		// ativado
		mptide_vmvr = 1;
		//se estiver em modo portrait, avisar para virar o celular (mostro o span, e desapareco)
		if (window.matchMedia('(orientation: portrait)').matches) {
			$('#mptide_tag_aviso').fadeIn(10); // aparece
			$('#mptide_tag_aviso').fadeOut(5000); // desaparece
		}
	} // fim else verificar
} // fim funcao modo vr

/* Via JAVASCRIPT, tentarei pegar se é dispositivo movel ou desk
se for pc (portanto diferente de qualquer outro dispositivo), aparece o titulo nos btns do rodape */
if( !( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ) ){
	// btn modo realidade virtual
	mptide_btn_vr.addEventListener('mousemove', function(){
		mptide_function_js_tooltip_showoff('Ativar modo VR', 'entrou', true);
	});
	mptide_btn_vr.addEventListener('mouseout', function(){
		mptide_function_js_tooltip_showoff('Ativar modo VR', 'saiu', true);
	});
	// btn modo acessibilidade
	mptide_btn_acess.addEventListener('mousemove', function(){
		mptide_function_js_tooltip_showoff(mptide_btn_acess.title, 'entrou', true);
	});
	mptide_btn_acess.addEventListener('mouseout', function(){
		mptide_function_js_tooltip_showoff(mptide_btn_acess.title, 'saiu', true);
	});
}else{
	$('#mptide_btn_vr').prop('disabled', false);
	$('#mptide_btn_vr').prop('title', false);
}

// function com as opcoes do user sobre os 'plugins' do mpt
function mptide_function_js_options_user(os_bm,os_mvr,os_ma) {
	// blueprint map
	if (os_bm) {  }else{ mptide_blueprint_map.style.display = 'none' }
	// modo vr
	if (os_mvr) {  }else{ mptide_btn_vr.style.display = 'none' }
	// modo acess
	if (os_ma) {  }else{ mptide_btn_acess.style.display = 'none' }
}

// FIM CONT_FIXED

	";

	$caminho_nome = $_POST['name_file'];
	$edit = $_POST['edit'];
	$file = fopen($caminho_nome, 'w');
	fwrite($file, $padrao . $edit);
	fclose($file);

	echo "Arquivo salvo! <a href='../../index.php'>Clique para continuar</a>";