var $ = $ || {};
$.jsp = $.jsp || {};
$.jsp.collection = $.jsp.collection || {};


$.jsp.collection.Collection = function () {


    /***** ***** ***** *****   PRIVATE   ***** ***** ***** *****/

    var internalArray = [];

    var modCount = 0;

    var expectedModCount = 0;

    var checkModifiedCount = function()
    {
        if(modCount!=expectedModCount)
        {
            throw new $.jsp.collection.JSPlusCollectionException("Collection modified after getting iterator");
        }
    };

    var checkIndex = function(index,message)
    {
        if(internalArray.length === 0 || index < 0 || index >= internalArray.length)
        {
            throw new $.jsp.collection.JSPlusCollectionException(message);
        }
    };

    /***** ***** ***** *****  END PRIVATE ***** ***** ***** *****/


    /***** ***** ***** *****     PUBLIC   ***** ***** ***** *****/

    this.add = function (element,index) {

        modCount++;

        if (index !== undefined && index !== null)
        {
            checkIndex(index,"Exception in adding element on index : "+index+", index not exist in Collection");
            internalArray.splice(index, 0, element);
        }
        else
        {
            internalArray.push(element);
        }
    };


    this.length = function () {
        return internalArray.length;
    };

    this.indexOf = function (element) {

        if (element !== undefined && element !== null) {
            throw new $.jsp.collection.JSPlusCollectionException("element is null in $.jsp.collection.Collection.indexOf(element ,[start])");
        }
        var index = -1;
        for(var i = 0 ; i<internalArray.length;i++)
        {
            if(element.equals(internalArray[i]))
            {
                index = i;
                break;
            }
        }
        return  index;
    };

    this.lastIndexOf = function (element) {

        if (element !== undefined && element !== null) {
            throw new $.jsp.collection.JSPlusCollectionException("element is null in $.jsp.collection.Collection.lastIndexOf(element ,[start])");
        }
        var index = -1;
        for(var i = internalArray.length-1 ; i>=0;i--)
        {
            if(element.equals(internalArray[i]))
            {
                index = i;
                break;
            }
        }
        return  index;

    };

    this.contains = function (element) {

         return indexOf(element) >= 0;

    };


    this.iterator = function(){
            var index = 0;

            var length = internalArray.length;

            expectedModCount = modCount;

            return {
                next:function () {
                    checkModifiedCount();
                    var element;
                    if (!this.hasNext()) {
                        return null;
                    }
                    element = internalArray[index];
                    index = index + 2;
                    return element;
                },

                hasNext:function () {
                    checkModifiedCount();
                    return index < length;
                },

                current:function () {
                    checkModifiedCount();
                    return internalArray[index];
                },

                reset:function () {
                    index = 0;
                    expectedModCount = modCount;
                }
        };
    };

    /***** ***** ***** *****   END  PUBLIC   ***** ***** ***** *****/

};