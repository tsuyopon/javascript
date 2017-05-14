window.onload = function() {
    ko.bindingHandlers.myBinding = {
        init: function(element, valueAccessor, allBindings) {
            element.innerText = 'Hello Custom Binding!!';
        }
    };

    ko.applyBindings();
};
