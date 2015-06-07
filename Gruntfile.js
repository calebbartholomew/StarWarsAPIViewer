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
      client: {
        expand: true,
        cwd: 'src/jsx',
        src: ['**/*.jsx'],
        dest: 'bin/jsx/',
        ext: '.js'
      }
    },

    //
    // Clump everything together.
    //
    concat: {
      client: {
        src:  ['bin/jsx/components/**/*.js','bin/jsx/app.js'],
        dest: 'bin/tmp-client.js'
      }
    },

    //
    // Tried using browserify but had dificulties getting it to do
    // what I wanted.  Will use this semi-dangerous work around for now.
    // This will replace our require and module.export statements so
    // we can use our react code in the browser.
    //
    'string-replace': {
      client: {
        files: {
          'bin/public/client.js': 'bin/tmp-client.js'
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
      client: {
        options: {
          mangle: false
        },
        files: {
          'bin/public/client.min.js': ['bin/public/client.js']
        }
      }
    },

    //
    // Watch for and build changes.
    //
    watch: {
      scripts: {
        files: ['src/**/*.jsx'],
        tasks: ['build'],
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

  //
  // Create tasks
  //
  grunt.registerTask('build', ['react', 'concat', 'string-replace', 'uglify']);


  //
  // Default task(s)
  //
  grunt.registerTask('default', ['availabletasks']);

}
