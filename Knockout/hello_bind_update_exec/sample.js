window.onload = function() {
    ko.bindingHandlers.myBinding = {
        init: function(element, valueAccessor, allBindings) {
            element.innerText = ko.unwrap(valueAccessor());
        },

        // パラメータがObservableで値が更新されると、update()メソッドがコールバックされる仕組み
        update: function(element, valueAccessor, allBindings) {
            element.innerText = ko.unwrap(valueAccessor());
        }
    };

    var viewModel = {
        message: ko.observable('hello custom binding')
    };

    ko.applyBindings(viewModel);
};
