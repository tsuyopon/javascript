window.onload = function() {
    var ViewModel = function() {
        this.cssClass = 'error italic'
    };

    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
};
