module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit']);

};
