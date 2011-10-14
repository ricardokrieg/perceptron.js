var RNA = $.Class.create({
	initialize: function(){},

	degrau: function(u){
		if (u >= 0)
			return 1.0;
		else
			return 0;
	},

	sinal: function(u){
		if (u >= 0)
			return 1.0;
		else
			return -1.0;
	},

	hebb: function(synaptic_weights, output, y, input, n){
		return matrix.sum(synaptic_weights, matrix.dot_scalar(n*(output-y), input));
	}
});