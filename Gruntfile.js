module.exports = function(grunt) {

  //
  // Project configuration
  //
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    react: {
      client: {
        expand: true,
        cwd: 'src/jsx',
        src: ['**/*.jsx'],
        dest: 'bin/jsx/',
        ext: '.js'
      }
    },
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      app: {
        src:  ['bin/jsx/**/*.js'],
        dest: 'bin/public/client.js'
      }
    },
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
    availabletasks: {
      tasks: {}
    }
  });


  //
  // Load plugins
  //
  grunt.loadNpmTasks('grunt-react');  
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-available-tasks');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //
  // Create tasks
  //
  grunt.registerTask('build', ['react', 'browserify', 'uglify']);


  //
  // Default task(s)
  //
  grunt.registerTask('default', ['availabletasks']);

};
