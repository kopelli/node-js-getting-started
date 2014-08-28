module.exports = function(grunt) {
    grunt.initConfig({
        exec: {
            deploy: {
                cmd: 'git push heroku master'
            },
            'switch-to-branch': {
                cmd: function(branch) {
                    return 'git checkout ' + branch;
                }
            },
            'merge-master-to-current-branch': {
                cmd: 'git merge master --no-ff'
            },
            'tag-branch': {
                cmd: function() {
                    return 'git tag ' + new Date().toISOString().replace(/:/g, "-");
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('deploy',
        'Push this thing out to Heroku',
        ['exec:switch-to-branch:deploy',
         'exec:merge-master-to-current-branch',
         'exec:deploy',
         'exec:tag-branch',
         'exec:switch-to-branch:master']);

    grunt.registerTask('default', 'Run this when you don\'t know what else to do...', function() {
        grunt.log.write('Good job...you ran the default task!');
    });
};
