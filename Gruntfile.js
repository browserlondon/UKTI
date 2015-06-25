'use strict';

module.exports = function(grunt) {
    // Show elapsed time after tasks run
    require('time-grunt')(grunt);
    // Load all Grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // Configurable paths
        watch: {
            sass: {
                files: ['assets/styles/**/*.scss'],
                tasks: ['sass:app', 'autoprefixer:app', 'csso:app',  'pixrem:app']
            },

            images: {
                files: ['assets/img/**/*'],
                tasks: ['svgmin:app', 'svg2png:app', 'imagemin:app']
            },

            scripts: {
                files: ['assets/scripts/src/**/*.js'],
                tasks: ['requirejs:app']
            },

            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '*.html',
                    'assets/styles/**/*.css',
                    'assets/scripts/compiled/**/*.js',
                    'assets/images/**/*.{gif,jpg,jpeg,png,svg,webp}'
                ]
            }
        },

        connect: {
            options: {
                // keepalive: true,
                port: 4000,
                base: '.',
                open: true
            },
            livereload: {
                options: {
                    open: true,
                    base: ['']
                }
            }
        },

        sass: {
            options: {
                bundleExec: true,
                debugInfo: false,
                lineNumbers: false,
            },
            app: {
                files: [{
                    expand: true,
                    cwd: 'assets/styles',
                    src: '**/*.scss',
                    dest: 'assets/styles',
                    ext: '.css'
                }]
            },
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', '> 1%', 'ie 8', 'ie 9']
            },
            app: {
                files: [{
                    expand: true,
                    cwd: 'assets/styles',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/styles'
                }]
            },
        },

        csso: {
            app: {
                expand: true,
                cwd: 'assets/styles/',
                src: ['*.css', '!*.min.css'],
                dest: 'assets/styles/',
                ext: '.min.css'
            }
        },

        pixrem: {
            options: {
                rootvalue: '62.5%',
                atrules: true
            },
            app: {
                expand: true,
                cwd: 'assets/styles/',
                src: ['*.min.css'],
                dest: 'assets/styles/',
            }
        },

        requirejs: {
            app: {
                options: {
                    baseUrl: 'assets/scripts/src/',
                    mainConfigFile: "assets/scripts/src/main.js",
                    dir: 'assets/scripts/compiled/',
                    findNestedDependencies: true,
                    preserveLicenseComments: false,
                    removeCombined: false,
                    optimize: "uglify",
                    modules: [{
                        name: 'main',
                    }]
                }
            }
        },
        
        svgmin: {
            options: {
                full: true,
                plugins: [
                    {cleanupIDs: false},                  // don't remove  ids
                    {removeViewBox: false},               // don't remove the viewbox atribute from the SVG
                    {removeUselessStrokeAndFill: false},  // don't remove Useless Strokes and Fills
                    {removeEmptyAttrs: false}             // don't remove Empty Attributes from the SVG
                ]
            },
            app: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: ["assets/images/**/*.svg", "../../uploads/**/**/**/*.svg"],
                    dest: ''
                }]
            },
        },

        svg2png: {
            app: {
                files: [{
                    src: ["assets/images/**/*.svg", "../../uploads/**/**/**/*.svg"]
                }]
            },
        },

        imagemin: {
            app: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: '',
                    src: ["assets/**/*.{jpg,jpeg,png}"],
                    dest: ''
                }]
            },
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            app: [
                'Gruntfile.js',
                'assets/scripts/src/**/*.js',
            ]
        },

        modernizr: {
            app: {
                "devFile": "assets/scripts/src/libs/modernizr-dev.js",
                "outputFile": "assets/scripts/src/libs/modernizr-custom.js",
                "extra": {
                    'shiv': false,
                    'printshiv': false,
                    'load': true,
                    'mq': true,
                },
                "extensibility": {
                    'prefixed': true
                },
                "uglify": true,
                "matchCommunityTests": true,
                tests: [
                    'css-backgroundposition-xy', 'css-backgroundposition-shorthand', 'video'
                ],

                // By default, this task will crawl your project for references to Modernizr tests.
               // Set to false to disable.
               "parseFiles" : true,

               // When parseFiles = true, this task will crawl all *.js, *.css, *.scss and *.sass files,
               // except files that are in node_modules/.
               // You can override this by defining a "files" array below.
               "files" : {
                   "src": [
                        "assets/scripts/src/**/*.js",
                        "assets/styles/**/*.css"
                    ]
               },
            },
        },

    });

    grunt.registerTask('dev', [
        'connect',
        'watch'
    ]);

    grunt.registerTask('images', [
        'svgmin:app',
        'svg2png:app',
        'imagemin:app',
    ]);

    grunt.registerTask('build', [
        'sass:app',
        'autoprefixer:app',
        'csso:app',
        'pixrem:app',
        'svgmin:app',
        'svg2png:app',
        'imagemin:app',
        'modernizr:app',
        'requirejs:app'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};