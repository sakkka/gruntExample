module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

      /*
         1. Je configure ma tâche
         (la doc de chaque package vous fournira les options disponibles)
      */
      concat: {
        dist: {
          src: ['javascript/*.js'],
          dest: 'js/production.js'
        }
      },

      uglify: {
        build: {
          src: ['javascript/*.js'],
          dest: 'js/production-min.js'
        }
      },
      imagemin: {
        dynamic: {
          files: [{
          	expand : true,
          	cwd : 'image/',
          	src : '**/*.{png,jpg,jpeg,gif}',
          	dest : 'img/'
          }]
        }
      },
      sass: {
        dist: {
          options : {
          	style : 'compressed'
          },
          files : {
          	'css/global.css' : 'css/starter.scss'
          }
        }
      },
      watch: {
        scripts: {
          files : ['javascript/*.js'],
          tasks : ['concat', 'uglify'],
          options : {
            spawn : false
          }
        },
        css: {
          files : ['css/*.scss'],
          tasks : ['sass'],
          options : {
            spawn : false
          }
        }
      }

    });

      // 2. Je charge ma tâche
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-imagemin');
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-contrib-watch');

      // J'assigne ma tâche à la commande par défaut de Grunt
      grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'watch']);

};