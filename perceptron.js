var n_lines = 1;
var n_ins = 3;
var x = null;
var w = new Array(-3.0839, 1.560212, 2.475722, -0.735356);

function load_x(){
	x = new Array(10);
	for (i=0;i<10;++i){
		x[i] = new Array(4);
	}

	x[0][0] = -1;
	x[0][1] = -0.3665;
	x[0][2] = 0.0620;
	x[0][3] = 5.9891;
	x[1][0] = -1;
	x[1][1] = -0.7842;
	x[1][2] = 1.1267;
	x[1][3] = 5.5912;
	x[2][0] = -1;
	x[2][1] = 0.3012;
	x[2][2] = 0.5611;
	x[2][3] = 5.8234;
	x[3][0] = -1;
	x[3][1] = 0.7757;
	x[3][2] = 1.0648;
	x[3][3] = 8.0677;
	x[4][0] = -1;
	x[4][1] = 0.1570;
	x[4][2] = 0.8028;
	x[4][3] = 6.3040;
	x[5][0] = -1;
	x[5][1] = -0.7014;
	x[5][2] = 1.0316;
	x[5][3] = 3.6005;
	x[6][0] = -1;
	x[6][1] = 0.3748;
	x[6][2] = 0.1536;
	x[6][3] = 6.1537;
	x[7][0] = -1;
	x[7][1] = -0.6920;
	x[7][2] = 0.9404;
	x[7][3] = 4.4058;
	x[8][0] = -1;
	x[8][1] = -1.3970;
	x[8][2] = 0.7141;
	x[8][3] = 4.9263;
	x[9][0] = -1;
	x[9][1] = -1.8842;
	x[9][2] = -0.2805;
	x[9][3] = 1.2548;
}

function multi_matrix(a, b){
	if (a.length != b.length){
		console.log('Matrizes com tamanhos diferentes!');
		return 0;
	}

	r = 0;
	for (i in a){
		r += a[i]*b[i]
	}

	return r;
}

function sinal(u){
	if (u >= 0)
		return 1.0;
	else
		return -1.0;
}

$(document).ready(function(){
	console.log('Pesos: '+w);

	load_x();

	for (i in x){
		$('#result').append('Amostra: '+x[i]);
		$('#result').append('<br>Saída: '+sinal(multi_matrix(x[i], w))+'<br><br>');
	}
});