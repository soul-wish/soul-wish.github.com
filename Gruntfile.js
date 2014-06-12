module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            my_target: {
                files: {
                    'js/script.min.js': ['js/script.js'],
                    'zen/js/script.min.js': ['zen/js/script.js'],
                    'speakit/js/script.min.js': ['speakit/js/script.js']
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'tweetfeed/css/style.css': 'tweetfeed/sass/style.scss',
                    'speakit/css/style.css': 'speakit/sass/style.sass'
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    'css/style.min.css': ['css/style.css']
                }
            }
        },

        watch: {
            css: {
                files: ['css/style.css', 'tweetfeed/sass/style.scss', 'speakit/sass/style.sass'],
                tasks: ['sass', 'cssmin'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['js/script.js', 'zen/js/script.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'uglify', 'cssmin', 'watch']);

};