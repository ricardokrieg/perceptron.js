var inputs;
var synaptic_weights;

function load_synaptic_weights(){
	synaptic_weights = $('#synaptic_weights').val().split(';');
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
		$('#output').append('<br>Output: '+rna.sinal(matrix.dot(inputs[i], synaptic_weights))+'<br><br>');
	}
}

$(document).ready(function(){
	$('#lnk_run').click(function(e){
		e.preventDefault();
		run();
	});

	matrix = new Matrix();
	rna = new RNA();

	load_synaptic_weights();
	load_inputs();
});