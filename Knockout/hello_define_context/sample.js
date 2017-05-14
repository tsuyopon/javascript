window.onload = function() {
    var viewModel = {
        message: 'root context message',
        subContext: {
            message: 'sub context message'
        }
    };

    ko.applyBindings(viewModel);
};
