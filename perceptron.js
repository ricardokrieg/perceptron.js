var n_lines = 1;
var n_ins = 3;
var inputs = null;
var w = new Array(-3.0839, 1.560212, 2.475722, -0.735356);

function load_w(){
	w = new Array(4);

	w = $('#synaptic_weights').val().split(';');
}

function load_inputs(){
	temp_line_inputs = $('#inputs').val().split('\n');
	temp_inputs = temp_line_inputs[0].split(';');

	line_inputs = temp_line_inputs.length;
	n_inputs = temp_inputs.length;

	inputs = new Array(line_inputs);
	for (i=0;i<line_inputs;++i){
		inputs[i] = new Array(n_inputs);
	}
	for (i=0; i<inputs.length; i++){
		inputs[i] = temp_line_inputs[i].split(';');
	}

	console.log(inputs);
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