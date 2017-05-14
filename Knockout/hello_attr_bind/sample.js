window.onload = function() {
    var ViewModel = function() {
        this.param = {
            href: 'http://www.google.co.jp',
            title: 'Google'
        };
    };

    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
};
