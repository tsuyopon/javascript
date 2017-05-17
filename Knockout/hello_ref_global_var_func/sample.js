var myObj = {};
 
myObj.name = 'taro';
myObj.func = function () {
    return 'hoge';
};
 
window.onload = function () {
    'use strict';
 
    var viewModel = {};
 
    ko.applyBindings(viewModel);
};
