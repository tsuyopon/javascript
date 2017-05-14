window.onload = function() {
    var ViewModel = function() {
        this.hoge = ko.observable('Hoge');
        this.fuga = ko.observable('Fuga');

        this.piyo = ko.computed(function() {
            return this.hoge() + this.fuga();
        }, this);
    };

    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
};
