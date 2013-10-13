var $ = $ || {};
$.helper = $.helper || {};

$.helper.Splitter = function() {

		var that = this;

		var _on = " ";
		var _trim = false;
		var _omit = false;

		that.on = function(argument){
			_on = argument;
			return that;
		};
		that.trimResult=function(){
			_trim = true;
			return that;
		};

		that.omitEmptyString = function(){
			_omit = true;
			return that;
		};

		that.split=function(str){
			var _arr = str.split(_on);
			var _tempArr = null;
			if(_trim || _omit)
			{
				_tempArr = [];
				for (var i = 0; i < _arr.length; i++) {

					var val = _arr[i].replace(/^\s+|\s+$/g,'');

					if((_omit && _trim)&& val.length)
					{
						_tempArr.push(val);
					}
					else if(_trim)
					{
						_tempArr.push(val);
					}
					else if(_omit && val.length)
					{
						_tempArr.push(_arr);
					}
					
				}
			}
			else
			{
				_tempArr = _arr; 
			}


			return _tempArr;
		};

        return that;

};