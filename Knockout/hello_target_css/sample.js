window.onload = function() {
    var ViewModel = function() {
        this.param = {
            error: true,
            italic: true
        };
    };

    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
};
