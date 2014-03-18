module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            my_target: {
                files: {
                    'js/script.min.js': ['js/script.js']
                    //'twitterbday/js/script.min.js': ['twitterbday/js/script.js']
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
                files: ['css/style.css'],
                tasks: ['cssmin'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['js/script.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'cssmin', 'watch']);

};