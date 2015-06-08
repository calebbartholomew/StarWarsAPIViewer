module.exports = function(grunt) {

  //
  // Project configuration
  //
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //
    // Compile our jsx to js.
    //
    react: {
      dist: {
        expand: true,
        cwd: 'src/jsx',
        src: ['**/*.jsx'],
        dest: 'bin/js/',
        ext: '.js'
      }
    },

    //
    // Compile our scss
    //
    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['**/*.scss'],
          dest: 'bin/css/styles',
          ext: '.css'
        }]
      }
    },

    //
    // Clump everything together.
    //
    concat: {
      scripts: {
        src:  ['bin/js/components/**/*.js','bin/js/app.js'],
        dest: 'bin/client.js'
      },
      styles: {
        src:  ['bin/css/**/*.css'],
        dest: 'public/css/style.css'
      }
    },

    //
    // Tried using browserify but had dificulties getting it to do
    // what I wanted.  Will use this semi-dangerous work around for now.
    // This will replace our require and module.export statements so
    // we can use our react code in the browser.
    //
    'string-replace': {
      dist: {
        files: {
          'public/js/client.js': 'bin/client.js'
        },
        options: {
          replacements: [{
            pattern: /module\.exports\s*(exports)?\s*=/ig,
            replacement: ''
          },{
            pattern: /.*require.*/ig,
            replacement: ''
          }]
        }
      }
    },

    //
    // Make the script smaller!
    //
    uglify: {
      dist: {
        options: {
          mangle: false
        },
        files: {
          'public/js/client.min.js': ['public/js/client.js']
        }
      }
    },

    //
    // Make the style smaller.
    //
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'public/css/',
          src: ['style.css'],
          dest: 'public/css/',
          ext: '.min.css'
        }]
      }
    },

    //
    // Copy other resources and libraries
    //
    copy: {
      dist: {
        files: [
          // React.js
          {expand: true, flatten: true, src: ['node_modules/react/dist/*.js'], dest: 'public/js', filter: 'isFile'}
        ]
      }
    },

    //
    // Watch for and build changes.
    //
    watch: {
      scripts: {
        files: ['src/jsx/**/*.jsx'],
        tasks: ['build:scripts'],
        options: {
          spawn: false,
          atBegin: true
        }
      },
      styles: {
        files: ['src/scss/**/*.scss'],
        tasks: ['build:styles'],
        options: {
          spawn: false,
          atBegin: true
        }
      },
      resources: {
        files: ['node_modules/react/dist/*.js'],
        tasks: ['build:copy'],
        options: {
          spawn: false,
          atBegin: true
        }
      }
    },

    //
    // Lists all the grunt tasks available.
    //
    availabletasks: {
      tasks: {}
    }
  });


  //
  // Load plugins
  //
  grunt.loadNpmTasks('grunt-react');  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-available-tasks');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //
  // Create tasks
  //
  grunt.registerTask('build:scripts', ['react', 'concat', 'string-replace', 'uglify']);
  grunt.registerTask('build:styles', ['sass', 'concat:styles', 'cssmin']);
  grunt.registerTask('build:copy', ['copy']);
  grunt.registerTask('build', ['build:copy', 'build:styles', 'build:scripts']);


  //
  // Default task(s)
  //
  grunt.registerTask('default', ['availabletasks']);

}
