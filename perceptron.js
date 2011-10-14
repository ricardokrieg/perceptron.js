var inputs;
var outputs;
var synaptic_weights;

function generate_synaptic_weights(){
	synaptic_weights = new Array(inputs[0].length);
	for (i=0; i<synaptic_weights.length; ++i){
		synaptic_weights[i] = Math.random();
	}
}

function load_synaptic_weights(){
	synaptic_weights = $('#synaptic_weights').val().split(';');
}

function load_inputs(container, load_outputs){
	inputs = $(container).val().split('\n');
	outputs = new Array();

	for (i in inputs){
		inputs[i] = inputs[i].split(';');

		if (load_outputs){
			outputs[i] = inputs[i][inputs[i].length-1];
			inputs[i].splice(inputs[i].length-1, 1);
		}
	}
}

function train(){
	load_inputs('#train_inputs', true);
	generate_synaptic_weights();

	epoch = 0;
	error = true;

	do {
		error = false;

		for (i in inputs){
			u = matrix.dot(inputs[i], synaptic_weights);
			y = rna.sinal(u);

			if (y != outputs[i]){
				error = true;
				synaptic_weights = rna.hebb(synaptic_weights, outputs[i], y, inputs[i], 0.5);
			}
		}

		epoch++;
		if (epoch >= 1000)
			break;
	} while (error);

	console.log(epoch);
	console.log(error);
}

function run(){
	for (i in inputs){
		$('#output').append('Input: '+inputs[i]);
		$('#output').append('<br>Output: '+rna.sinal(matrix.dot(inputs[i], synaptic_weights))+'<br><br>');
	}
}

$(document).ready(function(){
	$('#lnk_train').click(function(e){
		e.preventDefault();
		train();
	});
	$('#lnk_run').click(function(e){
		e.preventDefault();
		run();
	});

	matrix = new Matrix();
	rna = new RNA();
});