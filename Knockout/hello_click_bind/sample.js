window.onload = function() {
    var viewModel = {
        onClick: function() {
            alert('click!!');
        }
    };

    ko.applyBindings(viewModel);
};

