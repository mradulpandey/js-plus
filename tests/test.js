var str = " a, b, ,c";

test("Splitter test", function() {
    ok( 4==(new $.helper.Splitter().on(',').split(str).length), "Correct length!" );
    ok( 3==new $.helper.Splitter().on(',').omitEmptyString().split(str).length, "Omit empty string" );
    ok( 1==new $.helper.Splitter().on(',').trimResult().split(str)[0].length, "Check trim string" );
});

test("Joiner test", function() {
    ok( "a,1,3,null,sd" == new $.helper.Joiner().on(',').join("a",1,3,null,"sd"), "Correct result " );
    ok( "a,1,3,sd" == new $.helper.Joiner().on(',').skipNulls().join("a",1,3,null,"sd"), "Correct result!" );
    ok( "a,1,3,$,sd" == new $.helper.Joiner().on(',').skipNulls().useForNull("$").join("a",1,3,null,"sd"), "Correct result!" );
    ok( "" == new $.helper.Joiner().on(',').skipNulls().useForNull("$").join(), "Correct result!" );
});
