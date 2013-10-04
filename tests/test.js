var str = " a , b, ,c";

test("Splitter test", function() {
ok( 4==$.helper.Splitter.on(',').split(str).length, "Correct length!" );
ok( 3==$.helper.Splitter.on(',').omitEmptyString().split(str).length, "Omit empty string" );
ok( 1==$.helper.Splitter.on(',').trimResult().split(str)[0].length, "Check trim string" );
});