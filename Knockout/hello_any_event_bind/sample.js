window.onload = function() {
    var viewModel = {
        param: {
            mouseover: function() {
                console.log('over');
            },
            mouseout: function() {
                console.log('out');
            }
        }
    };

    ko.applyBindings(viewModel);
};

