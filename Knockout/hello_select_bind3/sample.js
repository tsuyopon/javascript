window.onload = function() {
    var viewModel = {
        array: [{
            id: 11,
            name: 'HOGE'
        }, {
            id: 22,
            name: 'FUGA'
        }, {
            id: 33,
            name: 'PIYO'
        }]
    };

    ko.applyBindings(viewModel);
};

