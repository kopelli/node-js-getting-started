module.exports = function(grunt) {
    grunt.initConfig({
        exec: {
            deploy: {
                cmd: 'git push heroku master'
            }
        }
    });
    grunt.registerTask('deploy', 'Push this thing out to Heroku', ['exec:deploy']);

    grunt.registerTask('default', 'Run this when you don\'t know what else to do...', function() {
        grunt.log.write('Good job...you ran the default task!');
    });
};
