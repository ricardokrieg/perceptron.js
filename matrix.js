var Matrix = $.Class.create({
	initialize: function(){},

	dot: function(a, b){
		if (a.length != b.length){
			return 0;
		}

		r = 0;
		for (__i in a){
			r += a[__i]*b[__i]
		}

		return r;
	},

	dot_scalar: function(n, a){
		r = new Array();
		for (__i in a){
			r.push(a[__i]*n);
		}

		return r;
	},

	sum: function(a, b){
		if (a.length != b.length){
			return 0;
		}

		r = new Array();
		for (__i in a){
			r.push(a[__i]+b[__i]);
		}

		return r;
	}
});