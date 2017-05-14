window.onload = function() {
    ko.bindingHandlers.myBinding = {
        init: function(element, valueAccessor, allBindings) {
            var param = valueAccessor();

            var msg = 'observableValue=' + ko.unwrap(param.observableValue)
                    + ', standardValue=' + ko.unwrap(param.standardValue);

            element.innerText = msg;
        }
    };

    var viewModel = {
        myModel: {
            observableValue: ko.observable(201),
            standardValue: 301
        }
    };

    ko.applyBindings(viewModel);
};
