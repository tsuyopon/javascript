window.onload = function() {
    var viewModel = {
        name: 'root',
        onClick: function(obj) {
            console.log(obj.name);
        },
        sub: {
            name: 'sub',
            onClick: function(obj) {
                console.log(obj.name);
            }
        },
        sub2: {
            name: 'sub2',
            onClick: function(obj, event) {   // 第２引数を指定した場合にはイベントオブジェクトが渡される
                console.log(obj.name + ", event=" + event.type);
            }
        }
    };

    ko.applyBindings(viewModel);
};
