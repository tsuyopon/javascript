window.onload = function() {
    var viewModel = {
        isTrue: false,
        isFalse: true,
		myvalue: function(value){
			if(value > 100 ){
				return "100より大きい";
			}
			return "100未満";
		}
    };

    ko.applyBindings(viewModel);
};
