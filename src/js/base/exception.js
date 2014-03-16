/**
 * Created by mradul on 10/01/14.
 */
var $ = $ || {};
$.jsp = $.jsp || {};
$.jsp.base = $.jsp.base || {};

$.jsp.base.JSPlusBaseException = function(message) {
    this.name = "JS Plus Base Exception";
    this.message = message;
};

// subclass extends superclass
$.jsp.base.JSPlusBaseException.prototype = Object.create(Error.prototype);

// fixed constructor
$.jsp.base.JSPlusBaseException.prototype.constructor = $.jsp.base.JSPlusBaseException;


$.jsp.base.JSPlusBaseException.prototype.toString = function() {
    return '[' + this.name + '] ' + this.message;
};