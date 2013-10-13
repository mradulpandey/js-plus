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
