window.onload = function() {
    var viewModel = {
        array: ko.observableArray([
            'hoge',
            'fuga',
            'piyo'
        ])
    };

    ko.applyBindings(viewModel);

    document.getElementById('add').onclick = function() {
        viewModel.array.push('add');
    };

    document.getElementById('remove').onclick = function() {
        viewModel.array.pop();
    };
};
