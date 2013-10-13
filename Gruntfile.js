module.exports = function (grunt) {
	
	var bannerContent = '/* <%= pkg.name %> v<%= pkg.version %> '+
						'<%= grunt.template.today("dd-mm-yyyy")%> \n\n'+
						'<%=pkg.licence%>*/\n\n';

	var name = "<%= pkg.name %>-<%=pkg.version%>";
	var latest = "<%= pkg.name %>";


	var devRelease = 'dest/'+name+'.js';
	var minRelease = 'dest/'+name+'.min.js';
	var sourceMapMin = 'dest/'+name+'.min.js.map';
    var sourceMapUrl = name+'.min.js';

	var ldevRelease = 'dest/'+latest+'.js';
	var lminRelease = 'dest/'+latest+'.min.js';
	var lsourceMapMin = 'dest/'+latest+'.min.js.map';

	


	//Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint:{
			options:{

			},
			target:
			{
				src:['src/**/*.js','test/**/*.js']
			}
		},
		concat:{
			options:{
				banner: bannerContent
			},
			target:
			{
                src:['src/js/common.js','src/js/splitter.js','src/js/joinner.js','src/js/arrays.js'],
				dest: devRelease
			}
		},
		uglify:{
			options:{
				banner: bannerContent,
				sourceMapRoot:'../',
				sourceMap: sourceMapMin,
				sourceMappingURL: sourceMapUrl
			},
			target:
			{
				src:['src/**/*.js'],
				dest: minRelease
			}
		},
		copy:{
			development:{
				src: devRelease,
				dest: ldevRelease
			},
			minified:{
				src : minRelease,
				dest: lminRelease
			},
			smMinified:{
				src : sourceMapMin,
				dest: lsourceMapMin
			}
		},
		qunit:{
			target:{
				src:{
					src:['test/**/*.html'],
				}
			}
		}	
	});

	//Load the plugin that provide the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	//Default task(s)
	grunt.registerTask('default',['jshint','concat','uglify','copy','qunit']);
}