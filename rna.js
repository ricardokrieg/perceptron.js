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
	}
});