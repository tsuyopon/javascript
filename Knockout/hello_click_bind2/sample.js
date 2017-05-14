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
            onClick: function(obj, event) {   // $BBh#20z?t$r;XDj$7$?>l9g$K$O%$%Y%s%H%*%V%8%'%/%H$,EO$5$l$k(B
                console.log(obj.name + ", event=" + event.type);
            }
        }
    };

    ko.applyBindings(viewModel);
};
