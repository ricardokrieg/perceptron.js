var inputs = null;
var w = null;

function load_w(){
	w = new Array(4);

	w = $('#synaptic_weights').val().split(';');
}

function load_inputs(){
	inputs = $('#inputs').val().split('\n');
	for (i=0; i<inputs.length; ++i){
		inputs[i] = inputs[i].split(';');
	}
}

function run(){
	for (i in inputs){
		$('#output').append('Input: '+inputs[i]);
		$('#output').append('<br>Output: '+rna.sinal(matrix.dot(inputs[i], w))+'<br><br>');
	}
}

$(document).ready(function(){
	$('#lnk_run').click(function(e){
		e.preventDefault();
		run();
	});

	matrix = new Matrix();
	rna = new RNA();

	load_w();
	load_inputs();
});