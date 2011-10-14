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
	},

	dot_scalar: function(n, a){
		r = new Array();
		for (i in a){
			r.push(a[i]*n);
		}

		return r;
	},

	sum: function(a, b){
		if (a.length != b.length){
			return 0;
		}

		r = new Array();
		for (i in a){
			r.push(a[i]+b[i]);
		}

		return r;
	}
});