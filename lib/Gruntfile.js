/*Configured to lint, update css, compile to built.js and refresh the browser*/

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        predef: [ "document", "console", ],
        esnext: true,
        globalstrict: true,
        globals: {"$": false, "jQuery": false},
        reporter: require('jshint-stylish')
      },
      files: ['../javascripts/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../scss/styles.scss'
        }
      }
    },
    concat: {
      js: {
              files: {'../dist/built.js': '../javascripts/**/*.js' }
          }
    },
    connect: {
      server: {
        options: {
          base: '../',
          hostname: 'localhost',
          port: 8080,
          livereload: true,
          open: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'concat']
      },
      sass: {
        files: ['../scss/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'concat', 'connect', 'watch']);
};