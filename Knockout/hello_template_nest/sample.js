window.onload = function() {
    var viewModel = {
        parentModel: {
            name: 'ParentName',
            childModel: {
                name: 'ChildName'
            }
        }
    };

    ko.applyBindings(viewModel);
};
