window.onload = function() {
    ko.bindingHandlers.myBinding = {
        init: function(element, valueAccessor, allBindings) {
            var param = valueAccessor();
            element.innerText = 'param = ' + param;
        }
    };

    ko.applyBindings();
};
