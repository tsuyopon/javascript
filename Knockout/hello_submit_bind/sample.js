window.onload = function() {
    var viewModel = {
        onSubmit: function() {
            console.log('submit!!');
        }
    };

    ko.applyBindings(viewModel);
};
