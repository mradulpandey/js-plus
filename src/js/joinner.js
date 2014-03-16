var $ = $ || {};
$.helper = $.helper || {};

$.helper.Joiner = function () {

    var that = this;

    var _on = " ";
    var _useForNull = null;
    var _skipNulls = false;

    that.on = function (argument) {
        _on = argument;
        return that;
    };

    that.skipNulls = function () {
        _skipNulls = true;
        return that;
    };

    that.useForNull = function (argument) {
        _useForNull = argument;
        return that;
    };

    that.join = function () {
        var val = "";

        if (!arguments.length) return val;

        for (var i = 0; i < arguments.length; i++) {
            if (_useForNull) {
                val += (arguments[i] === null ? _useForNull + _on : arguments[i] + _on);
            }
            else if (_skipNulls) {
                val += (arguments[i] === null ? "" : arguments[i] + _on);
            }
            else {
                val += (arguments[i] + _on);
            }
        }

        return val.slice(0, val.length - _on.length);
    };

    return that;

};