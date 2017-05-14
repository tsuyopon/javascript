window.onload = function() {
    var ViewModel = function() {
        this.message = '<b>binding</b>';
    };

    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
};
