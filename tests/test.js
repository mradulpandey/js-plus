var str = " a, b, ,c";

test("Splitter test", function() {
    equal(4,new $.helper.Splitter().on(',').split(str).length, "Correct length!" );
    equal(3,new $.helper.Splitter().on(',').omitEmptyString().split(str).length, "Omit empty string" );
    equal(1,new $.helper.Splitter().on(',').trimResult().split(str)[0].length, "Check trim string" );
});

test("Joiner test", function() {
    equal( "a,1,3,null,sd" , new $.helper.Joiner().on(',').join("a",1,3,null,"sd"), "Correct result " );
    equal( "a,1,3,sd" , new $.helper.Joiner().on(',').skipNulls().join("a",1,3,null,"sd"), "Correct result!" );
    equal( "a,1,3,$,sd" , new $.helper.Joiner().on(',').skipNulls().useForNull("$").join("a",1,3,null,"sd"), "Correct result!" );
    equal( "" , new $.helper.Joiner().on(',').skipNulls().useForNull("$").join(), "Correct result!" );
});


test("Arrays test", function() {
    var arr = new $.jsp.collection.Collection();
    arr.add("a");
    arr.add("b",0);
    var it = arr.iterator();
    equal( "b" ,it.next() , "Correct result " );
    arr.add("c");
    throws(function(){
        try{
            it.next()
        }catch(e)
        {
            throw e;
        }
    } ,$.jsp.collection.JSPlusCollectionException,"Raised error message contains 'Collection modified'");
    arr.add("d",2)
    throws(function(){
        try{
            arr.add("e",7);
        }catch(e)
        {
            throw e;
        }
    } ,$.jsp.collection.JSPlusCollectionException,"Raised error message contains 'Index'")


});
