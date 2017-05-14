window.onload = function() {
    var ViewModel = function() {
        this.isTrue = true;
        this.isFalse = false;
    };

    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
};
