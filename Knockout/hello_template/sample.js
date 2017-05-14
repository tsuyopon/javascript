window.onload = function() {
    var viewModel = {
        myModel: {
            message: 'Hello Template!!'
        }
    };

    ko.applyBindings(viewModel);
};
