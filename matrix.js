var Matrix = $.Class.create({
	initialize: function(){},

	dot: function(a, b){
		if (a.length != b.length){
			return 0;
		}

		r = 0;
		for (i in a){
			r += a[i]*b[i]
		}

		return r;
	}
});