/**
 * Created by mradul on 10/01/14.
 */
var $ = $ || {};
$.jsp = $.jsp || {};
$.jsp.collection = $.jsp.collection || {};

$.jsp.collection.JSPlusCollectionException = function(message) {
    $.jsp.base.JSPlusBaseException.call(this,message);
};

// subclass extends superclass
$.jsp.collection.JSPlusCollectionException.prototype = Object.create($.jsp.base.JSPlusBaseException.prototype);

// fixed constructor
$.jsp.collection.JSPlusCollectionException.prototype.constructor = $.jsp.collection.JSPlusCollectionException;