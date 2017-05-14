window.onload = function() {
    var ViewModel = function() {
        this.param = {
            color: 'red',
            fontStyle: 'italic'
        };
    };

    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
};
