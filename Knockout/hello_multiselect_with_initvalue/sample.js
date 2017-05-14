window.onload = function() {
    var viewModel = {
        array: ['hoge', 'fuga', 'piyo'],
        selectedArray: ['hoge', 'piyo']
    };

    ko.applyBindings(viewModel);
};
