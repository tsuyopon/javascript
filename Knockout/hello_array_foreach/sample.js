window.onload = function() {
    var viewModel = {
        array: [
            {message: 'hoge'},
            {message: 'fuga'},
            {message: 'piyo'}
        ]
    };

    ko.applyBindings(viewModel);
};

